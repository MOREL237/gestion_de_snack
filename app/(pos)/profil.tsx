import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LogOut, Bell, Shield, HelpCircle, ChevronRight } from "lucide-react-native";

import { AppHeader } from "@/components/ui/AppHeader";
import { Card } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";

/* ─────────── Donnée de démo — à remplacer par useAuth() / le store employé connecté ─────────── */

const MOCK_EMPLOYEE = {
  name: "Alexander Vance",
  role: "Gérant Point de Vente",
  posName: "Snack Le Central",
};

const MENU_ITEMS = [
  { icon: Bell, label: "Notifications" },
  { icon: Shield, label: "Permissions & Rôle" },
  { icon: HelpCircle, label: "Aide & Support" },
];

export default function ProfilScreen() {
  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <AppHeader title="Profil" notificationCount={0} />

      <ScrollView
        className="flex-1"
        contentContainerClassName="p-md gap-md"
        showsVerticalScrollIndicator={false}
      >
        <Card padding="lg" className="items-center gap-2">
          <Avatar name={MOCK_EMPLOYEE.name} size="lg" />
          <Text className="text-title-md font-title text-on-surface">
            {MOCK_EMPLOYEE.name}
          </Text>
          <Text className="text-body-sm text-on-surface-variant">
            {MOCK_EMPLOYEE.role} · {MOCK_EMPLOYEE.posName}
          </Text>
        </Card>

        <Card padding="none">
          {MENU_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Pressable
                key={item.label}
                className={`flex-row items-center gap-3 p-md ${
                  index < MENU_ITEMS.length - 1 ? "border-b border-outline-variant/50" : ""
                }`}
              >
                <Icon size={18} color="#464555" />
                <Text className="flex-1 text-body-lg text-on-surface">{item.label}</Text>
                <ChevronRight size={18} color="#777587" />
              </Pressable>
            );
          })}
        </Card>

        <Pressable className="flex-row items-center justify-center gap-2 p-md rounded-xl bg-error-container">
          <LogOut size={18} color="#93000a" />
          <Text className="text-body-lg font-medium text-error-on-container">
            Se déconnecter
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}