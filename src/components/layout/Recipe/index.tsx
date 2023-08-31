import React from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Typography } from "../../ui/Typography";
import { Recipe } from "../Feed";
import { metrics } from "../../../theme";

type RecipeProps = {
  item: Recipe;
  onPress: (id_recipe: string) => void;
};
export function FeedItem({ item, onPress }: RecipeProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress(item.id)}
      style={{
        width: metrics.screenWidth - metrics.padding_large * 2,
        aspectRatio: 16 / 9,
        borderRadius: metrics.radius_default,
        overflow: "hidden",
        marginVertical: metrics.margin_default,
      }}
    >
      <ImageBackground
        style={{
          borderTopStartRadius: metrics.radius_large,
          flex: 1,
        }}
        source={{ uri: item.imageURL }}
      >
        <LinearGradient
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            padding: metrics.padding_large,
            // paddingBottom: metrics.padding_default,
          }}
          colors={["transparent", "rgba(16,16,16,0.8)"]}
        >
          <Typography
            numberOfLines={2}
            allign="center"
            variant="button"
            content={item.name}
          />
          <Typography
            variant="small"
            allign="center"
            content={`${item.ingredientsAmount} ingrediente${
              item.ingredientsAmount > 1 ? "s" : ""
            } | ${item.timeToPrepare} minutos`}
          />
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
