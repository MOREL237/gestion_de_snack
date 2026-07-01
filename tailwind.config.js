/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* ─── Surfaces ─── */
        surface: {
          DEFAULT:  "#f8f9fa",
          dim:      "#d9dadb",
          bright:   "#f8f9fa",
          lowest:   "#ffffff",
          low:      "#f3f4f5",
          base:     "#edeeef",
          high:     "#e7e8e9",
          highest:  "#e1e3e4",
        },

        /* ─── Primary (Indigo) ─── */
        primary: {
          DEFAULT:   "#4f46e5",
          dark:      "#3525cd",
          container: "#4f46e5",
          fixed:     "#e2dfff",
          "fixed-dim": "#c3c0ff",
        },

        /* ─── Secondary (Slate-Blue) ─── */
        secondary: {
          DEFAULT:   "#565e74",
          container: "#dae2fd",
          fixed:     "#dae2fd",
          "fixed-dim": "#bec6e0",
        },

        /* ─── Tertiary (Orange profond) ─── */
        tertiary: {
          DEFAULT:   "#7e3000",
          container: "#a44100",
          fixed:     "#ffdbcc",
          "fixed-dim": "#ffb695",
        },

        /* ─── Contenu sur couleurs ─── */
        "on-primary":            "#ffffff",
        "on-primary-container":  "#dad7ff",
        "on-secondary":          "#ffffff",
        "on-secondary-container":"#5c647a",
        "on-tertiary":           "#ffffff",
        "on-tertiary-container": "#ffd2be",
        "on-surface":            "#191c1d",
        "on-surface-variant":    "#464555",
        "inverse-on-surface":    "#f0f1f2",

        /* ─── Outline ─── */
        outline: {
          DEFAULT: "#777587",
          variant: "#c7c4d8",
        },

        /* ─── Erreur ─── */
        error: {
          DEFAULT:   "#ba1a1a",
          container: "#ffdad6",
          on:        "#ffffff",
          "on-container": "#93000a",
        },

        /* ─── Utilitaires sémantiques ─── */
        success: {
          DEFAULT:   "#16a34a",
          container: "#dcfce7",
          "on-container": "#14532d",
        },
        warning: {
          DEFAULT:   "#d97706",
          container: "#fef3c7",
          "on-container": "#78350f",
        },
        info: {
          DEFAULT:   "#0284c7",
          container: "#e0f2fe",
          "on-container": "#0c4a6e",
        },
        critical: {
          DEFAULT:   "#dc2626",
          container: "#fee2e2",
        },
      },

      fontFamily: {
        sans:  ["Inter", "System"],
        title: ["Geist", "Inter", "System"],
        mono:  ["JetBrainsMono", "Courier New"],
      },

      fontSize: {
        "display-lg":  ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "headline-md": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "title-md":    ["20px", { lineHeight: "28px", fontWeight: "500" }],
        "body-lg":     ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm":     ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "label-mono":  ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
      },

      borderRadius: {
        sm:   "2px",
        DEFAULT: "4px",
        md:   "6px",
        lg:   "8px",
        xl:   "12px",
        "2xl": "16px",
        full: "9999px",
      },

      spacing: {
        xs:  "4px",
        sm:  "8px",
        md:  "16px",
        lg:  "24px",
        xl:  "40px",
      },

      boxShadow: {
        card:   "0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)",
        hover:  "0 4px 12px rgba(15,23,42,0.08)",
        modal:  "0 8px 24px rgba(15,23,42,0.12)",
        focus:  "0 0 0 2px rgba(79,70,229,0.2)",
      },
    },
  },
  plugins: [],
};
