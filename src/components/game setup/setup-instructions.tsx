import { FaLongArrowAltRight } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";

import { DOCS_IN_DOM_ID } from "@/constants/consts.ts";

const instructions: string[] = [
    "Click on the desired ship from the list near the gameboard to select it.",
    "Move your cursor over the gameboard and click on the cell where you want to place the ship.",
    "Use the buttons on the placed ship to change its direction or move it if needed.",
];

function SetupInstructions() {
    return (
        <div
            id={DOCS_IN_DOM_ID}
            className="mb-10 flex flex-col items-center gap-6"
        >
            <div className="flex items-center gap-4 self-start">
                <HiLightBulb className="text-yellow-500" size={60} />
                <p className="text-2xl font-bold">Instructions</p>
            </div>
            <ul className="flex flex-col gap-4">
                {instructions.map((text) => (
                    <li
                        className="flex items-center gap-2 font-semibold"
                        key={text}
                    >
                        <FaLongArrowAltRight
                            className="text-yellow-500"
                            size={20}
                        />
                        <p>{text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SetupInstructions;
