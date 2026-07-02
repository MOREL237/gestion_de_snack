import "../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { ToastProvider } from "@/components/ui/Toast";

export default function RootLayout() {
  return (
    <ToastProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF" // remplace par la vraie valeur hex de bg-surface
        translucent={false}
      />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="pos" />
        <Stack.Screen name="fournisseur" />
        <Stack.Screen name="(client)" />
        {/* <Stack.Screen name="(auth)" /> */}
        {/* <Stack.Screen name="(finance)" /> */}
      </Stack>
    </ToastProvider>
  );
}