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
      light: "#F5F8FA",
      dark: "#47585B",
      highlight: "#FFBA08",
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
