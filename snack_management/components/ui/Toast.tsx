import { createContext, useCallback, useContext, useRef, useState } from "react";
import { Animated, Text, View } from "react-native";
import clsx from "clsx";
import { CheckCircle2, XCircle, Info } from "lucide-react-native";

type ToastType = "success" | "error" | "info";

type ToastState = {
  message: string;
  type: ToastType;
} | null;

type ToastContextValue = {
  show: (message: string, type?: ToastType) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const ICONS: Record<ToastType, typeof CheckCircle2> = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
};

const COLORS: Record<ToastType, string> = {
  success: "#16a34a",
  error: "#dc2626",
  info: "#0284c7",
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<ToastState>(null);
  const opacity = useRef(new Animated.Value(0)).current;
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const show = useCallback(
    (message: string, type: ToastType = "info") => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setToast({ message, type });

      Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver: true }).start();

      timeoutRef.current = setTimeout(() => {
        Animated.timing(opacity, { toValue: 0, duration: 200, useNativeDriver: true }).start(
          () => setToast(null)
        );
      }, 2500);
    },
    [opacity]
  );

  const Icon = toast ? ICONS[toast.type] : null;

  return (
    <ToastContext.Provider value={{ show }}>
      {children}

      {toast && (
        <Animated.View
          style={{ opacity }}
          className="absolute top-14 left-md right-md z-50"
        >
          <View
            className={clsx(
              "flex-row items-center gap-2 rounded-lg px-md py-sm bg-surface-lowest shadow-modal"
            )}
          >
            {Icon && <Icon size={18} color={COLORS[toast.type]} />}
            <Text className="flex-1 text-body-sm text-on-surface">{toast.message}</Text>
          </View>
        </Animated.View>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast doit être utilisé à l'intérieur de <ToastProvider>");
  return ctx;
}