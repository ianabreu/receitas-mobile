import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// import { HomeRoutes, SearchRoutes, FavoriteRoutes } from "./stack.routes";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import New from "../pages/New";

const { Screen, Navigator } = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "SignIn") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "SignUp") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Home") {
            iconName = focused ? "heart" : "heart-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#31D618",
        tabBarInactiveTintColor: "#007319",
        tabBarActiveBackgroundColor: "rgba(16,18,16,0.9)",
        tabBarInactiveBackgroundColor: "rgba(16,18,16,0.9)",
        tabBarStyle: {
          borderTopWidth: 0,
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundColor: "transparent",
        },
      })}
      initialRouteName="SignIn"
    >
      <Screen component={SignIn} name={"SignIn"} />
      <Screen component={SignUp} name={"SignUp"} />
      <Screen component={Home} name={"Home"} />
    </Navigator>
  );
}
