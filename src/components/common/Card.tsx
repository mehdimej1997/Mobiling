import { ComponentProps, DetailsHTMLAttributes } from "react";
import { Typographie } from ".";
import { cn } from "../../utils";

export function Card({ ...props }: DetailsHTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cn("rounded-lg p-6", props.className)} />;
}

Card.Content = ({ ...props }: DetailsHTMLAttributes<HTMLDivElement>) => (
  <div {...props} />
);

Card.Title = ({ ...props }: ComponentProps<typeof Typographie>) => (
  <Typographie {...props} />
);
