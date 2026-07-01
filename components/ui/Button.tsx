import { Pressable, Text, ActivityIndicator } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const button = cva("flex-row items-center justify-center rounded-lg px-md py-sm", {
  variants: {
    variant: {
      primary: "bg-primary",
      secondary: "bg-secondary-container",
      outline: "border border-outline bg-transparent",
      danger: "bg-error",
      ghost: "bg-transparent",
    },
    size: { sm: "h-9 px-sm", md: "h-11 px-md", lg: "h-14 px-lg" },
    fullWidth: { true: "w-full" },
  },
  defaultVariants: { variant: "primary", size: "md" },
});

const label = cva("font-sans font-medium text-body-lg", {
  variants: {
    variant: {
      primary: "text-on-primary",
      secondary: "text-on-secondary-container",
      outline: "text-on-surface",
      danger: "text-error-on",
      ghost: "text-primary",
    },
  },
});

type ButtonProps = VariantProps<typeof button> & {
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export function Button({ label: text, onPress, variant, size, fullWidth, loading, disabled, icon }: ButtonProps) {
  const isDisabled = disabled || loading;
  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
      className={clsx(button({ variant, size, fullWidth }), isDisabled && "opacity-50")}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <>
          {icon}
          <Text className={clsx(label({ variant }), icon && "ml-2")}>{text}</Text>
        </>
      )}
    </Pressable>
  );
}