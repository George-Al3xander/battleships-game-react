import { useGBSetupContext } from "@/context/game-setup-context.tsx";
import { $currentShipType } from "@/store/atoms.ts";
import { useAtom } from "jotai/react";

import { shipTypes } from "@/constants/consts.ts";

import ShipModel from "../ship-model.tsx";

function ShipModels() {
    const [currentShipType, setCurrentShipType] = useAtom($currentShipType);
    const { ships } = useGBSetupContext();

    return (
        <ul className="grid grid-cols-3 gap-4 lg:mt-10 lg:grid-cols-1">
            {shipTypes.map((type) => (
                <ShipModel
                    shipType={type}
                    key={`draggable-${type}`}
                    className={{
                        "pointer-events-none cursor-not-allowed opacity-60":
                            ships.has(type) ||
                            (currentShipType && currentShipType !== type),
                    }}
                    onClick={() => setCurrentShipType(type)}
                    //tabIndex={ships.has(type) ? -1 : undefined}
                    cellProps={() => ({
                        className:
                            "cell-action-parent transition-all cursor-pointer",
                    })}
                />
            ))}
        </ul>
    );
}

export default ShipModels;
