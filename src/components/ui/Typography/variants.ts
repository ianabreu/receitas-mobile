import { TextStyle } from "react-native";
import { colors, fonts, metrics } from "../../../theme";

export type variantsTextProps = {
  largestTitle: TextStyle;
  title: TextStyle;
  label: TextStyle;
  button: TextStyle;
  body: TextStyle;
  small: TextStyle;
  placeholder: TextStyle;
  input: TextStyle;
};
export const variantsText: variantsTextProps = {
  largestTitle: {
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.xxl,
    marginVertical: metrics.margin_default,
    color: colors.text,
  },
  title: {
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.xl,
    marginVertical: metrics.margin_default,
    color: colors.text,
  },
  label: {
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.lg,
    color: colors.text,
  },
  button: {
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.xl,
    color: colors.textLight,
  },
  body: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.md,
    color: colors.text,
  },
  small: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.sm,
    color: colors.textLight,
  },
  placeholder: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.lg,
    color: colors.textSoft,
  },
  input: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.lg,
    color: colors.text,
  },
};
