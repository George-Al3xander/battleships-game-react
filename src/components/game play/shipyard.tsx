import { cn } from "@/lib/utils";
import { TGBHookRes } from "@/types/type";

function Shipyard({ ships }: { ships: TGBHookRes["ships"] }) {
    return (
        <div className="flex flex-col gap-4 xl:flex-row">
            <p className="text-xl font-semibold xl:[writing-mode:vertical-rl]">
                Shipyard
            </p>
            <ul className="grid grid-cols-2 gap-4 xl:grid-cols-3">
                {[...ships].map(([shipType, ship]) => (
                    <li key={`shipyard-${shipType}`}>
                        <p
                            className={cn("text-lg capitalize", {
                                "text-secondary line-through": ship.isSunk(),
                            })}
                        >
                            {shipType.replace("_", " ")} ({ship.length})
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Shipyard;
