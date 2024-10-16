import { ReactNode } from "react";
import { useGameBoard } from "react-battleships-engine";
type GameBoardType = Omit<ReturnType<typeof useGameBoard>, "setMissed" | "setHitCells" | "setHasLost" | "hasLost" | "checkIfCoordsInMap" | "receiveAttack" | "hitCells" | "missed" | "inspectCoordsInShips" | "fillTakenCellsWithShip" | "moveShip">;
export declare const GameBoardSetupContextProvider: ({ children, }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useGBSetupContext: () => GameBoardType;
export {};
