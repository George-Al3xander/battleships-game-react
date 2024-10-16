import { ButtonHTMLAttributes, FC, forwardRef } from "react";
import { IconType } from "react-icons";

import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils.ts";

export const buttonVariants = cva(
    "transition-all hover:opacity-60 rounded-lg shadow-lg active:scale-125 duration-[350ms] font-semibold disabled:opacity-60 disabled:cursor-not-allowed",
    {
        variants: {
            variant: {
                default: "bg-red-600 text-white",
                outline: "border-2 border-black",
                icon: "rounded-full flex justify-center items-center",
            },
            size: {
                sm: "py-1 px-3",
                md: "py-2 px-6 text-lg",
                lg: "py-4 px-8 text-xl",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    },
);

export const buttonIconSizes: { [key in "sm" | "md" | "lg"]: number } = {
    sm: 10,
    md: 20,
    lg: 40,
};

export const getButtonIconSize = (
    size: "sm" | "md" | "lg" | null | undefined = "md",
) => buttonIconSizes[size || "md"];

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> & {
        icon?: IconType;
        startIcon?: IconType;
        endIcon?: IconType;
    };

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            children,
            icon: Icon,
            startIcon: StartIcon,
            endIcon: EndIcon,
            size,
            ...props
        },
        ref,
    ) => (
        <button
            ref={ref}
            className={cn(
                {
                    "flex items-center justify-center gap-4":
                        StartIcon || EndIcon,
                },
                buttonVariants({ className, variant, size }),
            )}
            {...props}
        >
            {Icon && variant === "icon" ? (
                <Icon size={getButtonIconSize(size)} />
            ) : (
                <>
                    {StartIcon && <StartIcon size={getButtonIconSize(size)} />}
                    {children}
                    {EndIcon && <EndIcon size={getButtonIconSize(size)} />}
                </>
            )}
        </button>
    ),
);
Button.displayName = "Button";
export default Button;
