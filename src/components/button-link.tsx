import type { ComponentProps } from "react";

type Variant = "primary" | "ghost";

const base =
  "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap px-5 text-sm font-medium transition-[transform,background-color,color,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:translate-y-px active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:bg-fg hover:text-bg",
  ghost: "border border-line text-fg hover:border-fg",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
