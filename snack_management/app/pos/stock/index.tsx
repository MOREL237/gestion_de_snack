import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppHeader } from "@/components/ui/AppHeader";
import { StatCard } from "@/components/ui/StatCard";
import { SearchBar } from "@/components/ui/SearchBar";
import { ProductInventoryCard } from "@/components/modules/product/ProductInventoryCard";
import { Boxes, AlertTriangle, TrendingDown, Wallet } from "lucide-react-native";

/* ─────────── Données de démo — à remplacer par useProducts() (React Query) ─────────── */

const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "Artisanal Reserve Stout",
    lotInfo: "Lot #4421 · Malt Premium",
    category: "Casier 24",
    quantity: 142,
    unit: "caisses",
    isCritical: false,
    colorTag: "#4f46e5",
  },
  {
    id: "2",
    name: "Botanical Essence Gin",
    lotInfo: "London Dry · Litre",
    category: "Caissette 06",
    quantity: 14,
    unit: "caisses",
    isCritical: true,
    colorTag: "#d97706",
  },
  {
    id: "3",
    name: "Hyper-Charge Energy",
    lotInfo: "Sans Sucre · Palette Vrac",
    category: "Carton 10",
    quantity: 850,
    unit: "caisses",
    isCritical: false,
    colorTag: "#0284c7",
  },
  {
    id: "4",
    name: "Vance Estate Cabernet",
    lotInfo: "Réserve 2019 · Chêne Français",
    category: "Tonneau",
    quantity: 82,
    unit: "caisses",
    isCritical: true,
    colorTag: "#dc2626",
  },
];

export default function StockScreen() {
  const [search, setSearch] = useState("");

  const filteredProducts = MOCK_PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <AppHeader title="Inventaire en Vrac" notificationCount={0} />

      <ScrollView
        className="flex-1"
        contentContainerClassName="p-md gap-md"
        showsVerticalScrollIndicator={false}
      >
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Rechercher un produit..."
        />

        <View className="flex-row flex-wrap gap-2">
          <StatCard label="Inventaire" value="1 284" icon={Boxes} />
          <StatCard label="Alertes Stock" value={12} icon={AlertTriangle} variant="critical" />
        </View>
        <View className="flex-row flex-wrap gap-2">
          <StatCard label="Critique" value={8} icon={TrendingDown} variant="critical" />
          <StatCard label="Valorisation" value="142k XAF" icon={Wallet} variant="success" />
        </View>

        <View className="gap-3 mt-2">
          <Text className="text-title-md font-title text-on-surface">
            Produits
          </Text>
          {filteredProducts.map((product) => (
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