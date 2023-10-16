import React from "react";
import { StyleSheet, View } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import HomePage from "../../Views/Home";
import ShopProfile from "../../Views/Shop";
import KitchenSink from "../../Views/KitchenSink";
import { Box } from "@gluestack-ui/themed";

import { Cart, Shop, Home } from "iconoir-react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case "Home":
      iconName = "home";
      break;
    case "Shop":
      iconName = "shop";
      break;
    case "Cart":
      iconName = "cart";
      break;
  }

  if (iconName === "home") {
    return <Home color={color} width={20} height={20} />;
  } else if (iconName === "shop") {
    return <Shop color={color} width={20} height={20} />;
  }
  return <Cart color={color} width={20} height={20} />;
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Shop" component={ShopProfile} />
      <Tab.Screen name="Cart" component={KitchenSink} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
