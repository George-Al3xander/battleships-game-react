import { ComponentProps, createElement } from "react";
import {
    Coords,
    coordsType,
    Direction,
    Ship,
    shipsLength,
    ShipType,
    TCoords,
    useGameBoard,
} from "react-battleships-engine";
import toast from "react-hot-toast";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { ShipManipulationButtons } from "@/components/game setup";
import { ERRORS_MESSAGE, MetaData } from "@/constants/consts";
import {
    KeyName,
    TGameStep,
    TGBHookRes,
    TKeyboardCallback,
    TKeyboardEventCallback,
    TMapBoolStr,
    TPlayerHookRes,
} from "@/types/type";

import ShipModel from "../components/ship-model";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const checkIfShipInBounds = ({
    cellCoords,
    direction,
    shipType,
}: {
    cellCoords: Coords;
    shipType: ShipType;
    direction: Direction;
}) => {
    const axisType: "x" | "y" = direction === "hor" ? "x" : "y";

    return Boolean(cellCoords[axisType] - 1 + shipsLength[shipType] <= 10);
};

export const isTwoCoordsEqual = (first?: Coords, second?: Coords): boolean => {
    first = new Coords(first);
    second = new Coords(second);

    return first.toString() === second.toString();
};

export const handleKeyPress = <T extends HTMLElement>(
    keyName: KeyName | KeyName[],
    cb: TKeyboardCallback<T> | TKeyboardCallback<T>[],
): TKeyboardEventCallback<T> => {
    if (
        (Array.isArray(keyName) && !Array.isArray(cb)) ||
        (!Array.isArray(keyName) && Array.isArray(cb))
    ) {
        throw new Error(
            "Both 'keyName' and 'cb' must be either arrays or single values. Ensure they are of the same type.",
        );
    }
    if (Array.isArray(cb) && keyName.length !== cb.length) {
        throw new Error(
            `The length of the key names array (${keyName.length}) does not match the length of the callbacks array (${cb.length}).`,
        );
    }
    return (e) => {
        if (Array.isArray(keyName) && Array.isArray(cb)) {
            keyName.forEach((key: KeyName, index) => {
                if (key.trim().toLowerCase() === e.key.trim().toLowerCase())
                    cb[index](e);
            });
        } else {
            if (
                (keyName as KeyName).trim().toLowerCase() ===
                e.key.trim().toLowerCase()
            )
                (cb as TKeyboardCallback<T>)(e);
        }
    };
};

export const random = (min: number, max: number) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

export const generateRandomCoords = (): Coords =>
    new Coords({ x: random(1, 10), y: random(1, 10) });

export const convertStringToCoords = (str: string): TCoords => {
    const [x, y] = str.split(",").map((word) => {
        if (word) {
            const matches = word.match(/\d+/);
            if (!matches) return;
            return Number(matches[0]);
        }
    });

    if (!x || !y) throw new Error("Invalid string provided");
    return { x, y };
};

const coordsOrUndefined = (coords: TCoords): Coords | undefined => {
    try {
        return new Coords(coords);
    } catch (e) {
        return;
    }
};

export const getCoordsSurroundings = ({ x, y }: TCoords) => {
    const top = coordsOrUndefined({ x, y: y + 1 });
    const bottom = coordsOrUndefined({ x, y: y - 1 });
    const right = coordsOrUndefined({ x: x + 1, y: y });
    const left = coordsOrUndefined({ x: x - 1, y: y });

    return { top, bottom, right, left };
};

export const doActionIfValueTruthy = (
    callback: (val: string) => void,
    maps: Map<string, boolean>[],
): ((str: string) => boolean) => {
    return (str) => {
        let isMatch = true;

        for (const map of maps) {
            isMatch = Boolean(map.has(str) && map.get(str) === true);
            if (!isMatch) break;
        }

        if (isMatch) {
            callback(str);
            return true;
        } else return false;
    };
};

