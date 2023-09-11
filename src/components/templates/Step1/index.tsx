import React, { useEffect } from "react";
// import { useForm, FormActions } from "../../../contexts/FormContext";

import { FormPickerSelect } from "../../patterns/FormPickerSelect";

import { useForm, Controller } from "react-hook-form";

export interface ICategory {
  id: string;
  name: string;
}
export default function Step1() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const { state, dispatch } = useForm();
  const categories: ICategory[] = [
    { id: "0", name: "Macarrão" },
    { id: "1", name: "Sorvetes" },
    { id: "4", name: "Massas" },
  ];

  // useEffect(() => {
  //   dispatch({
  //     type: FormActions.setCurrentStep,
  //     payload: 1,
  //   });
  // }, []);

  return (
    <>
      {/* <Controller
        control={control}
        name="title"
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInputText
            label="Título"
            placeholder="Digite um título"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
          />
        )}
      /> */}
      {/* <FormInputText
        label="Descrição"
        placeholder="Digite uma descrição"
        {...register("description")}
        id="description"
      />
      <FormPickerSelect categories={categories} label="Categoria" />
      <FormImagePicker />
      <FormInputText
        label="Link do Youtube"
        placeholder="Digite um link da receita no Youtube"
        {...register("link")}
        id="link"
      /> */}
    </>
  );
}
