import type { Config } from "tailwindcss";
import { gray } from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  initialColorMode: "light",
  useSystemColorMode: false,
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "pulse-fast": "ping 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      colors: {
        primary: {
          DEFAULT: "#2eca7f",
          100: "#eafaf3",
          200: "#c1f1da",
          300: "#97e7c1",
          400: "#6edea8",
          500: "#44d48f",
          600: "#2bbb76",
          700: "#21915b",
          800: "#186841",
          900: "#0e3e27",
        },
        secondary: {
          DEFAULT: "#F2F8F1",
          100: "#eff6ee",
          200: "#d0e5cc",
          300: "#b0d4aa",
          400: "#91c388",
          500: "#71b266",
          600: "#57994d",
          700: "#44773c",
          800: "#31552b",
          900: "#1d331a",
        },
        headerText: {
          DEFAULT: "#002147",
          100: "#e5f1ff",
          200: "#b3d6ff",
          300: "#80bbff",
          400: "#4d9fff",
          500: "#1a84ff",
          600: "#006be6",
          700: "#0053b3",
          800: "#003b80",
          900: "#00244d",
        },
        landingTextPrimary: "#7A7A7A",
        landingTextSecondary: "#B9B9BA",
        gray: {
          ...gray,
          75: "#F6F7F9",
          150: "#EDEEF1",
          250: "#DBE1E3",
          350: "#B5BABF",
          450: "#838A95",
          550: "#576473",
          650: "#424A57",
          750: "#2A323E",
          850: "#181F2D",
          925: "#0A0F1F",
        },
      },
      fontFamily: {
        lora: ["Lora", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;

