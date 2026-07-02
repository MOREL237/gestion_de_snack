import { Pressable, Text } from "react-native";
import clsx from "clsx";

type ChipProps = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
};

export function Chip({ label, selected = false, onPress }: ChipProps) {
  return (
    <Pressable
      onPress={onPress}
      className={clsx(
        "rounded-full px-3 py-1.5 border",
        selected
          ? "bg-primary border-primary"
          : "bg-transparent border-outline-variant"
      )}
    >
      <Text
        className={clsx(
          "text-body-sm font-medium",
          selected ? "text-on-primary" : "text-on-surface-variant"
        )}
      >
        {label}
      </Text>
    </Pressable>
  );
}