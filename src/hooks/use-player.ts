import { useEffect } from "react";
import { Coords, TCoords } from "react-battleships-engine";

import { random, randomAttack } from "@/lib/utils";
import { TGBHookRes, TMapBoolStr, TPlayerVariant } from "@/types/type";

type TAttack = TGBHookRes["receiveAttack"];

const usePlayer = ({
    type = "person",
    playerInfo,
    opponentInfo,
    isPlayerTurn,
    togglePlayerTurn,
}: {
    type?: TPlayerVariant;
    isPlayerTurn: boolean;
    togglePlayerTurn: () => void;
    playerInfo: TGBHookRes;
    opponentInfo: {
        hitCells: TMapBoolStr;
        missed: TMapBoolStr;
        receiveAttack: TAttack;
    };
}) => {
    const attackOpponent = (coords: TCoords) => {
        opponentInfo.receiveAttack(coords);
        togglePlayerTurn();
    };

    const getCellStates = (coords: TCoords) => {
        const c = new Coords(coords).toString();
        const { hitCells, takenCells, missed } = playerInfo;
        const isTaken = takenCells.has(c);
        const isHit = Boolean(hitCells.get(c));
        const isMissed = Boolean(missed.get(c));

        return { isTaken, isHit, isMissed };
    };

    useEffect(() => {
        if (type === "robot") playerInfo.randomlyPlaceShips();
    }, []);

    useEffect(() => {
        if (type === "robot" && isPlayerTurn) {
            const { hitCells, missed, receiveAttack } = opponentInfo;
            setTimeout(
                () => {
                    randomAttack({
                        hitCells,
                        missedCells: missed,
                        opponentReceiveAttack: receiveAttack,
                        toggleTurn: togglePlayerTurn,
                    });
                },
                random(500, 2000),
            );
        }
    }, [isPlayerTurn, type]);

    return { attackOpponent, isPlayerTurn, getCellStates, ...playerInfo };
};

export default usePlayer;
