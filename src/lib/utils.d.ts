import { ComponentProps } from "react";
import { Coords, Direction, Ship, ShipType, TCoords, useGameBoard } from "react-battleships-engine";
import { type ClassValue } from "clsx";
import { ShipManipulationButtons } from "@/components/game setup";
import ShipForPlacement from "@/components/ship-for-placement";
import { KeyName, TGBHookRes, TKeyboardCallback, TKeyboardEventCallback, TMapBoolStr } from "@/types/type";
export declare function cn(...inputs: ClassValue[]): string;
export declare const checkIfShipInBounds: ({ cellCoords, direction, shipType, }: {
    cellCoords: Coords;
    shipType: ShipType;
    direction: Direction;
}) => boolean;
export declare const isTwoCoordsEqual: (first?: Coords, second?: Coords) => boolean;
export declare const handleKeyPress: <T extends HTMLElement>(keyName: KeyName | KeyName[], cb: TKeyboardCallback<T> | TKeyboardCallback<T>[]) => TKeyboardEventCallback<T>;
export declare const random: (min: number, max: number) => number;
export declare const generateRandomCoords: () => Coords;
export declare const convertStringToCoords: (str: string) => TCoords;
export declare const getCoordsSurroundings: ({ x, y }: TCoords) => {
    top: Coords | undefined;
    bottom: Coords | undefined;
    right: Coords | undefined;
    left: Coords | undefined;
};
export declare const doActionIfValueTruthy: (callback: (val: string) => void, maps: Map<string, boolean>[]) => ((str: string) => boolean);
export declare const randomAttack: (args: {
    missedCells: TMapBoolStr;
    hitCells: TMapBoolStr;
    opponentReceiveAttack: ReturnType<typeof useGameBoard>["receiveAttack"];
    toggleTurn: () => void;
}) => void;
export declare const toastTryCatch: (func: () => void, errMessage?: string | undefined) => void;
export declare const fillTakenCellsWithShips: (ships: TGBHookRes["ships"]) => TGBHookRes["takenCells"];
export declare const getShipByStartingCoords: (ships: TGBHookRes["ships"], coords: TCoords) => Ship | undefined;
export declare const genShipManipulationBtns: (props: Omit<ComponentProps<typeof ShipManipulationButtons>, "index">) => ComponentProps<typeof ShipForPlacement>["cellProps"];
export declare const genShipOnBoard: ({ ship: { type, direction, coords }, className, ...props }: {
    ship: Ship;
} & Omit<ComponentProps<typeof ShipForPlacement>, "shipType" | "direction" | "coords">) => import("react").FunctionComponentElement<{
    className?: ClassValue | ClassValue[];
    shipType: ShipType;
    direction?: Direction;
    coords?: TCoords;
    cellProps?: import("@/types/type").GameBoardProps["cellProps"];
} & Omit<import("react").HTMLAttributes<HTMLLIElement>, "className">>;
export declare const generateGameBoardCells: () => Map<string, boolean>;
