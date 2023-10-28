import { GluestackUIProvider, config } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HStack, Text } from "@gluestack-ui/themed";
import {
  ProfileCircle,
  Cart,
  Shop,
  ShareAndroid,
  Search,
} from "iconoir-react-native";
import { useNavigation } from "@react-navigation/native";
// mise context
import SdkProvider from "./sdk";
// const navigation = useNavigation();
// import screens here
import SignUpPage from "./Views/SignUp";
import LogInPage from "./Views/LogIn";

import { StatusBar } from "react-native";
import TabNavigator from "./navigation/TabNavigator";

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
        <Cart color={"black"} width={20} height={20} />
      </HStack>
    </>
  ),
};

const shopheaderOptions = {
  headerRight: () => (
    <>
      <HStack space="4xl">
        <Search color={"black"} width={20} height={20} />
        <Cart color={"black"} width={20} height={20} />
        <ShareAndroid color={"black"} width={20} height={20} />
      </HStack>
    </>
  ),
};

const productheaderOptions = {
  headerRight: () => (
    <>
      <HStack space="4xl">
        <Search color={"black"} width={20} height={20} />
      </HStack>
    </>
  ),
};

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <SdkProvider>
        <StatusBar hidden />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Signup" component={SignUpPage} />
            <Stack.Screen name="Login" component={LogInPage} />
            <Stack.Screen
              name="Main"
              component={TabNavigator}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SdkProvider>
    </GluestackUIProvider>
  );
}
