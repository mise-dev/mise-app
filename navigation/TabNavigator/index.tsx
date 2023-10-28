import React from "react";
import HomePage from "../../Views/Home";
import ShopProfile from "../../Views/Shop";
import KitchenSink from "../../Views/KitchenSink";

import { Cart, Shop, Home } from "iconoir-react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Products from "../../Views/Products";
import SearchView from "../../Views/SearchView";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case "Explore":
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

const Something = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
        headerShown: false,
      })}
    >
      <Tab.Screen name="Explore" component={Products} />
      <Tab.Screen name="Shop" component={ShopProfile} />
      <Tab.Screen name="Cart" component={KitchenSink} />
    </Tab.Navigator>
  );
};

function TabNavigator(navigation) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Something}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SearchView" component={SearchView} />
    </Stack.Navigator>
  );
}

export default TabNavigator;
