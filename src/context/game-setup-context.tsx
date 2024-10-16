import { createContext, ReactNode, useContext } from "react";
import { Ship, ShipType, useGameBoard } from "react-battleships-engine";

type GameBoardType = Omit<
    ReturnType<typeof useGameBoard>,
    | "setMissed"
    | "setHitCells"
    | "setHasLost"
    | "hasLost"
    | "checkIfCoordsInMap"
    | "receiveAttack"
    | "hitCells"
    | "missed"
    | "inspectCoordsInShips"
    | "fillTakenCellsWithShip"
    | "moveShip"
>;

const GameBoardSetupContext = createContext<GameBoardType>({
    placeShip: () => {},
    ships: new Map<ShipType, Ship>(),
    takenCells: new Map<string, ShipType>(),
    setTakenCells: () => {},
    setShips: () => {},
    randomlyPlaceShips: () => {},
    removeShip: () => {},
    resetGameBoard: () => {},
});

export const GameBoardSetupContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => (
    <GameBoardSetupContext.Provider value={useGameBoard()}>
        {children}
    </GameBoardSetupContext.Provider>
);

export const useGBSetupContext = () => useContext(GameBoardSetupContext);
