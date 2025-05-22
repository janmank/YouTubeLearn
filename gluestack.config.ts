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
    },
  },
};

export default config;
