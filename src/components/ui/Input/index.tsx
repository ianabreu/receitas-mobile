import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { Typography } from "../Typography";

import { styles } from "./styles";
import { colors } from "../../../theme";

export interface InputProps extends TextInputProps {
  label?: string;
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <>
      {label && <Typography content={label} variant="label" />}
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.textSoft}
          {...rest}
        />
      </View>
    </>
  );
}
