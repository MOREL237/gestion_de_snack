import { View, Text, Pressable } from "react-native";
import { MoreVertical } from "lucide-react-native";

type StockAlertRowProps = {
  productName: string;
  remaining: number;
  onPressMenu?: () => void;
};

export function StockAlertRow({ productName, remaining, onPressMenu }: StockAlertRowProps) {
  return (
    <View className="flex-row items-center justify-between py-sm border-b border-outline-variant/50">
      <View className="flex-row items-center gap-3">
        <View className="w-2 h-2 rounded-full bg-critical" />
        <View>
          <Text className="text-body-lg text-on-surface">{productName}</Text>
          <Text className="text-body-sm text-critical">
            {remaining} restant{remaining > 1 ? "s" : ""}
          </Text>
        </View>
      </View>

      <Pressable onPress={onPressMenu} hitSlop={8}>
        <MoreVertical size={18} color="#777587" />
      </Pressable>
    </View>
  );
}