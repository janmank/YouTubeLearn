import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ISafePaddingOptions {
  desiredPaddingTop?: number;
  desiredPaddingBottom?: number;
}

export const useSafePadding = ({
  desiredPaddingTop = 0,
  desiredPaddingBottom = 0,
}: ISafePaddingOptions) => {
  const insets = useSafeAreaInsets();

  const paddingTop = Math.max(desiredPaddingTop - insets.top, 0);
  const paddingBottom = Math.max(desiredPaddingBottom - insets.bottom, 0);

  return {
    paddingTop,
    paddingBottom,
  };
};
