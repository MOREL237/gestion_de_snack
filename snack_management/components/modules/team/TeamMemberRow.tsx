import { View, Text, Pressable } from "react-native";
import { Pencil, Trash2 } from "lucide-react-native";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";

type TeamMemberRowProps = {
  name: string;
  role: string;
  avatarUri?: string;
  onEdit?: () => void;
  onDelete?: () => void;
};

export function TeamMemberRow({ name, role, avatarUri, onEdit, onDelete }: TeamMemberRowProps) {
  return (
    <View className="flex-row items-center gap-3 py-sm">
      <Avatar uri={avatarUri} name={name} size="md" />
      <View className="flex-1 gap-0.5">
        <Text className="text-body-lg font-medium text-on-surface">{name}</Text>
        <Badge label={role} variant="secondary" size="sm" />
      </View>
      <View className="flex-row gap-3">
        {onEdit && <Pressable onPress={onEdit} hitSlop={8}><Pencil size={16} color="#777587" /></Pressable>}
        {onDelete && <Pressable onPress={onDelete} hitSlop={8}><Trash2 size={16} color="#dc2626" /></Pressable>}
      </View>
    </View>
  );
}