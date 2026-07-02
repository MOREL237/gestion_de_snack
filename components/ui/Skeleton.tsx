import { useEffect, useRef } from "react";
import { Animated, View, type ViewProps } from "react-native";
import clsx from "clsx";

type SkeletonProps = ViewProps & {
  width?: number | `${number}%`;
  height?: number;
  rounded?: "sm" | "md" | "lg" | "full";
};

export function Skeleton({
  width = "100%",
  height = 16,
  rounded = "md",
  className,
  style,
  ...rest
}: SkeletonProps) {
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 700, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.4, duration: 700, useNativeDriver: true }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [opacity]);

  return (
    <Animated.View
      className={clsx(
        "bg-surface-high",
        rounded === "sm" && "rounded-sm",
        rounded === "md" && "rounded-md",
        rounded === "lg" && "rounded-lg",
        rounded === "full" && "rounded-full",
        className
      )}
      style={[{ width, height, opacity }, style]}
      {...rest}
    />
  );
}

/* Variante prête à l'emploi pour une carte de liste (ex: OrderCard, ProductInventoryCard) */
export function SkeletonCard() {
  return (
    <View className="bg-surface-lowest rounded-xl p-md gap-2 shadow-card">
      <Skeleton width="50%" height={18} />
      <Skeleton width="80%" height={14} />
      <Skeleton width="30%" height={14} />
    </View>
  );
}