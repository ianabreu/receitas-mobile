import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Routes from "./src/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Merienda-Bold": require("./src/assets/fonts/Merienda-Bold.ttf"),
    "Merriweather-Bold": require("./src/assets/fonts/Merriweather-Bold.ttf"),
    "Merriweather-Regular": require("./src/assets/fonts/Merriweather-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  onLayoutRootView();

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
