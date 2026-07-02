import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Plus } from "lucide-react-native";

import { AppHeader } from "@/components/ui/AppHeader";
import { Button } from "@/components/ui/Button";
import { TableCard } from "@/components/modules/table/TableCard";

/* ─────────── Données de démo — à remplacer par useTables() (React Query) ─────────── */

const MOCK_TABLES = [
  { id: "1", tableNumber: 1, isOccupied: false },
  { id: "2", tableNumber: 3, isOccupied: true, serverName: "Elena Rodriguez" },
  { id: "3", tableNumber: 5, isOccupied: false },
  { id: "4", tableNumber: 8, isOccupied: true, serverName: "Lucas Meyer" },
  { id: "5", tableNumber: 12, isOccupied: true, serverName: "Sophie Dubois" },
  { id: "6", tableNumber: 15, isOccupied: false },
];

export default function TablesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <AppHeader title="Tables" notificationCount={0} />

      <ScrollView
        className="flex-1"
        contentContainerClassName="p-md gap-md"
        showsVerticalScrollIndicator={false}
      >
        <Button
          label="Ajouter une table"
          icon={<Plus size={16} color="#ffffff" />}
          onPress={() => {}}
          fullWidth
        />

        <View className="flex-row flex-wrap gap-3">
          {MOCK_TABLES.map((table) => (
            <View key={table.id} className="w-[47%]">
              <TableCard
                tableNumber={table.tableNumber}
                isOccupied={table.isOccupied}
                serverName={table.serverName}
                onPressQr={() => {}}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}