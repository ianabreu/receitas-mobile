import React from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { Typography } from "../Typography";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  iconName?: "arrow-right" | "arrow-left" | "check";
}

export function Button({
  isLoading = false,
  title,
  iconName,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.button,
        { flexDirection: iconName === "arrow-left" ? "row-reverse" : "row" },
      ]}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <>
          <Typography content={title} variant="button" />
          {iconName && <Icon name={iconName} style={styles.icon} />}
        </>
      )}
    </TouchableOpacity>
  );
}
