import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors, fonts, metrics } from "../../../theme";

type Styles = {
  button: ViewStyle;
  loading: TextStyle;
  icon: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  button: {
    maxWidth: (metrics.screenWidth - metrics.padding_large) / 2,
    minWidth: (metrics.screenWidth - metrics.padding_large) / 2.5,
    gap: metrics.margin_default,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.primary,
    paddingHorizontal: metrics.padding_large,
    paddingVertical: metrics.padding_default,
    height: 50,
  },
  loading: {
    fontSize: fonts.size.xl,
  },
  icon: {
    color: colors.textLight,
    fontSize: fonts.size.xxl,
  },
});
