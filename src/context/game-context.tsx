import { createContext, ReactNode, useContext } from "react";

import useGame from "../hooks/use-game";

type TGameContext = ReturnType<typeof useGame>;

const dummyFn = () => {};

const GameContext = createContext<TGameContext>({
    startGame: dummyFn,
    step: "setup",
    player1: {
        attackOpponent: () => {},
        checkIfCoordsInMap: () => false,
        fillTakenCellsWithShip: () => {},
        hasLost: false,
        hitCells: new Map(),
        inspectCoordsInShips: () => {},
        missed: new Map(),
        moveShip: () => {},
        placeShip: () => {},
        randomlyPlaceShips: () => {},
        receiveAttack: () => {},
        removeShip: () => {},
        resetGameBoard: () => {},
        setHasLost: () => {},
        setHitCells: () => {},
        setMissed: () => {},
        setShips: () => {},
        setTakenCells: () => {},
        getCellStates: () => ({
            isTaken: false,
            isMissed: false,
            isHit: false,
        }),
        ships: new Map(),
        takenCells: new Map(),
        isPlayerTurn: true,
    },
    player2: {
        attackOpponent: () => {},
        fillTakenCellsWithShip: () => {},
        hasLost: false,
        hitCells: new Map(),
        inspectCoordsInShips: () => {},
        missed: new Map(),
        moveShip: () => {},
        placeShip: () => {},
        randomlyPlaceShips: () => {},
        receiveAttack: () => {},
        removeShip: () => {},
        resetGameBoard: () => {},
        setHasLost: () => {},
        setHitCells: () => {},
        setMissed: () => {},
        setShips: () => {},
        setTakenCells: () => {},
        ships: new Map(),
        takenCells: new Map(),
        isPlayerTurn: false,
        checkIfCoordsInMap: () => false,
        getCellStates: () => ({
            isTaken: false,
            isMissed: false,
            isHit: false,
        }),
    },
    isFirstPlayerTurn: true,
    togglePlayerTurn: dummyFn,
});

export const GameContextProvider = ({
    children,
    value,
}: {
    children: ReactNode;
    value: TGameContext;
}) => <GameContext.Provider value={value}>{children}</GameContext.Provider>;

export const useGameContext = () => useContext(GameContext);
