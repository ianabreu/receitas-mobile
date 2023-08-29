import React, { ReactNode } from "react";
import { View } from "react-native";

import { styles } from "./styles";

type Props = {
  children: ReactNode;
};
export function Container({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}
