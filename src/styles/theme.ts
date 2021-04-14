import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "300": "#DADADA",
    },
    background: {
      base: "#F5F8FA",
    },
    text: {
      extralight: "rgba(245, 248, 250,0.6)",
      light: "#F5F8FA",
      dark: "#47585B",
      highlight: "#FFBA08",
      highlighten: "rgba(255, 186, 8, 0.5)",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "background.base",
      },
    },
  },
});
