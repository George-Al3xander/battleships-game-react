import { HTMLProps } from "react";

import { ClassValue } from "clsx";

import { cn } from "@/lib/utils";

function Banner({
    className,
    ...props
}: Omit<HTMLProps<HTMLDivElement>, "className"> & {
    className?: ClassValue | ClassValue[];
}) {
    return (
        <div
            {...props}
            className={cn(
                "flex w-full items-center justify-center rounded bg-secondary p-4 text-lg font-bold uppercase text-white",
                className,
            )}
        />
    );
}

export default Banner;
