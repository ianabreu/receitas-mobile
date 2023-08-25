import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "./src/theme/ThemeContext";
import Routes from "./src/routes";

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
