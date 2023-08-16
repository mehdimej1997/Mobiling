import { DetailsHTMLAttributes } from "react";
import { cn } from "../../utils";

interface InputProps extends DetailsHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-md pl-6 pr-12 py-1 outline-none border-2 border-transparent focus:border-2 focus:border-blue-400",
        props.className
      )}
    />
  );
}
