import { useGameBoard } from "react-battleships-engine";

import { act, renderHook } from "@testing-library/react";

import usePlayer from "@/hooks/use-player";

const setupHook = (
    args: Omit<Parameters<typeof usePlayer>[0], "playerInfo" | "opponentInfo">,
) =>
    renderHook(() =>
        usePlayer({
            ...args,
            playerInfo: useGameBoard(),
            opponentInfo: useGameBoard(),
        }),
    );

describe("usePlayer", () => {
    it("should randomly place ships if the type of player is robot", () => {
        const { result: resultRobot } = setupHook({
            type: "robot",
            isPlayerTurn: false,
            togglePlayerTurn: () => {},
        });
        const { result: resultPerson } = setupHook({
            type: "person",
            isPlayerTurn: false,
            togglePlayerTurn: () => {},
        });
        expect(resultRobot.current.ships.size).toBe(5);
        expect(resultPerson.current.ships.size).toBe(0);
    });

    it("should invoke togglePlayerTurn if the player type is robot and it's turn", () => {
        const togglePlayerTurn = jest.fn();
        setupHook({
            type: "robot",
            isPlayerTurn: true,
            togglePlayerTurn,
        });
        expect(togglePlayerTurn).toHaveBeenCalled();
    });

    it("should toggle turn after the attack function invocation", () => {
        const togglePlayerTurn = jest.fn();
        const { result } = setupHook({
            type: "person",
            isPlayerTurn: false,
            togglePlayerTurn,
        });
        act(() => {
            result.current.attackOpponent({ x: 1, y: 1 });
        });
        expect(togglePlayerTurn).toHaveBeenCalled();
    });
});
