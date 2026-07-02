import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Boxes, AlertTriangle, ClipboardCheck, ChevronRight } from "lucide-react-native";

import { AppHeader } from "@/components/ui/AppHeader";
import { StatCard } from "@/components/ui/StatCard";
import { Card } from "@/components/ui/Card";
import { ProductInventoryCard } from "@/components/modules/product/ProductInventoryCard";

/* ─────────── Données de démo — à remplacer par useSupplierStock() / useIncomingOrders() ─────────── */

const MOCK_LOW_STOCK = [
  {
    id: "1",
    name: "Artisanal Reserve Stout",
    lotInfo: "Lot #4421 · Malt Premium",
    category: "Casier 24",
    quantity: 14,
    unit: "caisses",
    isCritical: true,
    colorTag: "#dc2626",
  },
];

export default function FournisseurDashboardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <AppHeader title="Gestion de Snack" notificationCount={3} />

      <ScrollView
        className="flex-1"
        contentContainerClassName="p-md gap-md"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row gap-2">
          <StatCard label="Références" value={412} icon={Boxes} />
          <StatCard label="Stock Critique" value={8} icon={AlertTriangle} variant="critical" />
        </View>

        <StatCard
          label="Commandes en Attente"
          value={12}
          icon={ClipboardCheck}
          actionLabel="À traiter"
        />

        <Pressable onPress={() => router.push("/fournisseur/stock" as never)}>
          <Card padding="md" className="flex-row items-center justify-between">
            <Text className="text-title-md font-title text-on-surface">
              Voir l'inventaire complet
            </Text>
            <ChevronRight size={18} color="#777587" />
          </Card>
        </Pressable>

        <View className="gap-2">
          <Text className="text-title-md font-title text-on-surface">
            Alertes Stock
          </Text>
          {MOCK_LOW_STOCK.map((product) => (
            <ProductInventoryCard
              key={product.id}
              name={product.name}
              lotInfo={product.lotInfo}
              category={product.category}
              quantity={product.quantity}
              unit={product.unit}
              isCritical={product.isCritical}
              colorTag={product.colorTag}
              onEdit={() => {}}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}