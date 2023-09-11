import React, { useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { useForm } from "react-hook-form";

import { Container } from "../../components/layout/Container";
import { Typography } from "../../components/ui/Typography";

import { metrics } from "../../theme";
import { Button } from "../../components/ui/Button";
import { ControlledTextInput } from "../../components/patterns/ControlledTextInput";
import { ImagePickerInput } from "../../components/ui/ImagePickerInput";
import { ControlledSelectInput } from "../../components/patterns/ControlledSelectInput";
import { FormActions, useFormStep } from "../../contexts/FormContext";
export interface ICategory {
  id: string;
  name: string;
}

export default function New() {
  const { control, handleSubmit } = useForm();
  const { state, dispatch } = useFormStep();
  const [image, setImage] = useState<string | null>(null);
  const categories: ICategory[] = [
    { id: "0", name: "Macarrão" },
    { id: "1", name: "Sorvetes" },
    { id: "4", name: "Massas" },
  ];
  function onSubmitStep(data) {
    let dataFull = {
      cover: image,
      ...data,
    };
    dispatch({
      type: FormActions.setTitle,
      payload: data.title,
    });
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
    console.log(dataFull);
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Typography content="Nova Receita" variant="title" allign="center" />
        <Typography
          content={`Passo ${state.currentStep} ${state.title} de 4`}
          variant="body"
          allign="center"
        />
        <View
          style={{
            flexDirection: "row",
            width: "70%",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "center",
            margin: metrics.margin_large,
          }}
        >
          <Image source={require("../../assets/images/StepOne.png")} />
          <Image source={require("../../assets/images/StepTwo.png")} />
          <Image source={require("../../assets/images/StepThree.png")} />
          <Image source={require("../../assets/images/StepFour.png")} />
        </View>
        <Typography
          content="Informações Básicas"
          variant="title"
          allign="center"
        />
        <ControlledTextInput
          control={control}
          rules={{ required: true }}
          name="title"
          label="Título"
          placeholder="Digite um título"
        />
        <ControlledTextInput
          control={control}
          defaultValue={""}
          rules={{ required: true }}
          name="description"
          label="Descrição"
          placeholder="Digite uma descrição"
        />
        <ControlledSelectInput
          control={control}
          name="category"
          label="Categoria"
          options={categories}
        />
        <ImagePickerInput
          label="Capa"
          placeholder="Escolha uma imagem"
          imageURL={image}
          setImageURL={setImage}
        />
        <ControlledTextInput
          control={control}
          rules={{ required: true }}
          name="link"
          label="Link do Youtube"
          placeholder="Digite um link da receita no Youtube"
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 16,
          }}
        >
          <Button
            title="Anterior"
            iconName="arrow-left"
            isLoading={false}
            onPress={handleSubmit(onSubmitStep)}
          />
          <Button
            title="Próximo"
            iconName="arrow-right"
            onPress={handleSubmit(onSubmitStep)}
          />
        </View>
      </ScrollView>
    </Container>
  );
}
