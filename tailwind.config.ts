import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: "#6EACDA",
        secondary:"#021526",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        card: "1.6rem",
        footer: "3.5rem",
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      fontSize: {
        xs: "1.9rem",
        sm: "2.4rem",
        md: "2.8rem",
        base: "3.2rem",
        lg: "3.6rem",
        xl: "4rem",
        "2xl": "5rem",
        "3xl": "5.4rem",
        "4xl": "6.5rem",
        "5xl": "8rem",
        "6xl": "9rem",
        "7xl": "11rem",
        "8xl": "16rem",
        "9xl": "18rem",
      },
      borderWidth: {
        "base": ".4rem"
      }, 
      letterSpacing: {
        "neg-2": '-0.2rem'
      }, 
      lineHeight: {
        ".75": ".75"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
