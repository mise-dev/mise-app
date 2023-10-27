import React, { useState } from "react";
import {
  Input,
  InputField,
  InputIcon,
  SearchIcon,
  ArrowLeftIcon,
} from "@gluestack-ui/themed";

import { Icon } from "@gluestack-ui/themed";

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
const SearchView = ({ navigation }) => {
  const [value, setValue] = useState("");

  return (
    <Box bgColor="white" h={"$full"} p={"$4"}>
      <Center marginBottom={"$2"}>
        <HStack>
          <Button bgColor="white" onPress={() => navigation.goBack()}>
            <ArrowLeftIcon />
          </Button>
          <Input
            size={"lg"}
            variant={"outline"}
            isInvalid={false}
            isDisabled={false}
            w={"65%"}
            p={"$2"}
            borderRadius={"$full"}
          >
            <InputIcon pr="$4" h={"$4"} alignSelf="center">
              <Icon as={SearchIcon} />
            </InputIcon>
            <InputField
              onChange={(e: any) => {
                setValue(e.nativeEvent.text);
              }}
              value={value}
              placeholder="Enter Text here"
            />
          </Input>
          <Button bgColor="transparent">
            <ButtonText color="black">Search</ButtonText>
          </Button>
        </HStack>
      </Center>
      <Text marginTop={"$2"} color="grey">
        Popular Searches
      </Text>
      <HStack marginTop={"$2"}>
        <Button bgColor="#E5E4E2" borderRadius={"$full"} marginRight={"$2"}>
          <ButtonText fontWeight="thin" color="grey">
            barbie
          </ButtonText>
        </Button>
        <Button bgColor="#E5E4E2" borderRadius={"$full"} marginRight={"$2"}>
          <ButtonText fontWeight="thin" color="grey">
            durag
          </ButtonText>
        </Button>
      </HStack>

      <Text marginTop={"$2"} color="grey">
        Recent searches
      </Text>
      <HStack marginTop={"$2"}>
        <Button bgColor="#E5E4E2" borderRadius={"$full"} marginRight={"$2"}>
          <ButtonText fontWeight="thin" color="grey">
            compressor
          </ButtonText>
        </Button>
        <Button bgColor="#E5E4E2" borderRadius={"$full"} marginRight={"$2"}>
          <ButtonText fontWeight="thin" color="grey">
            toyCar
          </ButtonText>
        </Button>
      </HStack>
    </Box>
  );
};

export default SearchView;
