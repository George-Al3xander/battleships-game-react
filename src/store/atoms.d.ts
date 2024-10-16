import { Coords, Direction, ShipType } from "react-battleships-engine";
export declare const $currentShipType: import("jotai").PrimitiveAtom<ShipType | undefined> & {
    init: ShipType | undefined;
};
export declare const $currentDirection: import("jotai").PrimitiveAtom<Direction> & {
    init: Direction;
};
export declare const $dragCellIndex: import("jotai").PrimitiveAtom<number> & {
    init: number;
};
export declare const $hoverCellCoords: import("jotai").PrimitiveAtom<Coords | undefined> & {
    init: Coords | undefined;
};
