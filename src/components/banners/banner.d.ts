import { HTMLProps } from "react";
import { ClassValue } from "clsx";
declare function Banner({ className, ...props }: Omit<HTMLProps<HTMLDivElement>, "className"> & {
    className?: ClassValue | ClassValue[];
}): import("react/jsx-runtime").JSX.Element;
export default Banner;
