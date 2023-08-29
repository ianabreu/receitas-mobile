import React from "react";
import { Text, TextInput } from "react-native";
import { TextLogo } from "../../components/ui/TextLogo";
import { Container } from "../../components/layout/Container";
import { styles } from "./styles";
export default function Home(): React.JSX.Element {
  return (
    <Container>
      <TextLogo>Cantinho das Receitas</TextLogo>
      <Text style={styles.title}>Encontre a receita que combina com você</Text>
      <TextInput />
    </Container>
  );
}
