import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "../../ui/Button";

export function StepButtons() {
  const [loading, setLoading] = useState(false);
  function handlePress() {
    setLoading(true);
    console.log("press");

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
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
        isLoading={loading}
        onPress={handlePress}
      />
      <Button title="Próximo" iconName="arrow-right" />
    </View>
  );
}
