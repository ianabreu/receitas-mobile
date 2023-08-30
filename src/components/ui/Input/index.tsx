import React from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "../../../theme";

type Props = {
  icon?: keyof typeof Icon.glyphMap;
} & TextInputProps &
  TouchableOpacityProps;

export function Input({ placeholder, icon }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={colors.textSoft}
      />
      {icon && (
        <TouchableOpacity style={styles.button}>
          <Icon style={styles.icon} name={icon} />
        </TouchableOpacity>
      )}
    </View>
  );
}
