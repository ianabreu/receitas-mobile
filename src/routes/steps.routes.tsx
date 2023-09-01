import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages
import Step1 from "../pages/Step1";
import Step2 from "../pages/Step2";
import Step3 from "../pages/Step3";
import Step4 from "../pages/Step4";

const { Navigator, Screen } = createNativeStackNavigator();
const headerOptions = { headerShown: false };
export default function StepRoutes() {
  return (
    <Navigator initialRouteName="Step1">
      <Screen name="Step1" component={Step1} options={headerOptions} />

      <Screen name="Step2" component={Step2} options={headerOptions} />

      <Screen name="Step3" component={Step3} options={headerOptions} />

      <Screen name="Step4" component={Step4} options={headerOptions} />
    </Navigator>
  );
}
