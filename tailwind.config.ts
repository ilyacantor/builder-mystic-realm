import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "1.75rem",
        lg: "1.25rem",
        md: "1rem",
        sm: "0.75rem",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        display: ["Quicksand", ...fontFamily.sans],
      },
      boxShadow: {
        "card-elevated": "0 28px 80px -40px rgba(0, 188, 196, 0.45)",
        "card-soft": "0 18px 48px -30px rgba(13, 15, 20, 0.9)",
      },
      backgroundImage: {
        "hero-panel":
          "radial-gradient(circle at top left, rgba(0,188,196,0.35), transparent 60%), radial-gradient(circle at bottom right, rgba(255,111,0,0.3), transparent 55%)",
        "footer-ribbon": "linear-gradient(90deg, #00BCC4 0%, #FF6F00 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
