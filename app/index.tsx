import { router } from "expo-router";
import {
  QrCode,
  ShieldCheck,
  Store,
  Truck,
  Wallet,
  type LucideIcon,
} from "lucide-react-native";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type ModuleStatus = "disponible" | "en_cours" | "a_venir";

type ModuleEntry = {
  key: string;
  title: string;
  description: string;
  icon: LucideIcon;
  route: string;
  status: ModuleStatus;
};

const MODULES: ModuleEntry[] = [
  {
    key: "pos",
    title: "Point de Vente",
    description: "Dashboard, commandes, stock, tables, analyses",
    icon: Store,
    route: "/dashboard",
    status: "disponible",
  },
  {
    key: "fournisseur",
    title: "Fournisseur",
    description: "Stock, commandes reçues, équipe",
    icon: Truck,
    route: "/fournisseur/dashboard",
    status: "a_venir",
  },
  {
    key: "client",
    title: "Client",
    description: "Scan table, menu, suivi de commande",
    icon: QrCode,
    route: "/client/scan",
    status: "a_venir",
  },
  {
    key: "finance",
    title: "Finance",
    description: "Revenus, rapports, chiffre journalier",
    icon: Wallet,
    route: "/finance/rapports",
    status: "a_venir",
  },
  {
    key: "auth",
    title: "Authentification",
    description: "Login / register employés",
    icon: ShieldCheck,
    route: "/auth/login",
    status: "a_venir",
  },
];

const STATUS_CONFIG: Record<ModuleStatus, { label: string; variant: "success" | "warning" | "neutral" }> = {
  disponible: { label: "Disponible", variant: "success" },
  en_cours: { label: "En cours", variant: "warning" },
  a_venir: { label: "À venir", variant: "neutral" },
};

export default function DevHubScreen() {
  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <ScrollView
        className="flex-1"
        contentContainerClassName="p-md gap-md"
        showsVerticalScrollIndicator={false}
      >
        <View className="gap-1 mt-2">
          <Text className="text-headline-md font-title text-on-surface">
            Gestion de Snack
          </Text>
          <Text className="text-body-sm text-on-surface-variant">
            Hub de développement — accès rapide aux modules
          </Text>
        </View>

        <View className="gap-3">
          {MODULES.map((module) => {
            const Icon = module.icon;
            const isDisabled = module.status === "a_venir";
            const statusConfig = STATUS_CONFIG[module.status];

            return (
              <Pressable
                key={module.key}
                disabled={isDisabled}
                onPress={() => router.push(module.route as never)}
              >
                <Card
                  padding="md"
                  className="flex-row items-center gap-3"
                  style={{ opacity: isDisabled ? 0.5 : 1 }}
                >
                  <View className="w-11 h-11 rounded-lg bg-primary-fixed items-center justify-center">
                    <Icon size={20} color="#3525cd" />
                  </View>

                  <View className="flex-1 gap-0.5">
                    <Text className="text-body-lg font-medium text-on-surface">
                      {module.title}
                    </Text>
                    <Text className="text-body-sm text-on-surface-variant" numberOfLines={1}>
                      {module.description}
                    </Text>
                  </View>

                  <Badge label={statusConfig.label} variant={statusConfig.variant} size="sm" />
                </Card>
              </Pressable>
            );
          })}
        </View>

        <Text className="text-body-sm text-on-surface-variant text-center mt-2">
          ⚠️ Écran temporaire de développement — à retirer une fois l'authentification en place.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}