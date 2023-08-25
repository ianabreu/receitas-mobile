import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

//Pages Components
import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";
import { useTheme } from "../theme/ThemeContext";

const { Screen, Navigator } = createBottomTabNavigator();

export default function TabRoutes() {
  const { theme } = useTheme();

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
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textDark,
        tabBarActiveBackgroundColor: theme.colors.background,
        tabBarInactiveBackgroundColor: theme.colors.background,
        tabBarStyle: {
          borderTopWidth: 0,
          position: "absolute",
          bottom: 0,
          left: 0,
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
