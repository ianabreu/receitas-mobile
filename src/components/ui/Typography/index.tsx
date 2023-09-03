import React from "react";
import { Text, TextProps } from "react-native";
import { variantsText, variantsTextProps } from "./variants";

type TypographProps = {
  content: string;
  variant: keyof variantsTextProps;
  allign?: "auto" | "justify" | "center" | "left" | "right";
} & TextProps;

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
