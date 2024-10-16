import usePlaceShips from "@/hooks/use-place-ships.ts";

import ShipHoverImage from "@/components/game setup/ship-hover-image.tsx";
import GameBoard from "@/components/game-board.tsx";
import {
    genShipManipulationBtns,
    genShipOnBoard,
    getShipByStartingCoords,
} from "@/lib/utils";
import { checkIfShipInBounds, isTwoCoordsEqual } from "@/lib/utils.ts";

function PlacingGameBoard() {
    const {
        changeDirection,
        ships,
        moveShip,
        placeShip,
        currentDirection,
        currentShipType,
        setHoverCellCoords,
        hoverCellCoords,
    } = usePlaceShips();

    return (
        <GameBoard
            cellProps={(cellCoords) => {
                const shipOnBoard = getShipByStartingCoords(ships, cellCoords);
                if (shipOnBoard) {
                    return {
                        className: "relative",
                        //tabIndex: currentShipType ? undefined : -1,
                        children: genShipOnBoard({
                            ship: shipOnBoard,
                            className: {
                                "pointer-events-none opacity-60":
                                    currentShipType &&
                                    currentShipType !== shipOnBoard.type,
                            },
                            cellProps: genShipManipulationBtns({
                                ship: shipOnBoard,
                                moveShip,
                                changeDirection,
                            }),
                        }),
                    };
                } else if (
                    currentShipType &&
                    isTwoCoordsEqual(cellCoords, hoverCellCoords) &&
                    checkIfShipInBounds({
                        cellCoords,
                        shipType: currentShipType,
                        direction: currentDirection,
                    })
                )
                    return {
                        className: "relative cursor-pointer",
                        onMouseEnter: () => setHoverCellCoords(cellCoords),
                        children: <ShipHoverImage onClick={placeShip} />,
                    };
                else
                    return {
                        className: "relative",
                        onMouseEnter: currentShipType
                            ? () => setHoverCellCoords(cellCoords)
                            : undefined,
                    };
            }}
        />
    );
}

export default PlacingGameBoard;
