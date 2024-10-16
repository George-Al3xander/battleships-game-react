import { FC, ReactNode } from "react";
import { Coords } from "react-battleships-engine";

import { nanoid } from "nanoid";

import { cn, handleKeyPress } from "@/lib/utils.ts";
import { alphabet } from "@/constants/consts.ts";
import { GameBoardProps } from "@/types/type.ts";

const thStyles: React.ComponentProps<"th">["className"] =
    "capitalize font-bold sm:text-xl text-gray-400 ";

const GameBoard: FC<GameBoardProps> = ({
    cellProps = () => {},
    cellComponent: Component,
}) => {
    const rows: ReactNode[][] = [];

    for (let i = 1; i <= 10; i++) {
        const cells: ReactNode[] = [];
        for (let j = 1; j <= 10; j++) {
            const coords = new Coords({ x: j, y: i });

            if (Component) {
                cells.push(<Component key={nanoid()} coords={coords} />);
                continue;
            }
            const { className, ...props } = cellProps(coords, i) || {
                onClick: () => {},
            };
            cells.push(
                <td
                    data-coords={coords.toString()}
                    onKeyDown={
                        props.onClick
                            ? //@ts-expect-error
                              handleKeyPress("Enter", props.onClick)
                            : undefined
                    }
                    tabIndex={3}
                    className={cn(
                        "cell-base-class rounded-md bg-blue-200 transition-all hover:bg-opacity-60",
                        className,
                        `cell-${coords}`,
                    )}
                    key={nanoid()}
                    {...props}
                />,
            );
        }
        rows.push(cells);
    }

    return (
        <table
            //tabIndex={1}
            className="table-auto border-separate border-spacing-1"
        >
            <thead>
                <tr>
                    <th />
                    {alphabet.map((letter) => (
                        <th className={thStyles} key={letter} scope="col">
                            {letter}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((cells, index) => (
                    <tr key={nanoid()}>
                        <td className={thStyles}>{index + 1}</td>
                        {cells.map((cell) => cell)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default GameBoard;
