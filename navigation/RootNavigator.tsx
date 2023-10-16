import * as React from "react";

import TabNavigator from "./TabNavigator";
import { NavigationContainer } from "@react-navigation/native";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
