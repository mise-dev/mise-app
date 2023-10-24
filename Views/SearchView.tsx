import React, { useState } from "react";
import {
  Input,
  InputField,
  InputIcon,
  SearchIcon,
  FormControl,
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

const SearchView = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Input
        size={"lg"}
        variant={"outline"}
        isInvalid={false}
        isDisabled={false}
        w={"$full"}
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
    </>
  );
};

export default SearchView;
