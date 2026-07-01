import { View, Text, Image } from "react-native";
import clsx from "clsx";

type AvatarProps = {
  uri?: string;
  name: string;
  size?: "sm" | "md" | "lg";
};

const SIZE_MAP = {
  sm: { box: "w-8 h-8", text: "text-body-sm" },
  md: { box: "w-11 h-11", text: "text-body-lg" },
  lg: { box: "w-16 h-16", text: "text-headline-md" },
};

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export function Avatar({ uri, name, size = "md" }: AvatarProps) {
  const { box, text } = SIZE_MAP[size];

  if (uri) {
    return (
      <Image
        source={{ uri }}
        className={clsx(box, "rounded-full")}
        accessibilityLabel={name}
      />
    );
  }

  return (
    <View
      className={clsx(
        box,
        "rounded-full bg-primary-fixed items-center justify-center"
      )}
    >
      <Text className={clsx(text, "font-medium text-primary-dark")}>
        {getInitials(name)}
      </Text>
    </View>
  );
}