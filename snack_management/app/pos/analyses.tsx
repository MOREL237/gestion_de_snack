import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RotateCw, Wallet, Clock } from "lucide-react-native";

import { AppHeader } from "@/components/ui/AppHeader";
import { StatCard } from "@/components/ui/StatCard";
import { Card } from "@/components/ui/Card";
import { StockHealthBreakdown } from "@/components/modules/analytics/StockHealthBreakdown";
import { InsightCard } from "@/components/modules/analytics/InsightCard";
import { BestSellerRow } from "@/components/modules/analytics/BestSellerRow";

/* ─────────── Données de démo — à remplacer par useAnalytics() (React Query) ─────────── */

const MOCK_BEST_SELLERS = [
  { id: "1", name: "Artisanal Reserve Stout", code: "BAC 12-A24", salesCount: 1240, trend: "+8.2%" },
  { id: "2", name: "Botanical Essence Gin", code: "BAC 08-C12", salesCount: 942, trend: "+5.1%" },
  { id: "3", name: "Oak Aged Single Malt", code: "BAC 01-D09", salesCount: 812, trend: "+3.4%" },
];

export default function AnalysesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <AppHeader title="Analyses de l'Entrepôt" notificationCount={0} />

      <ScrollView
        className="flex-1"
        contentContainerClassName="p-md gap-md"
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-body-sm text-on-surface-variant">
          Les 7 derniers jours
        </Text>

        <View className="flex-row flex-wrap gap-2">
          <StatCard label="Taux de Rotation" value="24.8%" icon={RotateCw} variant="success" trend="Sain" />
          <StatCard label="Valeur Stock" value="1.2M XAF" icon={Wallet} />
        </View>

        <StatCard
          label="Délai Moyen de Préparation"
          value="1h 14m"
          icon={Clock}
        />

        <Card padding="md" className="gap-2">
          <Text className="text-title-md font-title text-on-surface">
            Efficacité de Préparation
          </Text>
          {/* Placeholder graphique — à remplacer par une vraie lib de charts (victory-native / recharts) */}
          <View className="h-24 rounded-lg bg-surface-high items-center justify-center">
            <Text className="text-body-sm text-on-surface-variant">
              Graphique à intégrer (victory-native)
            </Text>
          </View>
        </Card>

        <StockHealthBreakdown
          total={412}
          segments={[
            { label: "Sain", count: 318, color: "#16a34a" },
            { label: "Faible", count: 82, color: "#d97706" },
            { label: "Critique", count: 12, color: "#dc2626" },
          ]}
        />

        <InsightCard
          title="Optimiser la Fréquence de Réapprovisionnement"
          description="La rotation a augmenté de 15% les weekends. Envisagez d'intensifier les cycles de réapprovisionnement pour éviter les ruptures de stock en fin de semaine."
        />

        <View className="gap-1">
          <View className="flex-row items-center justify-between">
            <Text className="text-title-md font-title text-on-surface">
              Les Plus Vendus
            </Text>
            <Text className="text-body-sm text-primary font-medium">
              Voir tout
            </Text>
          </View>
          <Card padding="md">
            {MOCK_BEST_SELLERS.map((item) => (
              <BestSellerRow
                key={item.id}
                name={item.name}
                code={item.code}
                salesCount={item.salesCount}
                trend={item.trend}
              />
            ))}
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}