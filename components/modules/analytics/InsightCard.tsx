import { View, Text } from "react-native";
import { Lightbulb } from "lucide-react-native";

type InsightCardProps = { title: string; description: string };

export function InsightCard({ title, description }: InsightCardProps) {
  return (
    <View className="rounded-xl p-md gap-2 bg-primary-fixed">
      <View className="flex-row items-center gap-2">
        <Lightbulb size={16} color="#3525cd" />
        <Text className="text-body-sm font-medium text-primary-dark uppercase">
          Insights IA
        </Text>
      </View>
      <Text className="text-body-lg font-medium text-primary-dark">{title}</Text>
      <Text className="text-body-sm text-primary-dark/80">{description}</Text>
    </View>
  );
}