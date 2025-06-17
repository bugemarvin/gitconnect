"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "@app/chakra";

export default function Provider({ children, ...props }: ThemeProviderProps) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <NextThemesProvider attribute="class" {...props}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </NextThemesProvider>
    </>
  );
}
