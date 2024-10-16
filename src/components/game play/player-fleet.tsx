import { TCoords } from "react-battleships-engine";

import { cn, genShipOnBoard, getShipByStartingCoords } from "@/lib/utils";
import { TPlayerHookRes } from "@/types/type";

import FleetBanner from "../banners/fleet-banner";
import GameBoard from "../game-board";
import Shipyard from "./shipyard";

function PlayerFleet({
    data: { ships, getCellStates, isPlayerTurn },
    isOpponent,
    onCellClick,
}: {
    data: TPlayerHookRes;

    isOpponent: boolean;
    onCellClick: (c: TCoords) => void;
}) {
    const receiveAttack = (c: TCoords) => {
        return () => {
            if (isOpponent) onCellClick(c);
        };
    };

    return (
        <div
            className={cn("flex flex-col items-center justify-center gap-10", {
                "pointer-events-none hidden opacity-60 xl:flex": isPlayerTurn,
            })}
        >
            <FleetBanner isOpponent={isOpponent} />
            <GameBoard
                cellProps={(coords) => {
                    const { isMissed, isHit } = getCellStates(coords);

                    if (!isOpponent) {
                        const ship = getShipByStartingCoords(ships, coords);
                        if (ship) {
                            return {
                                className: "relative",
                                children: genShipOnBoard({
                                    ship,
                                    cellProps: (shipCoords) => ({
                                        className: [
                                            "cell-action-parent",
                                            {
                                                "after:bg-secondary after:sm:size-6":
                                                    getCellStates(shipCoords)
                                                        .isHit,
                                            },
                                        ],
                                    }),
                                }),
                            };
                        }
                    }

                    return {
                        onClick: receiveAttack(coords),
                        className: [
                            "after:sm:size-6 hover:cursor-crosshair",
                            {
                                "pointer-events-none ":
                                    !isOpponent || isHit || isMissed,
                                "cell-action-parent":
                                    ((isHit || isMissed) && isOpponent) ||
                                    (isMissed && !isOpponent),
                                "after:bg-secondary": isHit && isOpponent,
                                "after:bg-primary": isMissed && !isOpponent,
                            },
                        ],
                    };
                }}
            />
            <Shipyard ships={ships} />
        </div>
    );
}

export default PlayerFleet;
