import * as React from "react";

import TabNavigator from "./TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import SearchView from "../Views/SearchView";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
