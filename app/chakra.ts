import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import tColors from "tailwindcss/colors";

const colors = {
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
    ...tColors.gray,
    75: "#F6F7F9",
    150: "#EDEEF1",
    250: "#DBE1E3",
    350: "#6B7280",
    450: "#838A95",
    550: "#576473",
    650: "#424A57",
    750: "#2A323E",
    850: "#161D24",
    925: "#0A0F1F",
  },
  slate: {
    ...tColors.slate,
  },
  green: {
    ...tColors.green,
  },
  amber: {
    ...tColors.amber,
  },
  indigo: {
    ...tColors.indigo,
  },
  red: {
    ...tColors.red,
  },
  branded: {
    ...tColors.emerald,
    500: tColors.emerald[600],
    200: tColors.emerald[600],
  },
};

const fonts = {
  heading: "var(--font-poppins)",
  body: "var(--font-lora)",
};

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const breakpoints = {
  base: "0em",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const zIndices = {
  dropdown: 1000,
  overlay: 1111,
  modal: 1112,
  popover: 1113,
  tooltip: 1114,
  toast: 1999,
};

const theme = extendTheme({
  colors,
  fonts,
  config,
  breakpoints,
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: "primary.600",
      },
    },
    NumberInput: {
      defaultProps: {
        focusBorderColor: "primary.600",
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: "primary.600",
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "primary.600",
      },
    },
    FormLabel: {
      baseStyle: {
        fontWeight: "normal",
        fontSize: "sm",
      },
      variants: {
        md: {
          fontSize: "sm",
          fontWeight: "md",
        },
      },
    },
    Popover: {
      variants: {
        responsive: {
          popper: {
            maxWidth: "unset",
            width: "unset",
            content: { width: "unset", minWidth: "unset" },
          },
        },
      },
    },
    VStack: {
      baseStyle: {
        align: "flex-start",
      },
    },
  },
  zIndices,
});

export default theme;

