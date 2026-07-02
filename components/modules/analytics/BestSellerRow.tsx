import { View, Text } from "react-native";

type BestSellerRowProps = { name: string; code: string; salesCount: number; trend: string };

export function BestSellerRow({ name, code, salesCount, trend }: BestSellerRowProps) {
  return (
    <View className="flex-row items-center justify-between py-sm border-b border-outline-variant/50">
      <View className="flex-row items-center gap-3">
        <View className="w-10 h-10 rounded-lg bg-surface-high" />
        <View>
          <Text className="text-body-lg text-on-surface">{name}</Text>
          <Text className="text-body-sm text-on-surface-variant">{code}</Text>
        </View>
      </View>
      <View className="items-end">
        <Text className="text-body-lg font-medium text-on-surface">
          {salesCount.toLocaleString("fr-FR")} ventes
        </Text>
        <Text className="text-body-sm text-success">{trend}</Text>
      </View>
    </View>
  );
}