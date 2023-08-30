import { StyleSheet, TextStyle } from "react-native";

import { colors, fonts, metrics } from "../../../theme";

type Styles = {
  container: TextStyle;
  input: TextStyle;
  button: TextStyle;
  icon: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,

    fontFamily: fonts.family.regular,
    fontSize: fonts.size.lg,
    color: colors.text,

    paddingVertical: metrics.padding_large,
    paddingHorizontal: metrics.padding_default,
    marginVertical: metrics.margin_default,
  },
  button: {
    position: "absolute",
    right: 0,
    padding: metrics.padding_default,
  },
  icon: {
    color: colors.primary,
    fontSize: fonts.size.lg * 2,
  },
});
