import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Routes from "./src/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Ubuntu-Bold": require("./src/assets/fonts/ubuntuBold.ttf"),
    "Ubuntu-Regular": require("./src/assets/fonts/ubuntuRegular.ttf"),
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
