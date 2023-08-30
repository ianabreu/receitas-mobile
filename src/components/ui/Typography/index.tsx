import React from "react";
import { Text, TextStyle } from "react-native";
import { colors, fonts, metrics } from "../../../theme";

type TypographProps = {
  content: string;
  variant: keyof variantsTextProps;
};
type variantsTextProps = {
  title: TextStyle;
  subtitle: TextStyle;
  label: TextStyle;
  button: TextStyle;
  body: TextStyle;
};
const variantsText: variantsTextProps = {
  title: {
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.xxl,
    marginVertical: metrics.margin_default,
    color: colors.text,
  },
  subtitle: {
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
    fontSize: fonts.size.lg,
    color: colors.textLight,
  },
  body: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.md,
    color: colors.text,
  },
};
export function Typography({ content, variant }: TypographProps) {
  return <Text style={variantsText[variant]}>{content}</Text>;
}
