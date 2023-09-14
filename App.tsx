import { GluestackUIProvider, Text, Box, config, Button, ToastDescription, ToastTitle } from "@gluestack-ui/themed"
import { Toast, useToast, VStack, ButtonText } from "@gluestack-ui/themed";

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
      <Box width="100%" justifyContent="center" alignItems="center">
        <Text>Open up App.js to start working on your app!</Text>
       <Example /> 
      </Box>
    </GluestackUIProvider>
  )
}