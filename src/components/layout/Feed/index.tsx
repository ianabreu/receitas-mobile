import React from "react";
import { FlatList } from "react-native";
import { FeedItem } from "../Recipe";

export interface Recipe {
  id: string;
  name: string;
  timeToPrepare: number;
  ingredientsAmount: number;
  imageURL: string;
}
type ListRecipesProps = {
  data: Recipe[];
  handleOpenDetails: (id_recipe: string) => void;
};
export function Feed({ data, handleOpenDetails }: ListRecipesProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <FeedItem onPress={handleOpenDetails} item={item} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}
