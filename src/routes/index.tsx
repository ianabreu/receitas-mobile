import React from "react";

import TabRoutes from "./tab.routes";
import { StatusBar } from "react-native";
import { useTheme } from "../theme/ThemeContext";

export default function Routes() {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.background}
        translucent={false}
        barStyle="dark-content"
        showHideTransition="slide"
      />
      <TabRoutes />
    </>
  );
}
