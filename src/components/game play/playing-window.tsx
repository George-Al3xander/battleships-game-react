import { useGameContext } from "@/context/game-context";

import ProcessBanner from "@/components/banners/process-banner";
import PlayerFleet from "@/components/game play/player-fleet";

function PlayingWindow() {
    const { player1, player2, isFirstPlayerTurn } = useGameContext();

    return (
        <div className="flex flex-col-reverse gap-10 xl:flex-col">
            <ProcessBanner isFirstPlayerTurn={isFirstPlayerTurn} />
            <div className="flex flex-col justify-center gap-16 xl:flex-row">
                <PlayerFleet
                    data={player1}
                    onCellClick={player2.attackOpponent}
                    isOpponent={false}
                />
                <div className="hidden w-1 rounded-lg bg-gray-300 xl:block" />
                <PlayerFleet
                    data={player2}
                    onCellClick={player1.attackOpponent}
                    isOpponent={true}
                />
            </div>
        </div>
    );
}

export default PlayingWindow;
