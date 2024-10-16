import { useGameContext } from "@/context/game-context";
import { GameBoardSetupContextProvider } from "@/context/game-setup-context";

import DecisionWindow from "@/components/decision-window.tsx";
import PlayingWindow from "@/components/game play/playing-window";
import ShipPlacingWindow from "@/components/ship-placing-window.tsx";

function App() {
    const { step } = useGameContext();

    if (step === "setup")
        return (
            <main>
                <GameBoardSetupContextProvider>
                    <ShipPlacingWindow />
                </GameBoardSetupContextProvider>
            </main>
        );

    if (step === "play")
        return (
            <main>
                <PlayingWindow />
            </main>
        );

    return <DecisionWindow />;
}

export default App;
