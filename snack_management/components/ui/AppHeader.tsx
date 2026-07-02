import { View, Text, Pressable } from "react-native";
import { Bell, Menu } from "lucide-react-native";

type AppHeaderProps = {
  title: string;
  onPressMenu?: () => void;
  onPressNotifications?: () => void;
  notificationCount?: number;
};

export function AppHeader({
  title,
  onPressMenu,
  onPressNotifications,
  notificationCount = 0,
}: AppHeaderProps) {
  return (
    <View className="flex-row items-center justify-between h-14 px-md bg-surface border-b border-outline-variant">
      <View className="flex-row items-center gap-2">
        {onPressMenu && (
          <Pressable onPress={onPressMenu} hitSlop={8}>
            <Menu size={20} color="#191c1d" />
          </Pressable>
        )}
        <Text className="text-title-md font-title text-on-surface">
          {title}
        </Text>
      </View>

      <Pressable onPress={onPressNotifications} hitSlop={8} className="relative">
        <Bell size={20} color="#191c1d" />
        {notificationCount > 0 && (
          <View className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-critical items-center justify-center">
            <Text className="text-[10px] font-medium text-white">
              {notificationCount > 9 ? "9+" : notificationCount}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}