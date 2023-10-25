import React from "react";
import { StyleSheet, View } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import Home from "../Views/Home";
import ShopProfile from "../Views/Shop";
import KitchenSink from "../Views/KitchenSink";
import { Box } from "@gluestack-ui/themed";

// const renderTabBar = (props) => (
//   <TabBar
//     {...props}
//     indicatorStyle={{ backgroundColor: "#000" }}
//     style={{ backgroundColor: "#fff" }}
//     alignSelf="flex-end"
//   />
// );

// const TabApp = () => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: "home", title: "Home" },
//     { key: "shop", title: "Shop" },
//     { key: "cart", title: "Cart" },
//   ]);

//   const renderScene = ({ route }) => {
//     switch (route.key) {
//       case "home":
//         return <Home />;
//       case "shop":
//         return <ShopProfile />;
//       case "cart":
//         return <KitchenSink />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Box flex={1} flexDirection="column" justifyContent="space-between">
//       <TabView
//         navigationState={{ index, routes }}
//         renderScene={renderScene}
//         onIndexChange={setIndex}
//         renderTabBar={renderTabBar}
//       />
//     </Box>
//   );
// };

// export default TabApp;

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("./home_active.png")
                    : require("./home_inactive.png")
                }
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("./shop_active.png")
                    : require("./shop_inactive.png")
                }
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cartr"
          component={CartrScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("./cart_active.png")
                    : require("./cart_inactive.png")
                }
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
