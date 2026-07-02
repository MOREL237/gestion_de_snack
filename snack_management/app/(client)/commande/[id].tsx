import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";

import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { OrderTimeline } from "@/components/modules/order/OrderTimeline";
import { useCartStore } from "@/store/cartStore";
import type { OrderStatus } from "@/components/ui/Badge";

/* ─────────── Donnée de démo — à remplacer par useOrder(id) avec polling / websocket ─────────── */

const MOCK_ORDER = {
  status: "EN_PREPARATION" as OrderStatus,
  serverName: "Elena Rodriguez",
  tableNumber: 12,
};

export default function CommandeDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { items, totalAmount, clear } = useCartStore();

  const handleNewOrder = () => {
    clear();
    router.replace("/scan" as never);
  };

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <ScrollView
        className="flex-1"
        contentContainerClassName="p-md gap-md"
        showsVerticalScrollIndicator={false}
      >
        <View className="gap-1">
          <Text className="text-headline-md font-title text-on-surface">
            Suivi de commande
          </Text>
          <Text className="text-body-sm text-on-surface-variant">
            Table {MOCK_ORDER.tableNumber} · Commande #{id?.slice(-6)}
          </Text>
        </View>

        <Card padding="md">
          <OrderTimeline currentStatus={MOCK_ORDER.status} />
        </Card>

        <Card padding="md" className="flex-row items-center gap-3">
          <Avatar name={MOCK_ORDER.serverName} size="md" />
          <View>
            <Text className="text-body-sm text-on-surface-variant">
              Ton serveur
            </Text>
            <Text className="text-body-lg font-medium text-on-surface">
              {MOCK_ORDER.serverName}
            </Text>
          </View>
        </Card>

        <Card padding="md" className="gap-2">
          <Text className="text-title-md font-title text-on-surface">
            Récapitulatif
          </Text>
          {items.map((item) => (
            <View key={item.productId} className="flex-row justify-between">
              <Text className="text-body-lg text-on-surface">
                {item.quantity}x {item.name}
              </Text>
              <Text className="text-body-lg text-on-surface-variant">
                {(item.unitPrice * item.quantity).toFixed(2)} XAF
              </Text>
            </View>
          ))}
          <View className="flex-row justify-between pt-2 border-t border-outline-variant mt-1">
            <Text className="text-body-lg font-medium text-on-surface">Total</Text>
            <Text className="text-body-lg font-medium text-on-surface">
              {totalAmount().toFixed(2)} XAF
            </Text>
          </View>
        </Card>

        <Button label="Nouvelle commande" onPress={handleNewOrder} variant="outline" fullWidth />
      </ScrollView>
    </SafeAreaView>
  );
}