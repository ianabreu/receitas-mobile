import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { colors, metrics } from "../../../theme";

interface Styles {
  button: ViewStyle;
  defaultImage: ImageStyle;
  imageURL: ImageStyle;
}

export const styles = StyleSheet.create<Styles>({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",

    borderBottomWidth: 1,
    borderBottomColor: colors.border,

    gap: metrics.margin_large,
    paddingVertical: metrics.padding_large,
    paddingHorizontal: metrics.padding_default,
    marginVertical: metrics.margin_default,
  },
  defaultImage: {
    width: 45,
    height: 45,
  },
  imageURL: {
    width: metrics.screenWidth - metrics.padding_large,
    aspectRatio: 16 / 9,
  },
});
