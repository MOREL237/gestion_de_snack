import { View, Text } from "react-native";
import { Card } from "@/components/ui/Card";
import { QuantityStepper } from "@/components/forms/QuantityStepper";

type MenuProductCardProps = {
  name: string;
  format: string;
  unitPrice: number;
  quantity: number;
  isAvailable: boolean;
  onChangeQuantity: (quantity: number) => void;
};

export function MenuProductCard({
  name,
  format,
  unitPrice,
  quantity,
  isAvailable,
  onChangeQuantity,
}: MenuProductCardProps) {
  return (
    <Card padding="md" className="flex-row items-center gap-3" style={{ opacity: isAvailable ? 1 : 0.5 }}>
      <View className="flex-1 gap-0.5">
        <Text className="text-body-lg font-medium text-on-surface">{name}</Text>
        <Text className="text-body-sm text-on-surface-variant">{format}</Text>
        <Text className="text-body-lg font-medium text-primary mt-1">
          {unitPrice.toFixed(2)} XAF
        </Text>
        {!isAvailable && (
          <Text className="text-body-sm text-critical">Indisponible</Text>
        )}
      </View>

      {isAvailable && (
        <QuantityStepper value={quantity} onChange={onChangeQuantity} />
      )}
    </Card>
  );
}