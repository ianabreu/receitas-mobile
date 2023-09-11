import React, { useState } from "react";
import { Modal, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

import { Typography } from "../Typography";
import { ModalPicker } from "./ModalPicker";

import { ICategory } from "../../templates/Step1";

export type PickerSelectProps = {
  options: ICategory[];
  onChange?: (...event: any) => void;
  onBlur?: () => void;
  value?: ICategory;
  label?: string;
};
export function PickerSelect({ options, label, onChange }: PickerSelectProps) {
  const OPTIONS = [
    {
      id: "empty",
      name: "Selecione uma categoria",
    },
    ...options,
  ];
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    OPTIONS[0]
  );
  const [modalVisible, setModalVisible] = useState(false);

  function handleChangeCategory(option: ICategory) {
    setSelectedCategory(option);
    onChange(option);
  }
  return (
    <>
      {label && <Typography content={label} variant="label" />}

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
          options={OPTIONS}
          selectedItem={handleChangeCategory}
        />
      </Modal>
    </>
  );
}
