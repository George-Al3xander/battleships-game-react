import { Ship } from "react-battleships-engine";
declare const usePlaceShips: () => {
    placeShip: () => void;
    changeDirection: (ship: Ship) => void;
    moveShip: (ship: Ship) => void;
    currentDirection: import("react-battleships-engine").Direction;
    currentShipType: import("react-battleships-engine").ShipType | undefined;
    setHoverCellCoords: (args_0: import("react-battleships-engine").Coords | ((prev: import("react-battleships-engine").Coords | undefined) => import("react-battleships-engine").Coords | undefined) | undefined) => void;
    hoverCellCoords: import("react-battleships-engine").Coords | undefined;
    ships: Map<import("react-battleships-engine").ShipType, Ship>;
    takenCells: Map<string, import("react-battleships-engine").ShipType>;
    setShips: import("react").Dispatch<import("react").SetStateAction<Map<import("react-battleships-engine").ShipType, Ship>>>;
    setTakenCells: import("react").Dispatch<import("react").SetStateAction<Map<string, import("react-battleships-engine").ShipType>>>;
    randomlyPlaceShips: () => void;
    resetGameBoard: () => void;
    removeShip: (ship: Ship) => void;
};
export default usePlaceShips;
