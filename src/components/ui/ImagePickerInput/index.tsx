import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

import { Typography } from "../Typography";

type ImagePickerInputProps = {
  label: string;
  onPress: () => void;
  imagePreview: string;
};

export default function ImagePickerInput({
  onPress,
  label,
  imagePreview,
}: ImagePickerInputProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.98}
      style={styles.button}
      onPress={onPress}
    >
      {imagePreview ? (
        <Image source={{ uri: imagePreview }} style={styles.imagePreview} />
      ) : (
        <>
          <Image
            source={require("../../../assets/images/defaultImage.png")}
            style={styles.defaultImage}
          />
          <Typography content={label} variant="placeholder" />
        </>
      )}
    </TouchableOpacity>
  );
}
