import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#7C3AED] text-white hover:bg-[#6D28D9] shadow-sm hover:shadow-md",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-[#7C3AED] bg-white hover:bg-[#7C3AED] hover:text-white",
        secondary: "bg-gray-100 text-[#1A202C] hover:bg-gray-200",
        ghost: "hover:bg-[#7C3AED]/10 hover:text-[#7C3AED]",
        link: "text-[#7C3AED] underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-98 transition-all duration-300",
        accent: "bg-[#EC4899] text-white hover:bg-[#DB2777] shadow-sm hover:shadow-md transform hover:scale-105 active:scale-98",
        success: "bg-green-500 text-white hover:bg-green-600 shadow-sm hover:shadow-md",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base font-semibold",
        xl: "h-14 rounded-lg px-12 text-lg font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