export const randomAttack = (args: {
    missedCells: TMapBoolStr;
    hitCells: TMapBoolStr;
    opponentReceiveAttack: ReturnType<typeof useGameBoard>["receiveAttack"];
    toggleTurn: () => void;
}) => {
    const { missedCells, hitCells, opponentReceiveAttack, toggleTurn } = args;
    const lastHitCoords = Array.from(missedCells.keys()).pop();

    const attackIfNotInMaps = doActionIfValueTruthy(
        (c: string) => opponentReceiveAttack(convertStringToCoords(c)),
        [hitCells, missedCells],
    );

    if (missedCells.size === 0 || !lastHitCoords) {
        opponentReceiveAttack(generateRandomCoords());
    } else {
        const lastCoords = convertStringToCoords(lastHitCoords);
        const { top, bottom, left, right } = getCoordsSurroundings(lastCoords);

        let doAttack = false;
        if (top) doAttack = attackIfNotInMaps(top.toString());
        else if (bottom) doAttack = attackIfNotInMaps(bottom.toString());
        else if (right) doAttack = attackIfNotInMaps(right.toString());
        else if (left) doAttack = attackIfNotInMaps(left.toString());

        if (doAttack) {
            toggleTurn();
        } else {
            try {
                opponentReceiveAttack(generateRandomCoords());
                toggleTurn();
            } catch (e) {
                randomAttack(args);
            }
        }
    }
};

export const toastTryCatch = (
    func: () => void,
    errMessage: string | undefined = ERRORS_MESSAGE["default"],
) => {
    try {
        func();
    } catch (e) {
        toast.error(e instanceof Error ? e.message : errMessage);
    }
};

export const fillTakenCellsWithShips = (
    ships: TGBHookRes["ships"],
): TGBHookRes["takenCells"] => {
    const newTakenCells = new Map();
    for (const ship of ships.values()) {
        for (const coords of ship) {
            newTakenCells.set(coords.toString(), ship.type);
        }
    }

    return newTakenCells;
};

export const getShipByStartingCoords = (
    ships: TGBHookRes["ships"],
    coords: TCoords,
) =>
    [...ships.values()].find(
        (ship) => ship.coords.toString() === coords.toString(),
    );

export const genShipManipulationBtns =
    (
        props: Omit<ComponentProps<typeof ShipManipulationButtons>, "index">,
    ): ComponentProps<typeof ShipModel>["cellProps"] =>
    (__, index) => ({
        className: [
            "flex justify-center items-center ",
            {
                "cell-action-parent": index > 1,
            },
        ],
        children: createElement(ShipManipulationButtons, {
            ...props,
            index,
        }),
    });

export const genShipOnBoard = ({
    ship: { type, direction, coords },
    className,
    ...props
}: {
    ship: Ship;
} & Omit<
    ComponentProps<typeof ShipModel>,
    "shipType" | "direction" | "coords"
>) => {
    return createElement(ShipModel, {
        shipType: type,
        direction,
        coords,
        className: cn("absolute left-0 top-0 z-10", className),
        ...props,
    });
};

export const generateGameBoardCells = (): Map<string, boolean> => {
    const map = new Map<string, boolean>();

    coordsType.forEach(() => {
        for (let i = 1; i <= 10; i++) {
            for (let j = 1; j <= 10; j++) {
                map.set(`(${i},${j})`, false);
            }
        }
    });

    return map;
};

export const genWinMessage = (firstPlayer: TPlayerHookRes) =>
    `${firstPlayer.hasLost ? "Robot" : "You"} win`;

export function genMetaTitle({
    step,
    player1,
}: {
    step: TGameStep;
    player1: TPlayerHookRes;
}) {
    if (step === "decision") {
        return `${genWinMessage(player1)} | ${MetaData["title"]}`;
    }

    return `${step[0].toUpperCase() + step.substring(1)} | ${MetaData["title"]}`;
}
