import React from "react";
import {
  TouchableOpacity,
  Image,
  TouchableOpacityProps,
  TextInputProps,
} from "react-native";
import { styles } from "./styles";

import { Typography } from "../Typography";
import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";

export type ImagePickerInputProps = {
  setImageURL: (url: string) => void;
  label: string;
  placeholder: string;
  imageURL?: string;
} & TouchableOpacityProps;

export function ImagePickerInput({
  setImageURL,
  label,
  placeholder,
  imageURL,
  ...touchableOpacityProps
}: ImagePickerInputProps & TextInputProps) {
  const pickImage = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    if (!result.canceled) {
      setImageURL(result.assets[0].uri);
    }
  };
  return (
    <>
      <Typography content={label} variant="label" />
      <TouchableOpacity
        activeOpacity={0.95}
        style={styles.button}
        onPress={pickImage}
        {...touchableOpacityProps}
      >
        {imageURL ? (
          <Image source={{ uri: imageURL }} style={styles.imageURL} />
        ) : (
          <>
            <Image
              source={require("../../../assets/images/defaultImage.png")}
              style={styles.defaultImage}
            />
            <Typography content={placeholder} variant="placeholder" />
          </>
        )}
      </TouchableOpacity>
    </>
  );
}
