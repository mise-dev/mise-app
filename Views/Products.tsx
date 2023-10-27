import React, { useState } from "react";
import {
  Input,
  InputField,
  InputIcon,
  SearchIcon,
  FormControl,
} from "@gluestack-ui/themed";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";

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

// import React from 'react';import { Tabs, TabsTabList, TabsTab, TabsTabTitle, TabsTabPanels, TabsTabPanel } from '@gluestack-ui/themed';

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

// import { useState, useContext } from "react";
// import { MiseContext } from "../sdk";

import Product, {
  ProductNumbering,
  TextAndPrices,
  CatalogProduct,
  BuyProduct,
  ClickProduct,
} from "../components/Product";
import { useEffect } from "react";
import { Search } from "iconoir-react-native";
const Products = ({ navigation }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
          <HStack space="4xl">
            <Search
              color={"black"}
              width={20}
              height={20}
              onPress={() => navigation.navigate("Shop")}
            />
          </HStack>
        </>
      ),
    });
  }, [navigation]);
  return (
    <Box>
      <ScrollView width="100%" height="100%">
        <Box bgColor="white" borderRadius={"$lg"} margin={"$2"} padding={"$3"}>
          <Box
            w={"$full"}
            h={"$10"}
            borderColor="grey"
            paddingHorizontal={"$3"}
            borderRadius={"$full"}
            borderWidth={"$1"}
            onTouchStart={() => navigation.navigate("SearchView")}
          >
            <Box h={"$full"} display="flex" justifyContent="center">
              <HStack>
                <Icon pr={"$4"} as={SearchIcon} />
                <Text
                  marginLeft={"$4"}
                  display="flex"
                  fontSize={"$lg"}
                  justifyContent="center"
                  color="grey"
                >
                  Enter Text here
                </Text>
              </HStack>
            </Box>
          </Box>
        </Box>

        <Center>
          <HStack display="flex" flexWrap="wrap" justifyContent="center">
            {Array(8)
              .fill(0)
              .map((_) => (
                <Product
                  price={Math.floor(Math.random() * 10000)}
                  rating={Math.floor(Math.random() * 5)}
                  orders={Math.floor(Math.random() * 1000)}
                />
              ))}
          </HStack>
        </Center>
      </ScrollView>
    </Box>
  );
};

// Products.navigationOptions = ({ navigation }) => {
//   const { routeName } = navigation.state;
//   return {
//     headerShown: routeName === "Shop" ? false : true,
//   };
// };

export default Products;
