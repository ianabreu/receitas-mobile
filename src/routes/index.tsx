import React from "react";

import TabRoutes from "./tab.routes";
import { SafeAreaView, StatusBar } from "react-native";
import { colors } from "../theme";
export default function Routes() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar
        backgroundColor={colors.background}
        translucent={false}
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <TabRoutes />
    </SafeAreaView>
  );
}
