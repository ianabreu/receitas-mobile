import React from "react";
import { Input } from "../../ui/Input";
import { Typography } from "../../ui/Typography";

type FormInputTextProps = {
  label: string;
  placeholder: string;
};

export function FormInputText({ label, placeholder }: FormInputTextProps) {
  return (
    <>
      <Typography content={label} variant="label" />
      <Input placeholder={placeholder} />
    </>
  );
}
