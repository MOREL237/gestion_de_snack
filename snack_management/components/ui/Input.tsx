import { View, Text, TextInput, type TextInputProps } from "react-native";
import clsx from "clsx";

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export function Input({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className,
  ...rest
}: InputProps) {
  return (
    <View className="gap-1">
      {label && (
        <Text className="text-body-sm font-medium text-on-surface-variant">
          {label}
        </Text>
      )}

      <View
        className={clsx(
          "flex-row items-center gap-2 rounded-lg bg-surface-low px-md h-11 border",
          error ? "border-error" : "border-transparent"
        )}
      >
        {leftIcon}
        <TextInput
          placeholderTextColor="#777587"
          className={clsx(
            "flex-1 text-body-lg text-on-surface font-sans",
            className
          )}
          {...rest}
        />
        {rightIcon}
      </View>

      {error ? (
        <Text className="text-body-sm text-error">{error}</Text>
      ) : helperText ? (
        <Text className="text-body-sm text-on-surface-variant">{helperText}</Text>
      ) : null}
    </View>
  );
}