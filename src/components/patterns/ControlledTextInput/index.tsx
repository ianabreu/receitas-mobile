import React from "react";
import { Input, InputProps } from "../../ui/Input";
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";

export function ControlledTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...InputProps
}: UseControllerProps<FormType> & InputProps) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <Input
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          {...InputProps}
        />
      )}
    />
  );
}
