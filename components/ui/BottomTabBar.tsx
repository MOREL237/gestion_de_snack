import { View, Text, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { LucideIcon } from "lucide-react-native";
import clsx from "clsx";

export type TabItem = {
  key: string;
  label: string;
  icon: LucideIcon;
};

type BottomTabBarProps = {
  tabs: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
};

export function BottomTabBar({ tabs, activeKey, onChange }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingBottom: insets.bottom }}
      className="flex-row bg-surface-lowest border-t border-outline-variant"
    >
      {tabs.map((tab) => {
        const isActive = tab.key === activeKey;
        const Icon = tab.icon;

        return (
          <Pressable
            key={tab.key}
            onPress={() => onChange(tab.key)}
            className="flex-1 items-center justify-center py-2 gap-0.5"
          >
            <Icon size={20} color={isActive ? "#4f46e5" : "#777587"} />
            <Text
              className={clsx(
                "text-[10px] font-medium",
                isActive ? "text-primary" : "text-on-surface-variant"
              )}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}