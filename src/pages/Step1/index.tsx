import React from "react";
import { View, Image, ScrollView } from "react-native";

import { Container } from "../../components/layout/Container";
import { Typography } from "../../components/ui/Typography";
import { FormInputText } from "../../components/patterns/FormInputText";
import { FormPickerSelect } from "../../components/patterns/FormPickerSelect";

import { metrics } from "../../theme";
import { FormImagePicker } from "../../components/patterns/FormImagePicker";
import { StepButtons } from "../../components/patterns/StepButtons";

export interface ICategory {
  id: string;
  name: string;
}
export default function Step1() {
  const categories: ICategory[] = [
    { id: "0", name: "Macarrão" },
    { id: "1", name: "Sorvetes" },
    { id: "4", name: "Massas" },
  ];
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Typography content="Nova Receita" variant="title" allign="center" />
        <Typography content="Passo 1 de 4" variant="body" allign="center" />
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
        <FormInputText label="Título" placeholder="Digite um título" />
        <FormInputText label="Descrição" placeholder="Digite uma descrição" />
        <FormPickerSelect categories={categories} label="Categoria" />
        <FormImagePicker />
        <FormInputText
          label="Link do Youtube"
          placeholder="Digite um link da receita no Youtube"
        />
        <StepButtons />
      </ScrollView>
    </Container>
  );
}
