import * as React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "solid" | "outline";
  size?: "md" | "lg";
  className?: string;
};

export function Button({ asChild, variant="solid", size="md", className, ...props }: Props) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-xl border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
    size === "lg" ? "px-5 py-3 text-sm" : "px-4 py-2 text-sm",
    variant === "outline"
      ? "border-gray-300 bg-white text-gray-900 hover:bg-gray-50 focus:ring-teal-600"
      : "border-transparent bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-600",
    className
  );
  if (asChild) {
    // for simplicity, ignore asChild and just render button
  }
  return <button className={classes} {...props} />;
}
