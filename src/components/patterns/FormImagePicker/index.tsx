import React, { useState } from "react";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";
import { Typography } from "../../ui/Typography";
import ImagePickerInput from "../../ui/ImagePickerInput";

export function FormImagePicker() {
  const [image, setImage] = useState<string>(null);

  const pickImage = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result.assets[0]);

      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <Typography content={"Capa"} variant="label" />
      <ImagePickerInput
        label="Escolha uma imagem"
        onPress={pickImage}
        imagePreview={image}
      />
    </>
  );
}
