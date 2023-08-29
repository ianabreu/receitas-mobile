import { StyleSheet, ViewStyle } from "react-native";

import { colors, metrics } from "../../../theme";

type Styles = {
  container: ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: metrics.padding_large,
    paddingTop: metrics.padding_large,
  },
});
