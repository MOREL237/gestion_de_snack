import { View, Text } from "react-native";
import clsx from "clsx";

/* ─────────────── Badge générique ─────────────── */

type BadgeVariant =
  | "neutral"
  | "primary"
  | "secondary"
  | "tertiary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "critical";

type BadgeProps = {
  label: string;
  variant?: BadgeVariant;
  size?: "sm" | "md";
};

const VARIANT_STYLES: Record<BadgeVariant, { bg: string; text: string }> = {
  neutral: { bg: "bg-surface-high", text: "text-on-surface-variant" },
  primary: { bg: "bg-primary-fixed", text: "text-primary-dark" },
  secondary: { bg: "bg-secondary-container", text: "text-on-secondary-container" },
  tertiary: { bg: "bg-tertiary-fixed", text: "text-tertiary" },
  info: { bg: "bg-info-container", text: "text-info-on-container" },
  success: { bg: "bg-success-container", text: "text-success-on-container" },
  warning: { bg: "bg-warning-container", text: "text-warning-on-container" },
  error: { bg: "bg-error-container", text: "text-error-on-container" },
  critical: { bg: "bg-critical-container", text: "text-critical" },
};

export function Badge({ label, variant = "neutral", size = "md" }: BadgeProps) {
  const styles = VARIANT_STYLES[variant];

  return (
    <View
      className={clsx(
        "self-start rounded-full",
        styles.bg,
        size === "sm" ? "px-2 py-0.5" : "px-3 py-1"
      )}
    >
      <Text
        className={clsx(
          "font-sans font-medium uppercase",
          styles.text,
          size === "sm" ? "text-[10px]" : "text-label-mono"
        )}
      >
        {label}
      </Text>
    </View>
  );
}

/* ─────────────── StatusBadge (commandes) ─────────────── */

export type OrderStatus =
  | "EN_ATTENTE"
  | "VALIDEE"
  | "EN_PREPARATION"
  | "REJETEE"
  | "SERVIE"
  | "LIVREE"
  | "ANNULEE";

const STATUS_MAP: Record<OrderStatus, { label: string; variant: BadgeVariant }> = {
  EN_ATTENTE: { label: "En attente", variant: "warning" },
  VALIDEE: { label: "Validée", variant: "info" },
  EN_PREPARATION: { label: "En préparation", variant: "info" },
  REJETEE: { label: "Rejetée", variant: "error" },
  SERVIE: { label: "Servie", variant: "secondary" },
  LIVREE: { label: "Livrée", variant: "success" },
  ANNULEE: { label: "Annulée", variant: "critical" },
};

export function StatusBadge({ status, size }: { status: OrderStatus; size?: "sm" | "md" }) {
  const config = STATUS_MAP[status];
  return <Badge label={config.label} variant={config.variant} size={size} />;
}