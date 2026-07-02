import { useMemo, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Plus } from "lucide-react-native";
import { router } from "expo-router";

import { AppHeader } from "@/components/ui/AppHeader";
import { SearchBar } from "@/components/ui/SearchBar";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { SupplierCard } from "@/components/modules/supplier/SupplierCard";

/* ─────────── Données de démo — à remplacer par useSuppliers() (React Query) ─────────── */

const CATEGORIES = ["Tout voir", "Vins & Spiritueux", "Soft Drink"];

const MOCK_SUPPLIERS = [
  {
    id: "1",
    name: "Vignobles de l'Horizon",
    description:
      "Spécialiste des vins biodynamiques de la vallée du Rhône. Fournisseur exclusif de nos établissements prestige.",
    rating: 4.9,
    category: "Vins & Spiritueux",
    tags: ["Bio", "Vins Rouges", "Export"],
  },
  {
    id: "2",
    name: "Source Pure SAS",
    description: "Eaux minérales premium et infusions botaniques gazeuses.",
    rating: 4.7,
    category: "Soft Drink",
    tags: [],
    deliveryTime: "48 heures",
    minOrder: "250 €",
  },
  {
    id: "3",
    name: "Brasserie du Sommet",
    description: "Bières artisanales et cidres locaux.",
    rating: 4.5,
    category: "Vins & Spiritueux",
    tags: [],
  },
  {
    id: "4",
    name: "Nectar & Co",
    description: "Jus de fruits pressés à froid.",
    rating: 4.8,
    category: "Soft Drink",
    tags: [],
  },
];

export default function TrouverFournisseursScreen() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tout voir");

  const filteredSuppliers = useMemo(() => {
    return MOCK_SUPPLIERS.filter((supplier) => {
      const matchesCategory =
        activeCategory === "Tout voir" || supplier.category === activeCategory;
      const matchesSearch = supplier.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <AppHeader title="Gestion de Snack" onPressMenu={() => router.back()} />

      <ScrollView
        className="flex-1"
        contentContainerClassName="p-md gap-md"
        showsVerticalScrollIndicator={false}
      >
        <View className="gap-1">
          <Text className="text-headline-md font-title text-on-surface">
            Trouver des Fournisseurs
          </Text>
          <Text className="text-body-sm text-on-surface-variant">
            Sourcing global
          </Text>
        </View>

        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Rechercher par nom, région ou type..."
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row gap-2">
            {CATEGORIES.map((category) => (
              <Chip
                key={category}
                label={category}
                selected={category === activeCategory}
                onPress={() => setActiveCategory(category)}
              />
            ))}
          </View>
        </ScrollView>

        <Button
          label="Nouveau Fournisseur"
          icon={<Plus size={16} color="#ffffff" />}
          onPress={() => {}}
          fullWidth
        />

        {filteredSuppliers.length === 0 ? (
          <EmptyState
            title="Aucun fournisseur trouvé"
            description="Essaie une autre recherche ou catégorie."
          />
        ) : (
          <View className="gap-3">
            {filteredSuppliers.map((supplier) => (
              <SupplierCard
                key={supplier.id}
                name={supplier.name}
                description={supplier.description}
                rating={supplier.rating}
                tags={supplier.tags}
                onContact={() => {}}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}