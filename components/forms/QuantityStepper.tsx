import { View, Text, Pressable } from "react-native";
import { Minus, Plus } from "lucide-react-native";
import clsx from "clsx";

type QuantityStepperProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

export function QuantityStepper({ value, onChange, min = 0, max = 99 }: QuantityStepperProps) {
  const decrement = () => onChange(Math.max(min, value - 1));
  const increment = () => onChange(Math.min(max, value + 1));

  return (
    <View className="flex-row items-center gap-3">
      <Pressable
        onPress={decrement}
        disabled={value <= min}
        className={clsx(
          "w-8 h-8 rounded-full items-center justify-center bg-surface-high",
          value <= min && "opacity-40"
        )}
      >
        <Minus size={14} color="#191c1d" />
      </Pressable>

      <Text className="text-body-lg font-medium text-on-surface w-6 text-center">
        {value}
      </Text>

      <Pressable
        onPress={increment}
        disabled={value >= max}
        className={clsx(
          "w-8 h-8 rounded-full items-center justify-center bg-primary",
          value >= max && "opacity-40"
        )}
      >
        <Plus size={14} color="#ffffff" />
      </Pressable>
    </View>
  );
}