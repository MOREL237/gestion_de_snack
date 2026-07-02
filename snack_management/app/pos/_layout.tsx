import { Tabs } from "expo-router";
import { Package, ClipboardList, BarChart3, User } from "lucide-react-native";

export default function POSLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4f46e5",
        tabBarInactiveTintColor: "#777587",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopColor: "#c7c4d8",
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Inventaire",
          tabBarIcon: ({ color, size }) => <Package color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="commandes/index"
        options={{
          title: "Commandes",
          tabBarIcon: ({ color, size }) => <ClipboardList color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="reappro/index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="tables/index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="stock/index"
        options={{
          href: null, // accessible depuis le dashboard, pas un onglet direct
        }}
      />
      <Tabs.Screen
        name="analyses"
        options={{
          title: "Analyses",
          tabBarIcon: ({ color, size }) => <BarChart3 color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}