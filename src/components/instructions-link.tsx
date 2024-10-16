import { FaQuestion } from "react-icons/fa";

import { useGameContext } from "@/context/game-context.tsx";

import { DOCS_IN_DOM_ID } from "@/constants/consts.ts";

function InstructionsLink() {
    const { step } = useGameContext();

    if (step === "setup")
        return (
            <a href={`#${DOCS_IN_DOM_ID}`}>
                <span className="sr-only">Go to instructions</span>
                <FaQuestion
                    className="text-primary transition-all duration-200 hover:rotate-[30deg] hover:opacity-60 active:scale-110"
                    size={30}
                />
            </a>
        );
}

export default InstructionsLink;
