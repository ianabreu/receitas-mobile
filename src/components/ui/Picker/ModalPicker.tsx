import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { Typography } from "../Typography";

import { ICategory } from "../../templates/Step1";

type ModalPickerProps = {
  handleCloseModal: () => void;
  options: ICategory[];
  selectedItem: (item: ICategory) => void;
};

export function ModalPicker({
  handleCloseModal,
  options,
  selectedItem,
}: ModalPickerProps) {
  function onPressItem(item: ICategory) {
    selectedItem(item);
    handleCloseModal();
  }

  const option = options.map((item, index) => (
    <TouchableOpacity
      key={index}
      style={styles.option}
      onPress={() => onPressItem(item)}
    >
      <Typography
        content={item.name}
        variant={index === 0 ? "placeholder" : "input"}
      />
    </TouchableOpacity>
  ));

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        handleCloseModal();
      }}
      activeOpacity={1}
    >
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
}
