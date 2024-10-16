import { Coords, Direction, ShipType } from "react-battleships-engine";

import { atom } from "jotai";

export const $currentShipType = atom<ShipType>();
export const $currentDirection = atom<Direction>("hor");
export const $dragCellIndex = atom<number>(0);
export const $hoverCellCoords = atom<Coords>();
