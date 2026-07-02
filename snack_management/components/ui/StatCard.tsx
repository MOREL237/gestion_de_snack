import { View, Text } from "react-native";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react-native";

type StatCardProps = {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  variant?: "default" | "critical" | "success";
  trend?: string;
  actionLabel?: string;
};

export function StatCard({
  label,
  value,
  icon: Icon,
  variant = "default",
  trend,
  actionLabel,
}: StatCardProps) {
  const valueColor =
    variant === "critical"
      ? "text-critical"
      : variant === "success"
      ? "text-success"
      : "text-on-surface";

  return (
    <View
      className={clsx(
        "flex-1 rounded-xl p-md gap-2 bg-surface-lowest shadow-card",
        variant === "critical" && "border border-critical/20"
      )}
    >
      <View className="min-h-[36px] justify-start gap-1">
        <View className="flex-row items-center gap-1">
          {Icon && (
            <Icon
              size={14}
              color={variant === "critical" ? "#dc2626" : "#464555"}
            />
          )}
          <Text className="text-body-sm text-on-surface-variant">{label}</Text>
        </View>

        {actionLabel && (
          <View className="self-start px-1.5 py-0.5 rounded-full bg-critical/10">
            <Text className="text-[10px] uppercase font-medium text-critical">
              {actionLabel}
            </Text>
          </View>
        )}
      </View>

      <Text className={clsx("text-headline-md font-title", valueColor)}>
        {value}
      </Text>

      {trend && (
        <Text className="text-body-sm text-success">{trend}</Text>
      )}
    </View>
  );
}