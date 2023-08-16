import { DetailsHTMLAttributes } from "react";
import { cn } from "../../utils";

interface TypographieProps
  extends DetailsHTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "paragraph" | "label";
}

export function Typographie({
  variant = "paragraph",
  ...props
}: TypographieProps) {
  switch (variant) {
    case "h1":
      return (
        <h1
          {...props}
          className={cn(
            "text-primary font-bold lg:text-6xl text-3xl leading-snug",
            props.className
          )}
        />
      );
    case "h2":
      return (
        <h2
          {...props}
          className={cn("text-primary font-medium text-3xl", props.className)}
        />
      );
    case "h3":
      return (
        <h3
          {...props}
          className={cn("text-primary font-[400] text-lg", props.className)}
        />
      );
    case "h4":
      return <h4 {...props} className={cn("text-primary", props.className)} />;
    case "label":
      return (
        <span
          {...props}
          className={cn(
            "text-primary/50 text-sm font-light inline-block",
            props.className
          )}
        />
      );
    default:
      return (
        <p
          {...props}
          className={cn("text-primary font-normal", props.className)}
        />
      );
  }
}
