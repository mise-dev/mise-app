import { GluestackUIProvider, config } from "@gluestack-ui/themed"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HStack, Text } from "@gluestack-ui/themed";
import { ProfileCircle, Cart } from "iconoir-react-native";

// import screens here
import Home from "./Views/Home";
import KitchenSink from "./Views/KitchenSink";

const Stack = createNativeStackNavigator();

// configuring the header
const headerOptions = {
  headerLeft: ({ children }) => <Text bold color="black">{children}</Text>,
  headerRight: () => (
    <>
      <HStack space="4xl">
        <ProfileCircle color={"black"} width={30} height={30} />
        <Cart color={"black"} width={30} height={30} />
      </HStack>
    </>
  )
};

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* screens */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={headerOptions}
          />
          <Stack.Screen name="Kitchen" component={KitchenSink} />

          {/* end screens */}
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  )
}

