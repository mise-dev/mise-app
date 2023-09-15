import { GluestackUIProvider, Text, Box, config, Button, ToastDescription, ToastTitle } from "@gluestack-ui/themed"
import { Toast, useToast, VStack, ButtonText } from "@gluestack-ui/themed";
import Product from "./components/Product";

function Example() {
  const toast = useToast()
  return (
    <Button
      onPress={() => {
        toast.show({
          placement: "top",
          render: ({ id }) => {
            return (
              <Toast nativeId={id} action="attention" variant="solid">
                <VStack space="xs">
                  <ToastTitle>New Message</ToastTitle>
                  <ToastDescription>
                    Hey, just wanted to touch base and see how you're doing.
                    Let's catch up soon!
                  </ToastDescription>
                </VStack>
              </Toast>
            )
          },
        })
      }}
    >
      <ButtonText>Press Me</ButtonText>
    </Button>
  )
}

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <Box width="100%" height="100%" justifyContent="center" alignItems="center">
        <Text>Just another piece of text</Text>
        <Text>Open up App.js to start working on your app!</Text>
       <Example /> 
       <Product name="Sample" price={1000} description="Please buy this beautiful landscape picture I'm begging I'm poor." />
      </Box>
    </GluestackUIProvider>
  )
}