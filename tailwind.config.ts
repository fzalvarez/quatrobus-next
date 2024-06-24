import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/svg/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "3.5rem",
        md: "4rem",
        xl: "6rem",
        "2xl": "11rem",
      },
    },
    extend: {
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      colors: {
        primary: {
          100: "#ccddee",
          200: "#99badc",
          300: "#6698cb",
          400: "#3375b9",
          500: "#0053a8",
          600: "#004286",
          700: "#003265",
          800: "#002143",
          900: "#001122",
          DEFAULT: "#0053a8",
        },
        secondary: {
          100: "#d9e8ff",
          200: "#b3d2ff",
          300: "#8dbbff",
          400: "#67a5ff",
          500: "#418eff",
          600: "#3472cc",
          700: "#275599",
          800: "#1a3966",
          900: "#0d1c33",
          DEFAULT: "#418eff",
        },
        success: {
          100: "#d7f3eb",
          200: "#b0e7d7",
          300: "#88dbc2",
          400: "#61cfae",
          500: "#39c39a",
          600: "#2e9c7b",
          700: "#22755c",
          800: "#174e3e",
          900: "#0b271f",
          DEFAULT: "#39c39a",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
