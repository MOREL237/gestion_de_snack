import { View, Text } from "react-native";
import { Card } from "@/components/ui/Card";

type WarehouseStatusCardProps = {
  healthPercentage: number;
  nextAutoRestockTime?: string;
};

export function WarehouseStatusCard({ healthPercentage, nextAutoRestockTime }: WarehouseStatusCardProps) {
  return (
    <Card padding="md" className="gap-1">
      <Text className="text-title-md font-title text-on-surface">État de l'Entrepôt</Text>
      <Text className="text-body-sm text-on-surface-variant">
        Toutes les rondes opérationnelles à {healthPercentage}%.
        {nextAutoRestockTime && ` Réapprovisionnement automatique prévu à ${nextAutoRestockTime}.`}
      </Text>
    </Card>
  );
}