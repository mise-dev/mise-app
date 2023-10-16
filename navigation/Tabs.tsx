import React from "react";
import { StyleSheet, View } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import Home from "../Views/Home";
import ShopProfile from "../Views/Shop";
import KitchenSink from "../Views/KitchenSink";
import { Box } from "@gluestack-ui/themed";

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#000" }}
    style={{ backgroundColor: "#fff" }}
    alignSelf="flex-end"
  />
);

const TabApp = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home" },
    { key: "shop", title: "Shop" },
    { key: "cart", title: "Cart" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "home":
        return <Home />;
      case "shop":
        return <ShopProfile />;
      case "cart":
        return <KitchenSink />;
      default:
        return null;
    }
  };

  return (
    <Box flex={1} flexDirection="column" justifyContent="space-between">
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </Box>
  );
};

export default TabApp;
