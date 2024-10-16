import { Coords, TCoords } from "react-battleships-engine";
import { TGBHookRes, TMapBoolStr, TPlayerVariant } from "@/types/type";
type TAttack = TGBHookRes["receiveAttack"];
declare const usePlayer: ({ type, playerInfo, opponentInfo, isPlayerTurn, togglePlayerTurn, }: {
    type?: TPlayerVariant;
    isPlayerTurn: boolean;
    togglePlayerTurn: () => void;
    playerInfo: TGBHookRes;
    opponentInfo: {
        hitCells: TMapBoolStr;
        missed: TMapBoolStr;
        receiveAttack: TAttack;
    };
}) => {
    placeShip: (params: {
        type: import("react-battleships-engine").ShipType;
        coords: TCoords;
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
    receiveAttack: (coords: TCoords) => void;
    inspectCoordsInShips: ({ coords: paramCoords, missCb, matchCb, }: {
        coords: TCoords;
        matchCb: (ship: import("react-battleships-engine").Ship) => void;
        missCb: () => void;
    }) => void;
    resetGameBoard: () => void;
    fillTakenCellsWithShip: (ship: import("react-battleships-engine").Ship, shipType: import("react-battleships-engine").ShipType, _map?: Map<import("react-battleships-engine").ShipType, import("react-battleships-engine").Ship>) => void;
    checkIfCoordsInMap: (cellsMapType: "hit" | "missed" | "taken", param: Coords | string) => boolean;
    removeShip: (ship: import("react-battleships-engine").Ship) => void;
    moveShip: (startingShip: import("react-battleships-engine").Ship, newShipInfo: {
        coords: TCoords;
        direction: import("react-battleships-engine").Direction;
    }) => void;
    attackOpponent: (coords: TCoords) => void;
    isPlayerTurn: boolean;
    getCellStates: (coords: TCoords) => {
        isTaken: boolean;
        isHit: boolean;
        isMissed: boolean;
    };
};
export default usePlayer;
