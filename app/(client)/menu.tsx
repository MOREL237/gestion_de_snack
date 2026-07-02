import { useEffect } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import { ShoppingCart } from "lucide-react-native";

import { Button } from "@/components/ui/Button";
import { MenuProductCard } from "@/components/modules/product/MenuProductCard";
import { useCartStore } from "@/store/cartStore";

/* ─────────── Données de démo — à remplacer par useMenuProducts(posId) (React Query) ─────────── */

const MOCK_MENU = [
  { id: "1", name: "Obsidian Stout", format: "Bouteille 33cl", unitPrice: 6.5, isAvailable: true },
  { id: "2", name: "Reserve Syrah", format: "Verre 15cl", unitPrice: 9.0, isAvailable: true },
  { id: "3", name: "Botanical Essence Gin", format: "Dose 4cl", unitPrice: 8.0, isAvailable: true },
  { id: "4", name: "Hyper-Charge Energy", format: "Canette 33cl", unitPrice: 4.5, isAvailable: false },
];

export default function MenuScreen() {
  const { tableId, posId } = useLocalSearchParams<{ tableId: string; posId: string }>();

  const { items, setContext, addItem, updateQuantity, totalAmount, totalItems } =
    useCartStore();

  useEffect(() => {
    if (tableId && posId) setContext(tableId, posId);
  }, [tableId, posId]);

  const getQuantity = (productId: string) =>
    items.find((i) => i.productId === productId)?.quantity ?? 0;

  const handleChangeQuantity = (product: (typeof MOCK_MENU)[number], quantity: number) => {
    const current = getQuantity(product.id);
    const delta = quantity - current;

    if (delta > 0) {
      addItem(
        { productId: product.id, name: product.name, unitPrice: product.unitPrice, format: product.format },
        delta
      );
    } else {
      updateQuantity(product.id, quantity);
    }
  };

  const handleCheckout = () => {
    // TODO: appel API réel pour créer la commande, puis récupérer son id
    const mockOrderId = "cmd_" + Date.now();
    router.replace(`/commande/${mockOrderId}` as never);
  };

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <View className="p-md gap-1">
        <Text className="text-headline-md font-title text-on-surface">Menu</Text>
        <Text className="text-body-sm text-on-surface-variant">
          Table {tableId ?? "—"}
        </Text>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerClassName="p-md gap-3"
        showsVerticalScrollIndicator={false}
      >
        {MOCK_MENU.map((product) => (
          <MenuProductCard
            key={product.id}
            name={product.name}
            format={product.format}
            unitPrice={product.unitPrice}
            isAvailable={product.isAvailable}
            quantity={getQuantity(product.id)}
            onChangeQuantity={(qty) => handleChangeQuantity(product, qty)}
          />
        ))}
      </ScrollView>

      {totalItems() > 0 && (
        <SafeAreaView edges={["bottom"]} className="border-t border-outline-variant bg-surface-lowest">
          <Pressable onPress={handleCheckout} className="mx-md my-md">
            <View className="flex-row items-center justify-between rounded-lg bg-primary px-md h-14">
              <View className="flex-row items-center gap-2">
                <ShoppingCart size={18} color="#ffffff" />
                <Text className="text-body-lg font-medium text-on-primary">
                  {totalItems()} article{totalItems() > 1 ? "s" : ""}
                </Text>
              </View>
              <Text className="text-body-lg font-medium text-on-primary">
                {totalAmount().toFixed(2)} €
              </Text>
            </View>
          </Pressable>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
}