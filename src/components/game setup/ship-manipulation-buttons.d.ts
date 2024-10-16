import { Ship } from "react-battleships-engine";
declare function ShipManipulationButtons({ ship, changeDirection, moveShip, index, }: {
    index: number;
    ship: Ship;
    changeDirection: (ship: Ship) => void;
    moveShip: (ship: Ship) => void;
}): import("react/jsx-runtime").JSX.Element | undefined;
export default ShipManipulationButtons;
