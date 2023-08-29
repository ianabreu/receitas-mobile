import React from "react";
import { Text, TextProps } from "react-native";

import { styles } from "./styles";

type Props = TextProps & {
  children: string;
};
export function TextLogo({ children }: Props) {
  return <Text style={styles.textLogo}>{children}</Text>;
}
