import React, { useState } from "react";
import { Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { Typography } from "../Typography";
import { ModalPicker } from "./ModalPicker";

import { ICategory } from "../../../pages/Step1";

type PickerSelectProps = {
  items: ICategory[];
};
export function PickerSelect({ items }: PickerSelectProps) {
  const options = [
    {
      id: "empty",
      name: "Selecione uma categoria",
    },
    ...items,
  ];
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    options[0]
  );
  const [modalVisible, setModalVisible] = useState(false);
  function handleChangeCategory(item: ICategory) {
    setSelectedCategory(item);
  }
  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.modal}
      >
        <Typography
          content={selectedCategory.name}
          variant={selectedCategory.id === "empty" ? "placeholder" : "input"}
        />
        <Icon
          style={styles.icon}
          name={modalVisible ? "chevron-up" : "chevron-down"}
        />
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="fade">
        <ModalPicker
          handleCloseModal={() => setModalVisible(false)}
          options={options}
          selectedItem={handleChangeCategory}
        />
      </Modal>
    </>
  );
}
