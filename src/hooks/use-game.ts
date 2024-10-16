import { useEffect, useState } from "react";

import usePlayer from "@/hooks/use-player";

import { fillTakenCellsWithShips } from "@/lib/utils";
import { ERRORS_MESSAGE } from "@/constants/consts";
import { TGameStep, TGBHookRes, TPlayerVariant } from "@/types/type";

type TPlayerInfo = {
    data: TGBHookRes;
    type?: TPlayerVariant;
};

const useGame = (p1: TPlayerInfo, p2: TPlayerInfo) => {
    const [step, setStep] = useState<TGameStep>("setup");
    const [isFirstPlayerTurn, setIsFirstPlayerTurn] = useState(true);

    const togglePlayerTurn = () => setIsFirstPlayerTurn((prev) => !prev);

    const player1 = usePlayer({
        type: p1.type || "person",
        playerInfo: p1.data,
        opponentInfo: p2.data,
        isPlayerTurn: isFirstPlayerTurn,
        togglePlayerTurn,
    });

    const player2 = usePlayer({
        type: p2.type || "person",
        playerInfo: p2.data,
        opponentInfo: p1.data,
        isPlayerTurn: !isFirstPlayerTurn,
        togglePlayerTurn,
    });

    const startGame = (
        p1Ships?: TGBHookRes["ships"],
        p2Ships?: TGBHookRes["ships"],
    ) => {
        const ships1 = p1Ships || player1.ships;
        const ships2 = p2Ships || player2.ships;

        if (ships1.size !== 5 || ships2.size !== 5)
            throw new Error(ERRORS_MESSAGE["game_start"]);

        if (p1Ships) {
            player1.setShips(ships1);
            player1.setTakenCells(fillTakenCellsWithShips(ships1));
        }

        if (p2Ships) {
            player2.setShips(ships2);
            player2.setTakenCells(fillTakenCellsWithShips(ships2));
        }

        setStep("play");
    };

    useEffect(() => {
        if (player1.hasLost || player2.hasLost) setStep("decision");
    }, [player1.hasLost, player2.hasLost]);

    return {
        step,
        player1,
        player2,
        startGame,
        isFirstPlayerTurn,
        togglePlayerTurn,
    };
};

export default useGame;
