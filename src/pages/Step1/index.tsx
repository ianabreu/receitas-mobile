import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { Typography } from "../../components/ui/Typography";
import { Container } from "../../components/layout/Container";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { metrics } from "../../theme";
import { Input } from "../../components/ui/Input";
import { FormInputText } from "../../components/patterns/FormInputText";
export default function Step1() {
  return (
    <Container>
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
      <FormInputText
        label="Link do Youtube"
        placeholder="Digite um link da receita no Youtube"
      />
    </Container>
  );
}
