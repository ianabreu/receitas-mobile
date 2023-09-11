import React from "react";
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { PickerSelectProps } from "../../ui/Picker";
import { PickerSelect } from "../../ui/Picker";

export function ControlledSelectInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...pickerSelectProps
}: UseControllerProps<FormType> & PickerSelectProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <PickerSelect
          onChange={field.onChange}
          value={field.value}
          onBlur={field.onBlur}
          {...pickerSelectProps}
        />
      )}
    />
  );
}
