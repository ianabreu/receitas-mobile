import { StyleSheet, TextStyle } from "react-native";

import { colors, metrics, fonts } from "../../theme";

type Styles = {
  title: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  title: {
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.xxxl,
    marginVertical: metrics.margin_default,
    color: colors.text,
  },
});
