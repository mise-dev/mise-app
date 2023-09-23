import React from "react";
import { View } from "react-native";
import {
  Button,
  Text,
  ButtonText,
  Box,
  VStack,
  Divider,
} from "@gluestack-ui/themed";

import { ScrollView } from "react-native";

import { TextAndPrices, CatalogProduct } from "../components/Product";

const KitchenSink = ({ navigation }) => {
  return (
    <Box flex={1} p={"$3"} paddingBottom={"$5"}>
      <ScrollView p="$4">
        <CatalogProduct
          name="Beautiful landscape photo"
          price={1000}
          description="Sunset"
        />
        <CatalogProduct name="Magic Clip" price={35000} description="Gold" />
        <CatalogProduct
          name="Beautiful landscape photo"
          price={1000}
          description="Sunset"
        />
        <CatalogProduct
          name="Beautiful landscape photo"
          price={1000}
          description="Sunset"
        />
        <CatalogProduct
          name="Beautiful landscape photo"
          price={1000}
          description="Sunset"
        />
        <CatalogProduct
          name="Beautiful landscape photo"
          price={1000}
          description="Sunset"
        />
        <CatalogProduct
          name="Beautiful landscape photo"
          price={1000}
          description="Sunset"
        />
        {/* position="absolute" bottom={0} */}
      </ScrollView>
      <Box h={"$15"} paddingTop={"$5"}>
        <TextAndPrices name="Sub Total" price={1000} />
        <TextAndPrices name="Shipping" price={50} />
        <Divider my="$0.5" marginBottom={"$4"} />
        <TextAndPrices name="Total" price={1050} />

        <Button bgColor="black" borderRadius={"$2xl"}>
          <ButtonText color="white">Checkout</ButtonText>
        </Button>
      </Box>
    </Box>
  );
};

export default KitchenSink;
