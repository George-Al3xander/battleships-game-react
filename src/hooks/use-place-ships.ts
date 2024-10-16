import { directionTypes, Ship } from "react-battleships-engine";
import toast from "react-hot-toast";

import { useGBSetupContext } from "@/context/game-setup-context.tsx";
import {
    $currentDirection,
    $currentShipType,
    $hoverCellCoords,
} from "@/store/atoms.ts";
import { useAtom } from "jotai/react";

import { toastTryCatch } from "../lib/utils";

const usePlaceShips = () => {
    const [currentShipType, setCurrentShipType] = useAtom($currentShipType);
    const [currentDirection, setCurrentDirection] = useAtom($currentDirection);
    const [hoverCellCoords, setHoverCellCoords] = useAtom($hoverCellCoords);
    const gameBoardContext = useGBSetupContext();

    const {
        placeShip: placeShipContext,
        ships,
        takenCells,
        setTakenCells,
        setShips,
        removeShip,
    } = gameBoardContext;

    const changeDirection = (ship: Ship) => {
        const newShips = new Map(ships);
        newShips.delete(ship.type);

        const newTakenCells = new Map(takenCells);
        for (const coords of ship) {
            newTakenCells.delete(coords.toString());
        }
        const newDirection = directionTypes.find(
            (dir) => dir !== ship.direction,
        )!;

        toastTryCatch(() => {
            const newShip = new Ship({ ...ship, direction: newDirection });
            let isValid = false;
            for (const coords of newShip) {
                isValid = !newTakenCells.has(coords.toString());
                if (!isValid) {
                    toast.error(
                        "Ship placement error: The ship overlaps with another ship.",
                    );
                    break;
                }
            }

            if (isValid) {
                for (const coords of newShip) {
                    newTakenCells.set(coords.toString(), ship.type);
                }
                newShips.set(ship.type, newShip);
                setTakenCells(newTakenCells);
                setShips(newShips);
            }
        });
    };

    const moveShip = (ship: Ship) => {
        const { type, direction } = ship;
        removeShip(ship);
        setCurrentDirection(direction);
        setCurrentShipType(type);
    };

    const placeShip = () => {
        if (!currentShipType || !hoverCellCoords) return;
        toastTryCatch(() => {
            placeShipContext({
                type: currentShipType,
                direction: currentDirection,
                coords: hoverCellCoords,
            });
            setCurrentShipType(undefined);
            setCurrentDirection("hor");
        });
    };

    return {
        ...gameBoardContext,
        placeShip,
        changeDirection,
        moveShip,
        currentDirection,
        currentShipType,
        setHoverCellCoords,
        hoverCellCoords,
    };
};

export default usePlaceShips;
