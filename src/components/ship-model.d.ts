import { HTMLAttributes } from "react";
import { Direction, ShipType, TCoords } from "react-battleships-engine";
import { ClassValue } from "clsx";
import { GameBoardProps } from "@/types/type";
declare function ShipForPlacement({ className, direction, shipType: type, coords, cellProps, ...props }: {
    className?: ClassValue | ClassValue[];
    shipType: ShipType;
    direction?: Direction;
    coords?: TCoords;
    cellProps?: GameBoardProps["cellProps"];
} & Omit<HTMLAttributes<HTMLLIElement>, "className">): import("react/jsx-runtime").JSX.Element;
export default ShipForPlacement;
