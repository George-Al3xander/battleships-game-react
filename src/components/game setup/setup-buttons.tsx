import { GiPerspectiveDiceSixFacesRandom, GiShipBow } from "react-icons/gi";
import { ImCross } from "react-icons/im";

import { useGameContext } from "@/context/game-context";
import { useGBSetupContext } from "@/context/game-setup-context.tsx";

import Button from "@/components/custom/button.tsx";
import { toastTryCatch } from "@/lib/utils";

function SetupButtons() {
    const { startGame } = useGameContext();
    const { randomlyPlaceShips, resetGameBoard, ships } = useGBSetupContext();

    const start = () => toastTryCatch(() => startGame(ships));

    return (
        <div className="flex flex-col gap-4 sm:flex-row">
            <Button
                onClick={start}
                endIcon={GiShipBow}
                id="btn-start"
                className="bg-green-400"
            >
                Start
            </Button>
            <Button
                endIcon={GiPerspectiveDiceSixFacesRandom}
                id="btn-random"
                className="bg-orange-400"
                onClick={randomlyPlaceShips}
            >
                Place Randomly
            </Button>
            <Button
                endIcon={ImCross}
                id="btn-reset"
                disabled={ships.size === 0}
                variant="outline"
                className="border-secondary text-red-600"
                onClick={resetGameBoard}
            >
                Reset
            </Button>
        </div>
    );
}

export default SetupButtons;
