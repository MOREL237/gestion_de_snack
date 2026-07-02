import { View, Text } from "react-native";
import { Check } from "lucide-react-native";
import clsx from "clsx";
import type { OrderStatus } from "@/components/ui/Badge";

const STEPS: { status: OrderStatus; label: string }[] = [
  { status: "VALIDEE", label: "Validée" },
  { status: "EN_PREPARATION", label: "En préparation" },
  { status: "SERVIE", label: "Servie" },
  { status: "LIVREE", label: "Livrée" },
];

type OrderTimelineProps = {
  currentStatus: OrderStatus;
};

export function OrderTimeline({ currentStatus }: OrderTimelineProps) {
  const currentIndex = STEPS.findIndex((s) => s.status === currentStatus);

  return (
    <View className="gap-0">
      {STEPS.map((step, index) => {
        const isDone = index < currentIndex;
        const isActive = index === currentIndex;
        const isLast = index === STEPS.length - 1;

        return (
          <View key={step.status} className="flex-row">
            <View className="items-center">
              <View
                className={clsx(
                  "w-7 h-7 rounded-full items-center justify-center",
                  isDone || isActive ? "bg-primary" : "bg-surface-high"
                )}
              >
                {isDone ? (
                  <Check size={14} color="#ffffff" />
                ) : (
                  <View
                    className={clsx(
                      "w-2 h-2 rounded-full",
                      isActive ? "bg-white" : "bg-outline-variant"
                    )}
                  />
                )}
              </View>
              {!isLast && (
                <View
                  className={clsx(
                    "w-0.5 flex-1 min-h-[24px]",
                    isDone ? "bg-primary" : "bg-outline-variant"
                  )}
                />
              )}
            </View>

            <View className="flex-1 pb-md pl-3">
              <Text
                className={clsx(
                  "text-body-lg",
                  isActive
                    ? "font-medium text-on-surface"
                    : isDone
                    ? "text-on-surface"
                    : "text-on-surface-variant"
                )}
              >
                {step.label}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}