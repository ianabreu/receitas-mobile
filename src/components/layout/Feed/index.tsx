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
};
export function Feed({ data }: ListRecipesProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <FeedItem item={item} />}
    />
  );
}
