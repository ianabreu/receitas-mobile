import React from "react";
import { Text, TextProps, TextStyle } from "react-native";
import { colors, fonts, metrics } from "../../../theme";

type TypographProps = {
  content: string;
  variant: keyof variantsTextProps;
  allign?: "auto" | "justify" | "center" | "left" | "right";
} & TextProps;
type variantsTextProps = {
  largestTitle: TextStyle;
  title: TextStyle;
  label: TextStyle;
  button: TextStyle;
  body: TextStyle;
  small: TextStyle;
};
const variantsText: variantsTextProps = {
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
    fontSize: fonts.size.lg,
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
};
export function Typography({
  content,
  variant,
  allign = "left",
  ...rest
}: TypographProps) {
  return (
    <Text {...rest} style={[variantsText[variant], { textAlign: allign }]}>
      {content}
    </Text>
  );
}
