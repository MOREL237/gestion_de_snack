import { View, Text, Pressable } from "react-native";
import { Card } from "@/components/ui/Card";
import { StatusBadge, type OrderStatus } from "@/components/ui/Badge";

type OrderCardProps = {
  tableNumber: string | number;
  status: OrderStatus;
  items: string;
  amount: number;
  time: string;
  onPress?: () => void;
};

export function OrderCard({ tableNumber, status, items, amount, time, onPress }: OrderCardProps) {
  return (
    <Pressable onPress={onPress}>
      <Card padding="md" className="gap-1">
        <View className="flex-row items-center justify-between">
          <Text className="text-title-md font-title text-on-surface">Table {tableNumber}</Text>
          <StatusBadge status={status} size="sm" />
        </View>
        <Text className="text-body-sm text-on-surface-variant" numberOfLines={1}>{items}</Text>
        <View className="flex-row items-center justify-between mt-1">
          <Text className="text-body-sm text-on-surface-variant">{time}</Text>
          <Text className="text-body-lg font-medium text-on-surface">{amount.toFixed(2)} XAF</Text>
        </View>
      </Card>
    </Pressable>
  );
}