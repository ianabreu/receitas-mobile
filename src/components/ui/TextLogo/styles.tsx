import { StyleSheet, TextStyle } from "react-native";

import { colors, fonts, metrics } from "../../../theme";

type Styles = {
  textLogo: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  textLogo: {
    backgroundColor: colors.primary,
    color: colors.textLight,
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.xl,
    textAlign: "center",
    alignSelf: "center",

    width: metrics.screenWidth / 1.3,
    paddingVertical: metrics.padding_small,
    paddingHorizontal: metrics.padding_large,

    borderTopLeftRadius: metrics.radius_small,
    borderTopRightRadius: metrics.radius_xlarge,
    borderBottomLeftRadius: metrics.radius_xlarge,
    borderBottomRightRadius: metrics.radius_small,
  },
});
