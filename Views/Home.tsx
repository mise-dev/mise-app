import {
  Avatar,
  AvatarGroup,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Icon,
  Heading,
} from "@gluestack-ui/themed";
import { User } from "lucide-react-native";
// import Shop from './Shop';
import React from "react";
import {
  Tabs,
  TabsTabList,
  TabsTab,
  TabsTabTitle,
  TabsTabPanels,
  TabsTabPanel,
} from "@gluestack-ui/themed";

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
  ScrollView,
  HStack,
  Center,
} from "@gluestack-ui/themed";

import { useState, useContext } from "react";
import { MiseContext } from "../sdk";

import Product, {
  ProductNumbering,
  TextAndPrices,
  CatalogProduct,
  BuyProduct,
  ClickProduct,
} from "../components/Product";
import { Shop } from "iconoir-react-native";
// import {textAndPrice} from "../components/Product";

export default function HomePage({ navigation }) {
  const [count, setCount] = useState(0);
  const mise = useContext(MiseContext);

  let styles: string[] = ["Sunset", "Moonlight", "Just another option"];

  return (
    <Button
      borderRadius={"$lg"}
      bgColor="grey"
      onPress={() => navigation.navigate("Products")}
    >
      <ButtonText>Product</ButtonText>
    </Button>
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
