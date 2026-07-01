import { View, TextInput, Pressable, Text } from "react-native";
import { Search, SlidersHorizontal } from "lucide-react-native";

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onPressFilter?: () => void;
  activeFilterLabel?: string;
};

export function SearchBar({
  value,
  onChangeText,
  placeholder = "Rechercher...",
  onPressFilter,
  activeFilterLabel,
}: SearchBarProps) {
  return (
    <View className="flex-row items-center gap-2">
      <View className="flex-1 flex-row items-center gap-2 rounded-lg bg-surface-low px-md h-11">
        <Search size={18} color="#777587" />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#777587"
          className="flex-1 text-body-lg text-on-surface font-sans"
        />
      </View>

      {onPressFilter && (
        <Pressable
          onPress={onPressFilter}
          className="flex-row items-center gap-1 h-11 px-sm rounded-lg bg-surface-low"
        >
          <SlidersHorizontal size={16} color="#4f46e5" />
          {activeFilterLabel && (
            <Text className="text-body-sm text-primary font-medium">
              {activeFilterLabel}
            </Text>
          )}
        </Pressable>
      )}
    </View>
  );
}