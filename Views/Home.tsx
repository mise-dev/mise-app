import {
  Toast,
  useToast,
  VStack,
  ButtonText,
  Button,
  ToastDescription,
  Text,
  Box,
  ToastTitle,
} from "@gluestack-ui/themed";

import { useState, useContext } from "react";
import { MiseContext } from "../sdk";

import Product, {
  ProductNumbering,
  TextAndPrices,
  CatalogProduct,
  BuyProduct,
} from "../components/Product";
// import {textAndPrice} from "../components/Product";

export default function Home({ navigation }) {
  const [count, setCount] = useState(0);
  const mise = useContext(MiseContext);

  let styles: string[] = [
    "Sunset",
    "Moonlight",
    "Just another option so you can F yrself",
  ];

  return (
    <Box
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      bgColor="white"
    >
      {/* <Text>Just another piece of text</Text>
            <Text>Open up App.js to start working on your app!</Text>
        <Example />
        */}
      {/* <Button onPress={() => navigation.navigate("Kitchen")}>
        <ButtonText>Kitchen Sink</ButtonText>
      </Button> */}

      <BuyProduct
        name="Sunset Landscape"
        price={1000}
        variantType="Style"
        variance={styles}
      />
    </Box>
  );
}

function Example() {
  const toast = useToast();
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
            );
          },
        });
      }}
    >
      <ButtonText color="black">Press Me</ButtonText>
    </Button>
  );
}
