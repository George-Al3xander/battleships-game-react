import { TCoords } from "react-battleships-engine";
import { TPlayerHookRes } from "@/types/type";
declare function PlayerFleet({ data: { ships, getCellStates, isPlayerTurn }, isOpponent, onCellClick, }: {
    data: TPlayerHookRes;
    isOpponent: boolean;
    onCellClick: (c: TCoords) => void;
}): import("react/jsx-runtime").JSX.Element;
export default PlayerFleet;
