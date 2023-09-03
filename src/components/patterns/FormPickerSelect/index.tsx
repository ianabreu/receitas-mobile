import React from "react";

import { Typography } from "../../ui/Typography";
import { PickerSelect } from "../../ui/Picker";

import { ICategory } from "../../../pages/Step1";

type FormPickerSelect = {
  label: string;
  categories: ICategory[];
};

export function FormPickerSelect({ label, categories }: FormPickerSelect) {
  return (
    <>
      <Typography content={label} variant="label" />
      <PickerSelect items={categories} />
    </>
  );
}
