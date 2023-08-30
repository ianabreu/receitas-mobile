import React from "react";
import { ImageBackground, TouchableWithoutFeedback } from "react-native";
import { Typography } from "../../ui/Typography";
import { Recipe } from "../Feed";

type RecipeProps = {
  item: Recipe;
};
export function FeedItem({ item }: RecipeProps) {
  return (
    <TouchableWithoutFeedback>
      <ImageBackground
        style={{ width: "100%", height: 200 }}
        source={{ uri: item.imageURL }}
      >
        <Typography variant="button" content={item.name} />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
