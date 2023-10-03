import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HStack, Text } from "@gluestack-ui/themed";
import { ProfileCircle, Cart, Shop, ShareAndroid, Search } from "iconoir-react-native";
import { useNavigation } from "@react-navigation/native";
// mise context
import SdkProvider from "./sdk";
// const navigation = useNavigation();
// import screens here
import Home from "./Views/Home";
import KitchenSink from "./Views/KitchenSink";
import ShopProfile from "./Views/Shop";

const Stack = createNativeStackNavigator();
// configuring the header
const headerOptions = {
  headerLeft: ({ children }) => (
    <Text bold color="black">
      {children}
    </Text>
  ),
  headerRight: () => (
    <>
      <HStack space="4xl">
        <ProfileCircle color={"black"} width={20} height={20} />
        <Cart color={"black"} width={20} height={20}  />
      </HStack>
    </>
  ),
};

const shopheaderOptions = {
  headerRight: () => (
    <>
      <HStack space="4xl">
        <Search color={"black"} width={20} height={20} />
        <Cart color={"black"} width={20} height={20}  />
        <ShareAndroid color={"black"} width={20} height={20} />
      </HStack>
    </>
  ),
};

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <SdkProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* screens */}
            <Stack.Screen
              name="Home"
              component={Home}
              options={headerOptions}
            />
            <Stack.Screen name="Kitchen" component={KitchenSink} />

            <Stack.Screen options={shopheaderOptions} name="Shop" component={ShopProfile} />

            {/* end screens */}
          </Stack.Navigator>
        </NavigationContainer>
      </SdkProvider>
    </GluestackUIProvider>
  );
}
