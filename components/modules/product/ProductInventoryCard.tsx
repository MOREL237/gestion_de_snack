import { View, Text, Pressable } from "react-native";
import { Pencil } from "lucide-react-native";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

type ProductInventoryCardProps = {
  name: string;
  lotInfo: string;
  category: string;
  quantity: number;
  unit: string;
  isCritical?: boolean;
  colorTag?: string;
  onEdit?: () => void;
};

export function ProductInventoryCard({ name, lotInfo, category, quantity, unit, isCritical, colorTag = "#4f46e5", onEdit }: ProductInventoryCardProps) {
  return (
    <Card padding="md" className="flex-row gap-3">
      <View className="w-1 rounded-full" style={{ backgroundColor: colorTag }} />
      <View className="flex-1 gap-1">
        <Text className="text-body-lg font-medium text-on-surface">{name}</Text>
        <Text className="text-body-sm text-on-surface-variant">{lotInfo}</Text>
        <Badge label={category} variant="neutral" size="sm" />
        <Text className={isCritical ? "text-critical font-medium mt-1" : "text-on-surface font-medium mt-1"}>
          {quantity} {unit}
        </Text>
      </View>
      {onEdit && (
        <Pressable onPress={onEdit} hitSlop={8} className="self-start">
          <Pencil size={16} color="#777587" />
        </Pressable>
      )}
    </Card>
  );
}