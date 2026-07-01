import { View, type ViewProps } from "react-native";
import clsx from "clsx";

type CardProps = ViewProps & {
  padding?: "none" | "sm" | "md" | "lg";
  variant?: "elevated" | "outline" | "flat";
};

export function Card({
  children,
  padding = "md",
  variant = "elevated",
  className,
  ...rest
}: CardProps) {
  return (
    <View
      className={clsx(
        "bg-surface-lowest rounded-xl",
        variant === "elevated" && "shadow-card",
        variant === "outline" && "border border-outline-variant",
        padding === "sm" && "p-sm",
        padding === "md" && "p-md",
        padding === "lg" && "p-lg",
        padding === "none" && "p-0",
        className
      )}
      {...rest}
    >
      {children}
    </View>
  );
}