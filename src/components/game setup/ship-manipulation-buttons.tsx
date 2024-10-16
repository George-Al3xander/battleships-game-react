import { HTMLAttributes } from "react";
import { Ship } from "react-battleships-engine";
import { FaArrowsRotate, FaArrowsUpDownLeftRight } from "react-icons/fa6";

const btnClassName: HTMLAttributes<HTMLButtonElement>["className"] =
    "text-white";
const iconSize: number = 20;

const icons = [FaArrowsUpDownLeftRight, FaArrowsRotate];

const srText = ["Move", "Rotate"];

function ShipManipulationButtons({
    ship,
    changeDirection,
    moveShip,
    index,
}: {
    index: number;
    ship: Ship;
    changeDirection: (ship: Ship) => void;
    moveShip: (ship: Ship) => void;
}) {
    if (index <= 1) {
        const funcs = [moveShip, changeDirection];

        const func = funcs[index];
        const Icon = icons[index];

        return (
            <button
                tabIndex={2}
                className={btnClassName}
                onClick={() => func(ship)}
            >
                <Icon size={iconSize} />
                <span className={"sr-only"}>{srText[index]} ship</span>
            </button>
        );
    }
}

export default ShipManipulationButtons;
