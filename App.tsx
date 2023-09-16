import { GluestackUIProvider,config } from "@gluestack-ui/themed"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens here
import Home from "./Views/Home";
import KitchenSink from "./Views/KitchenSink";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* screens */}
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Kitchen" component={KitchenSink} />

          {/* end screens */}
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  )
}

