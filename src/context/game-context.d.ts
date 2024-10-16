import { ReactNode } from "react";
import useGame from "../hooks/use-game";
type TGameContext = ReturnType<typeof useGame>;
export declare const GameContextProvider: ({ children, value, }: {
    children: ReactNode;
    value: TGameContext;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useGameContext: () => {
    step: import("../types/type").TGameStep;
    player1: {
        placeShip: (params: {
            type: import("react-battleships-engine").ShipType;
            coords: import("react-battleships-engine").TCoords;
            direction: import("react-battleships-engine").Direction;
        }) => void;
        ships: Map<import("react-battleships-engine").ShipType, import("react-battleships-engine").Ship>;
        setShips: import("react").Dispatch<import("react").SetStateAction<Map<import("react-battleships-engine").ShipType, import("react-battleships-engine").Ship>>>;
        takenCells: Map<string, import("react-battleships-engine").ShipType>;
        setTakenCells: import("react").Dispatch<import("react").SetStateAction<Map<string, import("react-battleships-engine").ShipType>>>;
        missed: Map<string, boolean>;
        setMissed: import("react").Dispatch<import("react").SetStateAction<Map<string, boolean>>>;
        hitCells: Map<string, boolean>;
        setHitCells: import("react").Dispatch<import("react").SetStateAction<Map<string, boolean>>>;
        setHasLost: import("react").Dispatch<import("react").SetStateAction<boolean>>;
        randomlyPlaceShips: () => void;
        hasLost: boolean;
        receiveAttack: (coords: import("react-battleships-engine").TCoords) => void;
        inspectCoordsInShips: ({ coords: paramCoords, missCb, matchCb, }: {
            coords: import("react-battleships-engine").TCoords;
            matchCb: (ship: import("react-battleships-engine").Ship) => void;
            missCb: () => void;
        }) => void;
        resetGameBoard: () => void;
        fillTakenCellsWithShip: (ship: import("react-battleships-engine").Ship, shipType: import("react-battleships-engine").ShipType, _map?: Map<import("react-battleships-engine").ShipType, import("react-battleships-engine").Ship>) => void;
        checkIfCoordsInMap: (cellsMapType: "hit" | "missed" | "taken", param: import("react-battleships-engine").Coords | string) => boolean;
        removeShip: (ship: import("react-battleships-engine").Ship) => void;
        moveShip: (startingShip: import("react-battleships-engine").Ship, newShipInfo: {
            coords: import("react-battleships-engine").TCoords;
            direction: import("react-battleships-engine").Direction;
        }) => void;
        attackOpponent: (coords: import("react-battleships-engine").TCoords) => void;
        isPlayerTurn: boolean;
        getCellStates: (coords: import("react-battleships-engine").TCoords) => {
            isTaken: boolean;
            isHit: boolean;
            isMissed: boolean;
        };
    };
    player2: {
        placeShip: (params: {
            type: import("react-battleships-engine").ShipType;
            coords: import("react-battleships-engine").TCoords;
            direction: import("react-battleships-engine").Direction;
        }) => void;
        ships: Map<import("react-battleships-engine").ShipType, import("react-battleships-engine").Ship>;
        setShips: import("react").Dispatch<import("react").SetStateAction<Map<import("react-battleships-engine").ShipType, import("react-battleships-engine").Ship>>>;
        takenCells: Map<string, import("react-battleships-engine").ShipType>;
        setTakenCells: import("react").Dispatch<import("react").SetStateAction<Map<string, import("react-battleships-engine").ShipType>>>;
        missed: Map<string, boolean>;
        setMissed: import("react").Dispatch<import("react").SetStateAction<Map<string, boolean>>>;
        hitCells: Map<string, boolean>;
        setHitCells: import("react").Dispatch<import("react").SetStateAction<Map<string, boolean>>>;
        setHasLost: import("react").Dispatch<import("react").SetStateAction<boolean>>;
        randomlyPlaceShips: () => void;
        hasLost: boolean;
        receiveAttack: (coords: import("react-battleships-engine").TCoords) => void;
        inspectCoordsInShips: ({ coords: paramCoords, missCb, matchCb, }: {
            coords: import("react-battleships-engine").TCoords;
            matchCb: (ship: import("react-battleships-engine").Ship) => void;
            missCb: () => void;
        }) => void;
        resetGameBoard: () => void;
        fillTakenCellsWithShip: (ship: import("react-battleships-engine").Ship, shipType: import("react-battleships-engine").ShipType, _map?: Map<import("react-battleships-engine").ShipType, import("react-battleships-engine").Ship>) => void;
        checkIfCoordsInMap: (cellsMapType: "hit" | "missed" | "taken", param: import("react-battleships-engine").Coords | string) => boolean;
        removeShip: (ship: import("react-battleships-engine").Ship) => void;
        moveShip: (startingShip: import("react-battleships-engine").Ship, newShipInfo: {
            coords: import("react-battleships-engine").TCoords;
            direction: import("react-battleships-engine").Direction;
        }) => void;
        attackOpponent: (coords: import("react-battleships-engine").TCoords) => void;
        isPlayerTurn: boolean;
        getCellStates: (coords: import("react-battleships-engine").TCoords) => {
            isTaken: boolean;
            isHit: boolean;
            isMissed: boolean;
        };
    };
    startGame: (p1Ships?: import("../types/type").TGBHookRes["ships"], p2Ships?: import("../types/type").TGBHookRes["ships"]) => void;
    isFirstPlayerTurn: boolean;
    togglePlayerTurn: () => void;
};
export {};
