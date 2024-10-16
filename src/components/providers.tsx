import { ReactNode } from "react";
import { useGameBoard } from "react-battleships-engine";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

import { GameContextProvider } from "@/context/game-context";
import useGame from "@/hooks/use-game";
import { Provider } from "jotai";

import MetaProvider from "./meta-provider";

const helmetContext = {};

export const Providers = ({ children }: { children: ReactNode }) => {
    const game = useGame(
        { type: "person", data: useGameBoard() },
        { type: "robot", data: useGameBoard() },
    );
    return (
        <Provider>
            <HelmetProvider context={helmetContext}>
                <GameContextProvider value={game}>
                    {children}
                    <MetaProvider />
                    <Toaster />
                </GameContextProvider>
            </HelmetProvider>
        </Provider>
    );
};
