import React from "react";

import TabRoutes from "./tab.routes";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { colors } from "../theme";
export default function Routes() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar
        backgroundColor={colors.background}
        translucent={false}
        hidden={false}
      />
      <TabRoutes />
    </SafeAreaView>
  );
}
