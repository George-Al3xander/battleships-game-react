import { HTMLProps, KeyboardEvent } from "react";
import { Coords, useGameBoard } from "react-battleships-engine";
import type { ClassValue } from "clsx";
import usePlayer from "../hooks/use-player";
export type GameBoardProps = {
    cellProps?: (cellCoords: Coords, index: number) => Omit<HTMLProps<HTMLTableCellElement>, "className"> & {
        className?: ClassValue | ClassValue[];
    };
    cellComponent?: React.FC<{
        coords: Coords;
    }>;
};
export type KeyName = "Backspace" | "Tab" | "Enter" | "Shift" | "Control" | "Alt" | "Escape" | "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight" | "Space" | "PageUp" | "PageDown" | "End" | "Home" | "Insert" | "Delete" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" | "F1" | "F2" | "F3" | "F4" | "F5" | "F6" | "F7" | "F8" | "F9" | "F10" | "F11" | "F12";
export type TKeyboardCallback<T> = (e: KeyboardEvent<T>) => void;
export type TKeyboardEventCallback<T> = (e: KeyboardEvent<T>) => void;
export type TMapBoolStr = Map<string, boolean>;
export type TPlayerVariant = "person" | "robot";
export type TGameStep = "setup" | "play" | "decision";
export type TGBHookRes = ReturnType<typeof useGameBoard>;
export type TPlayerHookRes = ReturnType<typeof usePlayer>;
