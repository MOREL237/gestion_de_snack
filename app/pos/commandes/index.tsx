import { useMemo, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppHeader } from "@/components/ui/AppHeader";
import { Chip } from "@/components/ui/Chip";
import { EmptyState } from "@/components/ui/EmptyState";
import { OrderCard } from "@/components/modules/order/OrderCard";
import type { OrderStatus } from "@/components/ui/Badge";
import { ClipboardList } from "lucide-react-native";

/* ─────────── Données de démo — à remplacer par useOrders() (React Query) ─────────── */

type Order = {
  id: string;
  tableNumber: number;
  status: OrderStatus;
  items: string;
  amount: number;
  time: string;
};

const MOCK_ORDERS: Order[] = [
  { id: "1", tableNumber: 12, status: "EN_PREPARATION", items: "2x Obsidian Stout, 1x Reserve Syrah", amount: 84.8, time: "14:20" },
  { id: "2", tableNumber: 5, status: "VALIDEE", items: "1x Botanical Essence Gin", amount: 32.0, time: "14:05" },
  { id: "3", tableNumber: 8, status: "SERVIE", items: "3x Hyper-Charge Energy", amount: 18.5, time: "13:50" },
  { id: "4", tableNumber: 3, status: "LIVREE", items: "1x Vance Estate Cabernet", amount: 56.0, time: "13:10" },
];

const FILTERS: { label: string; value: OrderStatus | "TOUTES" }[] = [
  { label: "Toutes", value: "TOUTES" },
  { label: "En préparation", value: "EN_PREPARATION" },
  { label: "Validées", value: "VALIDEE" },
  { label: "Servies", value: "SERVIE" },
  { label: "Livrées", value: "LIVREE" },
];

export default function CommandesScreen() {
  const [activeFilter, setActiveFilter] = useState<OrderStatus | "TOUTES">("TOUTES");

  const filteredOrders = useMemo(() => {
    if (activeFilter === "TOUTES") return MOCK_ORDERS;
    return MOCK_ORDERS.filter((order) => order.status === activeFilter);
  }, [activeFilter]);

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <AppHeader title="Commandes" notificationCount={0} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-grow-0">
        <View className="flex-row gap-2 px-md py-sm">
          {FILTERS.map((filter) => (
            <Chip
              key={filter.value}
              label={filter.label}
              selected={filter.value === activeFilter}
              onPress={() => setActiveFilter(filter.value)}
            />
          ))}
        </View>
      </ScrollView>

      <ScrollView
        className="flex-1"
        contentContainerClassName="p-md gap-3"
        showsVerticalScrollIndicator={false}
      >
        {filteredOrders.length === 0 ? (
          <EmptyState
            icon={ClipboardList}
            title="Aucune commande"
            description="Aucune commande ne correspond à ce filtre pour le moment."
          />
        ) : (
          filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              tableNumber={order.tableNumber}
              status={order.status}
              items={order.items}
              amount={order.amount}
              time={order.time}
              onPress={() => {}}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}