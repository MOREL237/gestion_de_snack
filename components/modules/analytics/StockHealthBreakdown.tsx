import { View, Text } from "react-native";
import { Card } from "@/components/ui/Card";

type HealthSegment = {
  label: string;
  count: number;
  color: string;
};

type StockHealthBreakdownProps = {
  total: number;
  segments: HealthSegment[];
};

export function StockHealthBreakdown({ total, segments }: StockHealthBreakdownProps) {
  return (
    <Card padding="md" className="gap-3">
      <Text className="text-title-md font-title text-on-surface">
        Distribution de la Santé des Stocks
      </Text>

      <View className="h-3 w-full rounded-full overflow-hidden flex-row bg-surface-high">
        {segments.map((segment) => (
          <View
            key={segment.label}
            style={{ flex: segment.count, backgroundColor: segment.color }}
          />
        ))}
      </View>

      <Text className="text-body-lg font-medium text-on-surface">
        {total} produits au total
      </Text>

      <View className="gap-1.5">
        {segments.map((segment) => (
          <View key={segment.label} className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <View className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: segment.color }} />
              <Text className="text-body-sm text-on-surface-variant">{segment.label}</Text>
            </View>
            <Text className="text-body-sm font-medium text-on-surface">{segment.count}</Text>
          </View>
        ))}
      </View>
    </Card>
  );
}