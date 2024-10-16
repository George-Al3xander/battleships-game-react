import { ButtonHTMLAttributes, FC } from "react";
import { IconType } from "react-icons";
import { VariantProps } from "class-variance-authority";
export declare const buttonVariants: (props?: ({
    variant?: "default" | "outline" | "icon" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export declare const buttonIconSizes: {
    [key in "sm" | "md" | "lg"]: number;
};
export declare const getButtonIconSize: (size?: "sm" | "md" | "lg" | null | undefined) => number;
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
    icon?: IconType;
    startIcon?: IconType;
    endIcon?: IconType;
};
declare const Button: FC<ButtonProps>;
export default Button;
