import { HTMLAttributes } from "react";
import {
    Coords,
    Direction,
    Ship,
    ShipType,
    TCoords,
} from "react-battleships-engine";

import { ClassValue } from "clsx";
import { nanoid } from "nanoid";

import { cn } from "@/lib/utils.ts";
import { GameBoardProps } from "@/types/type";

function ShipModel({
    className,
    direction = "hor",
    shipType: type,
    coords = { x: 1, y: 1 },
    cellProps = () => ({}),
    ...props
}: {
    className?: ClassValue | ClassValue[];
    shipType: ShipType;
    direction?: Direction;
    coords?: TCoords;
    cellProps?: GameBoardProps["cellProps"];
} & Omit<HTMLAttributes<HTMLLIElement>, "className">) {
    const ship = new Ship({ type, direction, coords });

    return (
        <li
            className={cn(
                "flex",
                {
                    "flex-col": direction === "vert",
                },
                className,
            )}
            {...props}
        >
            {[...ship].map((coords, index) => {
                const { className: cellClassName, ...cProps } = cellProps(
                    new Coords(coords),
                    index,
                ) || {
                    className: "",
                };
                return (
                    <span
                        className={cn(
                            "cell-base-class bg-gray-400",
                            {
                                // "w-[calc(1.5rem+4px)] first:rounded-l-lg last:rounded-r-full sm:w-[calc(2rem+4px)] md:w-[calc(3rem+4px)]":
                                //     direction === "hor",
                                // "h-[calc(1.5rem+4px)] first:rounded-t-lg last:rounded-b-full sm:h-[calc(2rem+4px)] md:h-[calc(3rem+4px)]":
                                //     direction === "vert",
                                "first:rounded-l-lg last:rounded-r-full":
                                    direction === "hor",
                                "first:rounded-t-lg last:rounded-b-full":
                                    direction === "vert",
                            },
                            cellClassName,
                        )}
                        key={nanoid()}
                        {...cProps}
                    />
                );
            })}
        </li>
    );
}

export default ShipModel;
