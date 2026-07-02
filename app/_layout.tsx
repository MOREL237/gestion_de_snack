import "../global.css";
import { Stack } from "expo-router";
import { ToastProvider } from "@/components/ui/Toast";

export default function RootLayout() {
  return (
    <ToastProvider>
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