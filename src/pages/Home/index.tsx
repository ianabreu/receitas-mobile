import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../../theme/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.background }}>
      <Text style={{ color: theme.colors.textDark }}>Home</Text>
      <TouchableOpacity style={{ backgroundColor: theme.colors.primary }}>
        <Text style={{ color: theme.colors.textDark }}>Clique aqui</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
