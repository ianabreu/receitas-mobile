import React from "react";
import { TextLogo } from "../../components/ui/TextLogo";
import { Container } from "../../components/layout/Container";
import { Input } from "../../components/ui/Input";
import { Typography } from "../../components/ui/Typography";
import { Feed, Recipe } from "../../components/layout/Feed";
export default function Home(): React.JSX.Element {
  const data: Recipe[] = [
    {
      id: "1",
      name: "Pizza Mussarela com brocolis e azeitona",
      timeToPrepare: 50,
      ingredientsAmount: 1,
      imageURL:
        "https://static.itdg.com.br/images/1200-630/71c9dc733ee596adffbece6b0e5b063a/receitas-com-3-ingredientes.jpg",
    },
    {
      id: "2",
      name: "Bife à Parmergiana",
      timeToPrepare: 30,
      ingredientsAmount: 7,
      imageURL:
        "https://static.itdg.com.br/images/1200-630/71c9dc733ee596adffbece6b0e5b063a/receitas-com-3-ingredientes.jpg",
    },
    {
      id: "3",
      name: "Arroz Tropeiro",
      timeToPrepare: 45,
      ingredientsAmount: 6,
      imageURL:
        "https://static.itdg.com.br/images/1200-630/71c9dc733ee596adffbece6b0e5b063a/receitas-com-3-ingredientes.jpg",
    },
    {
      id: "4",
      name: "Pizza de Alho",
      timeToPrepare: 50,
      ingredientsAmount: 9,
      imageURL:
        "https://static.itdg.com.br/images/1200-630/71c9dc733ee596adffbece6b0e5b063a/receitas-com-3-ingredientes.jpg",
    },
    {
      id: "5",
      name: "Pizza de Alho",
      timeToPrepare: 50,
      ingredientsAmount: 9,
      imageURL:
        "https://static.itdg.com.br/images/1200-630/71c9dc733ee596adffbece6b0e5b063a/receitas-com-3-ingredientes.jpg",
    },
    {
      id: "6",
      name: "Pizza de Alho",
      timeToPrepare: 50,
      ingredientsAmount: 9,
      imageURL:
        "https://static.itdg.com.br/images/1200-630/71c9dc733ee596adffbece6b0e5b063a/receitas-com-3-ingredientes.jpg",
    },
    {
      id: "7",
      name: "Pizza de Alho",
      timeToPrepare: 50,
      ingredientsAmount: 9,
      imageURL:
        "https://static.itdg.com.br/images/1200-630/71c9dc733ee596adffbece6b0e5b063a/receitas-com-3-ingredientes.jpg",
    },
    {
      id: "8",
      name: "Pizza de Alho",
      timeToPrepare: 50,
      ingredientsAmount: 9,
      imageURL:
        "https://static.itdg.com.br/images/1200-630/71c9dc733ee596adffbece6b0e5b063a/receitas-com-3-ingredientes.jpg",
    },
  ];
  function openDetails(id_recipe: string) {
    alert(id_recipe);
  }
  return (
    <Container>
      <TextLogo>Cantinho das Receitas</TextLogo>

      <Typography
        content="Encontre a receita que combina com você"
        variant="largestTitle"
      />

      <Input placeholder="Digite o nome da receita." icon="magnify" />
      <Feed handleOpenDetails={openDetails} data={data} />
    </Container>
  );
}
