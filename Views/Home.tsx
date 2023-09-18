import { Toast, useToast, VStack, ButtonText, Button, ToastDescription, Text, Box, ToastTitle } from "@gluestack-ui/themed";
import Product, {ProductNumbering}from "../components/Product";
import { useState, useContext } from "react";
import { MiseContext } from "../sdk";
export default function Home({ navigation }) {
    const [count, setCount] = useState(0);
    const mise = useContext(MiseContext);

    return (
        <Box width="100%" height="100%" justifyContent="center" alignItems="center">
            <Text>Just another piece of text</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Example />
            <Text onPress={() => setCount(count+1)}> {count} </Text>
            <Button bgColor="gold" borderColor="black" borderWidth={2.5} borderRadius={8} onPress={() => navigation.navigate("Kitchen")}>
                <ButtonText color="black">
                    Kitchen Sink
                </ButtonText>
            </Button>
            <Product name="Sample" price={1000} description="Please buy this beautiful landscape picture I'm begging I'm poor." />
        </Box>
    )
}

function Example() {
    const toast = useToast()
    return (
        <Button
            bgColor="gold"
            borderColor="black"
            borderWidth={2.5}
            borderRadius={8}
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
            <ButtonText color="black">Press Me</ButtonText>
        </Button>
    )
}

