import { View, Text, Image, Pressable } from "react-native";
import { Star } from "lucide-react-native";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type SupplierCardProps = {
  name: string;
  description: string;
  rating: number;
  imageUri?: string;
  tags?: string[];
  onContact: () => void;
};

export function SupplierCard({ name, description, rating, imageUri, tags = [], onContact }: SupplierCardProps) {
  return (
    <Card padding="none" className="overflow-hidden gap-2">
      {imageUri && <Image source={{ uri: imageUri }} className="w-full h-32" resizeMode="cover" />}
      <View className="p-md gap-2">
        <View className="flex-row items-center justify-between">
          <Text className="text-body-lg font-medium text-on-surface">{name}</Text>
          <View className="flex-row items-center gap-1">
            <Star size={14} color="#d97706" fill="#d97706" />
            <Text className="text-body-sm text-on-surface-variant">{rating.toFixed(1)}</Text>
          </View>
        </View>
        <Text className="text-body-sm text-on-surface-variant" numberOfLines={2}>{description}</Text>
        {tags.length > 0 && (
          <View className="flex-row gap-1 flex-wrap">
            {tags.map((tag) => <Badge key={tag} label={tag} variant="secondary" size="sm" />)}
          </View>
        )}
        <Button label="Contacter" onPress={onContact} size="sm" fullWidth />
      </View>
    </Card>
  );
}