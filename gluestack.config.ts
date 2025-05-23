import { config as defaultConfig } from "@gluestack-ui/config";

export const config = {
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      primary: "#2B2D42",
      secondary: "#8D99AE",
      white: "#FFFFFF",
      lightGrey: "#C8C8C8",
    },
    fontSizes: {
      ...defaultConfig.tokens.fontSizes,
      "2xs": 10,
    },
  },
};

export default config;
