import { FaMinimize } from "react-icons/fa6";

import {
    $currentDirection,
    $currentShipType,
    $hoverCellCoords,
} from "@/store/atoms.ts";
import { useAtom, useAtomValue } from "jotai/react";

import ShipModel from "../ship-model.tsx";

function ShipHoverImage({ onClick }: { onClick?: () => void }) {
    const currentShipType = useAtomValue($currentShipType);
    const [hoverCellCoords, setHoverCellCoords] = useAtom($hoverCellCoords);
    const direction = useAtomValue($currentDirection);
    if (!currentShipType) return;

    return (
        <ShipModel
            onClick={onClick}
            shipType={currentShipType}
            coords={hoverCellCoords}
            direction={direction}
            className={[
                "absolute left-0 top-0 z-20",
                {
                    "flex-col": direction === "vert",
                },
            ]}
            cellProps={(shipCoords, index) => ({
                className: [
                    "flex justify-center items-center text-white",
                    {
                        "cell-action-parent": index > 0,
                    },
                ],
                children: index === 0 ? <FaMinimize size={20} /> : undefined,
                onMouseEnter: () => setHoverCellCoords(shipCoords),
            })}
        />
    );
}

export default ShipHoverImage;
