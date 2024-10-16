import { useGameBoard } from "react-battleships-engine";

import { act, renderHook } from "@testing-library/react";

import useGame from "@/hooks/use-game";

import { ERRORS_MESSAGE } from "@/constants/consts";
import { TPlayerVariant } from "@/types/type";

const renderGameHook = (
    p1Var: TPlayerVariant | undefined = "person",
    p2Var: TPlayerVariant | undefined = "robot",
) => {
    const { result } = renderHook(() =>
        useGame(
            { type: p1Var, data: useGameBoard() },
            { type: p2Var, data: useGameBoard() },
        ),
    );

    return { result };
};

describe("useGame", () => {
    it("should render correctly", () => {
        const { result } = renderGameHook();
        expect(result.current.isFirstPlayerTurn).toBe(true);
    });

    it("should set 'isFirstPlayerTurn' to false after the first player does attack", () => {
        const { result } = renderGameHook(undefined, "person");

        act(() => {
            result.current.player1.attackOpponent({ x: 1, y: 1 });
        });
        expect(result.current.isFirstPlayerTurn).toBe(false);
    });

    it("shouldn't start if the any of the players don't have all the ships placed", () => {
        const { result } = renderGameHook("person", "person");
        try {
            act(() => {
                result.current.startGame();
            });
            expect(1).toBe(2);
        } catch (e) {
            expect(e instanceof Error ? e.message : "bad").toBe(
                ERRORS_MESSAGE["game_start"],
            );
        }
    });

    it("should start the game", () => {
        const { result } = renderGameHook("person", "person");
        act(() => {
            result.current.player1.randomlyPlaceShips();
            result.current.player2.randomlyPlaceShips();
        });
        act(() => {
            result.current.startGame();
        });
        expect(result.current.step).toBe("play");
    });

    it("should change toggle boolean automatically if the second player is a robot", () => {
        const { result } = renderGameHook(undefined, "robot");

        act(() => {
            result.current.player1.attackOpponent({ x: 1, y: 1 });
        });
        expect(result.current.isFirstPlayerTurn).toBe(true);
    });

    it("should affect the opponent map after the attack", () => {
        const { result } = renderGameHook(undefined, "person");
        const p2MissedBefore = result.current.player2.missed;
        act(() => {
            result.current.player1.attackOpponent({ x: 1, y: 1 });
        });
        const p2MissedAfter = result.current.player2.missed;
        expect(p2MissedBefore).not.toEqual(p2MissedAfter);
    });
});
