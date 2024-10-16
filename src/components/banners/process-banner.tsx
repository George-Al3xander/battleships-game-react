import { FaArrowRight, FaRobot, FaUserAlt } from "react-icons/fa";

import { cn } from "@/lib/utils.ts";

function ProcessBanner({ isFirstPlayerTurn }: { isFirstPlayerTurn: boolean }) {
    const MobileIcon = isFirstPlayerTurn ? FaUserAlt : FaRobot;
    return (
        <p
            className={cn(
                "fixed bottom-0 left-0 z-50 flex w-full flex-row-reverse items-center justify-center gap-4 bg-white p-4 text-center text-4xl font-bold capitalize text-gray-600 xl:sticky xl:top-0",
                {
                    "text-secondary xl:flex-row": isFirstPlayerTurn,
                },
            )}
        >
            {" "}
            <span>{isFirstPlayerTurn ? "Your turn" : "Robot's turn"}</span>
            <MobileIcon className="xl:hidden" />
            <FaArrowRight
                className={cn("hidden xl:block", {
                    "rotate-180": !isFirstPlayerTurn,
                })}
            />
        </p>
    );
}

export default ProcessBanner;
