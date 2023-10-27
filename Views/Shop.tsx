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

const ShopProfile = ({ navigation }) => {
  return (
    <Box>
      <ScrollView width="100%" height="100%">
        <Box
          bgColor="white"
          borderRadius={"$lg"}
          margin={"$2"}
          paddingVertical={"$3"}
        >
          <HStack>
            <Avatar
              alignSelf="center"
              margin={"$3"}
              size={"md"}
              badge={true}
              uri={"https://broken.link"}
            >
              <AvatarFallbackText>Jesus</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://broken.link",
                }}
              />
              {true && <AvatarBadge />}
            </Avatar>

            <Box>
              <Text bold size="xl">
                Heavenly Express Shop
              </Text>
              <Text size="lg"> 10,000 Followers </Text>
              <Button borderRadius={"$lg"} bgColor="grey">
                <ButtonText>Following</ButtonText>
              </Button>
            </Box>
          </HStack>
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
      {/* will implement the tabs lateron */}

      {/* <Tabs value='tab1' >
      <Tabs.TabList>
          <Tabs.Tab value="tab2">
            <Tabs.TabTitle>
              Home
            </Tabs.TabTitle>
          </Tabs.Tab>

          <Tabs.Tab value="tab1">
            <Tabs.TabTitle>
              All
            </Tabs.TabTitle>
          </Tabs.Tab>
          <Tabs.Tab value="tab3">
            <Tabs.TabTitle>
              Shoes
            </Tabs.TabTitle>
          </Tabs.Tab>
      </Tabs.TabList>

      <Tabs.TabPanels>
        <Tabs.TabPanel value='tab1'>
        <ScrollView
      width="100%"
      height="100%"
      bgColor="white"
      
    >
    <Center>
    <HStack  display="flex" flexWrap="wrap">
      <Product
              price={1000}
              rating= {4.5}
              orders={200}
            />
    </HStack>
    </Center>
    </ScrollView>
        </Tabs.TabPanel>

        <Tabs.TabPanel value='tab2' >

        </Tabs.TabPanel>
        <Tabs.TabPanel value='tab3'>
          <Text> Some more content mfka</Text>
        </Tabs.TabPanel>

      </Tabs.TabPanels>

      </Tabs> */}
    </Box>
  );
};

export default ShopProfile;
