import { FaShip } from "react-icons/fa6";
import { PiConfettiBold, PiSmileySadBold } from "react-icons/pi";

import { useGameContext } from "@/context/game-context.tsx";

import { cn, genWinMessage } from "@/lib/utils";

import Button from "./custom/button";

function DecisionWindow() {
    const { player1 } = useGameContext();
    const hasPlayerLost = player1.hasLost;
    const Icon = hasPlayerLost ? PiSmileySadBold : PiConfettiBold;
    return (
        <main className="flex h-[70vh] w-full flex-col items-center justify-end gap-10 text-center">
            <p
                className={cn(
                    "flex flex-col items-center text-8xl text-yellow-500",
                    {
                        "text-red-600": hasPlayerLost,
                    },
                )}
            >
                <Icon
                    className={cn({
                        "animate-pulse": hasPlayerLost,
                        "animate-bounce": !hasPlayerLost,
                    })}
                />
                <span className={"font-bold uppercase"}>
                    {genWinMessage(player1)}!
                </span>
            </p>
            <Button
                onClick={() => window.location.reload()}
                endIcon={FaShip}
                size={"lg"}
                className={"bg-primary"}
            >
                New game
            </Button>
        </main>
    );
}

export default DecisionWindow;
