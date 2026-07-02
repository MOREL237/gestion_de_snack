import { View, Text } from "react-native";
import type { LucideIcon } from "lucide-react-native";
import { Button } from "@/components/ui/Button";

type EmptyStateProps = {
  icon?: LucideIcon;
  title: string;
  description?: string;
  actionLabel?: string;
  onPressAction?: () => void;
};

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onPressAction,
}: EmptyStateProps) {
  return (
    <View className="items-center justify-center py-xl gap-2 px-md">
      {Icon && (
        <View className="w-14 h-14 rounded-full bg-surface-high items-center justify-center mb-1">
          <Icon size={24} color="#777587" />
        </View>
      )}
      <Text className="text-title-md font-title text-on-surface text-center">
        {title}
      </Text>
      {description && (
        <Text className="text-body-sm text-on-surface-variant text-center">
          {description}
        </Text>
      )}
      {actionLabel && onPressAction && (
        <Button label={actionLabel} onPress={onPressAction} variant="outline" size="sm" />
      )}
    </View>
  );
}