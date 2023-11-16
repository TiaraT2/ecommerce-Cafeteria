// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    primary: "#EDD9D7",
    secondary: "#FEF7DA",
    terciary: "#D3D4C7",
    cuatro: "#FACFCF ",
    cinco: "#f2dcdc",
  },
};

export const theme = extendTheme({ colors });
