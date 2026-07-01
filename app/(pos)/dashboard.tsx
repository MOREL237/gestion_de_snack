import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ClipboardList,
  AlertTriangle,
  Wallet,
  Package,
  BarChart3,
  User,
} from "lucide-react-native";

import { AppHeader } from "@/components/ui/AppHeader";
import { StatCard } from "@/components/ui/StatCard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { BottomTabBar, type TabItem } from "@/components/ui/BottomTabBar";

import { OrderCard } from "@/components/modules/order/OrderCard";
import { StockAlertRow } from "@/components/modules/stock/StockAlertRow";
import { WarehouseStatusCard } from "@/components/modules/warehouse/WarehouseStatusCard";

/* ─────────── Données de démo — à remplacer par les hooks React Query ─────────── */

const MOCK_RECENT_ORDERS = [
  {
    id: "1",
    tableNumber: 12,
    status: "EN_PREPARATION" as const,
    items: "2x Obsidian Stout, 1x Reserve Syrah",
    amount: 84.8,
    time: "14:20",
  },
];

const MOCK_STOCK_ALERTS = [
  { id: "1", productName: "Obsidian Stout", remaining: 3 },
  { id: "2", productName: "Arctic Flow Vodka", remaining: 1 },
];

const TABS: TabItem[] = [
  { key: "inventaire", label: "Inventaire", icon: Package },
  { key: "commandes", label: "Commandes", icon: ClipboardList },
  { key: "analyses", label: "Analyses", icon: BarChart3 },
  { key: "profil", label: "Profil", icon: User },
];

export default function DashboardPOSScreen() {
  const [activeTab, setActiveTab] = useState("inventaire");

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <AppHeader title="Gestion de Snack" notificationCount={2} />

      <ScrollView
        className="flex-1"
        contentContainerClassName="p-md gap-lg"
        showsVerticalScrollIndicator={false}
      >
        {/* Salutation */}
        <View>
          <Text className="text-body-lg text-on-surface-variant">
            Ravi de vous revoir,
          </Text>
          <Text className="text-headline-md font-title text-on-surface">
            Alexander.
          </Text>
        </View>

        {/* Statistiques */}
        <View className="flex-row gap-2">
          <StatCard
            label="Commandes Actives"
            value={8}
            icon={ClipboardList}
          />
          <StatCard
            label="Stock Critique"
            value={3}
            icon={AlertTriangle}
            variant="critical"
            actionLabel="Action immédiate"
          />
        </View>

        <StatCard
          label="Revenu Quotidien"
          value="1 240,50 €"
          icon={Wallet}
          trend="Objectif 82%"
        />

        {/* Commandes récentes */}
        <View className="gap-2">
          <View className="flex-row items-center justify-between">
            <Text className="text-title-md font-title text-on-surface">
              Commandes Récentes
            </Text>
            <Text className="text-body-sm text-primary font-medium">
              Tout voir
            </Text>
          </View>

          {MOCK_RECENT_ORDERS.map((order) => (
            <OrderCard
              key={order.id}
              tableNumber={order.tableNumber}
              status={order.status}
              items={order.items}
              amount={order.amount}
              time={order.time}
              onPress={() => {}}
            />
          ))}
        </View>

        {/* État de l'entrepôt */}
        <WarehouseStatusCard healthPercentage={99.9} nextAutoRestockTime="06:00" />

        {/* Alertes stock */}
        <View className="gap-1">
          <Text className="text-title-md font-title text-on-surface mb-1">
            Alertes Stock
          </Text>
          <Card padding="md">
            {MOCK_STOCK_ALERTS.map((alert) => (
              <StockAlertRow
                key={alert.id}
                productName={alert.productName}
                remaining={alert.remaining}
                onPressMenu={() => {}}
              />
            ))}
          </Card>
        </View>

        {/* Réapprovisionnement */}
        <Card padding="md" className="gap-2">
          <Text className="text-title-md font-title text-on-surface">
            Réapprovisionnement
          </Text>
          <Text className="text-body-sm text-on-surface-variant">
            Commande rapide vers nos distributeurs principaux pour les articles critiques.
          </Text>
          <Button
            label="Brouillon de Bon de Commande"
            onPress={() => {}}
            fullWidth
          />
        </Card>
      </ScrollView>

      <BottomTabBar tabs={TABS} activeKey={activeTab} onChange={setActiveTab} />
    </SafeAreaView>
  );
}