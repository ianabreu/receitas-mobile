import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

//Pages Components
import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";

//Theme
import { colors, fonts, metrics } from "../theme";

const { Screen, Navigator } = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Início":
              iconName = "home";
              break;
            case "Nova Receita":
              iconName = "plus-thick";
              break;
            case "Perfil":
              iconName = "account";
              break;
            default:
            case "Início":
              iconName = "home";
              break;
          }
          size = focused ? size * 1.1 : size;
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarActiveBackgroundColor: colors.background,
        tabBarInactiveBackgroundColor: colors.background,
        tabBarStyle: {
          borderWidth: 0,
          borderColor: colors.background,
          height: metrics.tabBarHeight,
        },
        tabBarLabelStyle: {
          fontSize: fonts.size.sm,
          fontFamily: fonts.family.regular,
        },
      })}
      initialRouteName="Início"
    >
      <Screen component={Home} name={"Início"} />
      <Screen component={New} name={"Nova Receita"} />
      <Screen component={Profile} name={"Perfil"} />
    </Navigator>
  );
}
