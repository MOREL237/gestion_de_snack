import { View, Text } from "react-native";
import clsx from "clsx";

type StockIndicatorProps = { disponible: number; seuilCritique: number; total: number; showLabel?: boolean };

export function StockIndicator({ disponible, seuilCritique, total, showLabel = true }: StockIndicatorProps) {
  const isCritical = disponible <= seuilCritique;
  const isEmpty = disponible <= 0;
  const percentage = Math.max(0, Math.min((disponible / Math.max(total, 1)) * 100, 100));

  return (
    <View className="gap-1">
      <View className="h-2 w-full rounded-full bg-surface-high overflow-hidden">
        <View
          className={clsx("h-full rounded-full", isEmpty ? "bg-critical" : isCritical ? "bg-warning" : "bg-success")}
          style={{ width: `${percentage}%` }}
        />
      </View>
      {showLabel && (
        <Text className={clsx("text-body-sm font-sans", isCritical ? "text-critical" : "text-on-surface-variant")}>
          {isEmpty ? "Rupture de stock" : `${disponible} disponible${disponible > 1 ? "s" : ""}${isCritical ? " · Stock critique" : ""}`}
        </Text>
      )}
    </View>
  );
}