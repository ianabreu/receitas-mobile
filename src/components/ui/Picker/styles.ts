import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors, fonts, metrics } from "../../../theme";

interface ModalPickerStyleProps {
  container: StyleProp<ViewStyle>;
  content: StyleProp<ViewStyle>;
  option: StyleProp<ViewStyle>;
  modal: StyleProp<ViewStyle>;
  icon: StyleProp<TextStyle>;
}

export const styles: ModalPickerStyleProps = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.transparentBackground,
  },
  content: {
    width: metrics.screenWidth - metrics.padding_large * 2,
    maxHeight: metrics.screenHeight / 2,
    backgroundColor: colors.card,
    borderRadius: metrics.radius_small,
  },
  option: {
    alignItems: "flex-start",
    borderTopWidth: 0.8,
    borderColor: colors.border,
    padding: metrics.padding_default,
  },
  modal: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,

    fontFamily: fonts.family.regular,
    fontSize: fonts.size.lg,
    color: colors.text,

    paddingVertical: metrics.padding_large,
    paddingHorizontal: metrics.padding_default,
    marginVertical: metrics.margin_default,
  },
  icon: {
    color: colors.textSoft,
    fontSize: fonts.size.xxxl,
  },
});
