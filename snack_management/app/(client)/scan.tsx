import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraView, useCameraPermissions, type BarcodeScanningResult } from "expo-camera";
import { router } from "expo-router";
import { QrCode } from "lucide-react-native";

import { Button } from "@/components/ui/Button";

/**
 * Format attendu du QR code de table : "snack://table/{tableId}/pos/{posId}"
 * Ajuste le parsing selon le format réel généré par le backend.
 */
function parseTableQrData(data: string): { tableId: string; posId: string } | null {
  const match = data.match(/table\/([^/]+)\/pos\/([^/]+)/);
  if (!match) return null;
  return { tableId: match[1], posId: match[2] };
}

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [hasScanned, setHasScanned] = useState(false);

  const handleBarcodeScanned = (result: BarcodeScanningResult) => {
    if (hasScanned) return;
    setHasScanned(true);

    const parsed = parseTableQrData(result.data);

    if (!parsed) {
      // QR invalide — on relance le scan après un court délai
      setTimeout(() => setHasScanned(false), 1500);
      return;
    }

    // Pas d'authentification : la session client est créée à la volée ici,
    // simplement en portant tableId/posId dans les paramètres de route.
    router.replace({
      pathname: "/menu",
      params: { tableId: parsed.tableId, posId: parsed.posId },
    });
  };

  if (!permission) {
    return <View className="flex-1 bg-black" />;
  }

  if (!permission.granted) {
    return (
      <SafeAreaView className="flex-1 bg-surface items-center justify-center p-lg gap-4">
        <QrCode size={40} color="#777587" />
        <Text className="text-title-md font-title text-on-surface text-center">
          Autorise l'accès à la caméra
        </Text>
        <Text className="text-body-sm text-on-surface-variant text-center">
          On en a besoin pour scanner le QR code de ta table et démarrer ta commande.
        </Text>
        <Button label="Autoriser la caméra" onPress={requestPermission} />
      </SafeAreaView>
    );
  }

  return (
    <View className="flex-1 bg-black">
      <CameraView
        style={{ flex: 1 }}
        facing="back"
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={hasScanned ? undefined : handleBarcodeScanned}
      />

      {/* Overlay */}
      <View className="absolute inset-0 items-center justify-center">
        <View className="w-64 h-64 border-2 border-white/80 rounded-2xl" />
        <Text className="text-white text-body-lg font-medium mt-6">
          {hasScanned ? "QR code non reconnu, réessaie..." : "Scanne le QR code de ta table"}
        </Text>
      </View>

      <SafeAreaView className="absolute top-0 left-0 right-0" edges={["top"]}>
        <Pressable onPress={() => router.back()} className="p-md">
          <Text className="text-white text-body-lg">Annuler</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}