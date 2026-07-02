import { View, Text, Pressable } from "react-native";
import { QrCode } from "lucide-react-native";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";

type TableCardProps = {
  tableNumber: number | string;
  isOccupied: boolean;
  serverName?: string;
  onPressQr?: () => void;
};

export function TableCard({ tableNumber, isOccupied, serverName, onPressQr }: TableCardProps) {
  return (
    <Card padding="md" className="gap-2 flex-1">
      <View className="flex-row items-center justify-between">
        <Text className="text-title-md font-title text-on-surface">
          Table {tableNumber}
        </Text>
        <Badge
          label={isOccupied ? "Occupée" : "Libre"}
          variant={isOccupied ? "warning" : "success"}
          size="sm"
        />
      </View>

      {serverName ? (
        <View className="flex-row items-center gap-2">
          <Avatar name={serverName} size="sm" />
          <Text className="text-body-sm text-on-surface-variant">{serverName}</Text>
        </View>
      ) : (
        <Text className="text-body-sm text-on-surface-variant">
          Aucun serveur assigné
        </Text>
      )}

      <Pressable
        onPress={onPressQr}
        className="flex-row items-center justify-center gap-1 h-9 rounded-lg bg-surface-low mt-1"
      >
        <QrCode size={14} color="#4f46e5" />
        <Text className="text-body-sm text-primary font-medium">Voir le QR</Text>
      </Pressable>
    </Card>
  );
}