import {
  Box,
  Button,
  ButtonText,
  Center,
  Divider,
  HStack,
  Icon,
  Image,
  StarIcon,
  styled,
  Text,
  View,
  VStack,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { Cart, Star } from "iconoir-react-native";
import React, { useEffect, useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { useContext, useReducer, useState } from "react";
import { MiseContext } from "../sdk";

type ProductProps = {
  name: string;
  price: number;
  description: string; // a short description of the product
  variantType: string;
  variance: string[];
  rating: number;
  orders: number;
};

const styles = StyleSheet.create({
  image: {
    backgroundColor: "$yellow100",
    padding: "auto",
  },
});

const StyledImage = styled(Image, styles.image);

const Product: React.FC<ProductProps> = ({ orders, rating, price }) => {
  
  
  const generateStars = () => {
    const listStars=[]
    for (let index = 1; index <= 5; index++) {

        if (index <=rating){
          listStars.push(
            <Star  fill={"gold"} color={"black"} width={15} height={15}/>
          )
        }
        else{
          listStars.push(
            <Star color={"black"} width={15} height={15}/>
          )
        }
        
      }
      return listStars;
    }
  
  return (
    <Box
      // p="$3"
      // marginRight="$1"
      // marginBottom="$1"
      w="50%"
      borderWidth="$2"
      borderColor="$blueGray300"
      borderRadius="$xl"
    >
      {/* <Center> */}
        <StyledImage
          w={"$full"}
          h={180}
          borderRadius={"$xl"}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          source={{
            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
        />
      {/* </Center> */}

      <VStack padding="$1" width="$full">
        <HStack space="$4xl" w="$full" alignItems="center">
          <Text color="black" bold size="xl">
            {price.toLocaleString()} XAF
          </Text>

          <Button bgColor="transparent" width={36}>
          </Button>
        </HStack>

        <Text marginTop="$1" maxHeight={80} w="$full" size="sm">
          {orders} orders
        </Text>

        <HStack marginTop="$2" w={"$full"} display="flex" alignItems="center"  >
          
          {generateStars()}
          <Text color="black" w={"30%"}  bold size="lg">
              {rating}
          </Text>

            <Button  bgColor="#ffda00" w={10} height={30} flex={1} >
              <Cart color={"white"} height={20} width={20}  />
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

const ProductNumbering = () => {
  const [number, setNumber] = React.useState(1);

  function change(a, b) {
    if (a === 1 && b === -1) {
      return 1;
    } else {
      setNumber(a + b);
      return a;
    }
  }
  return (
    <HStack height={"$5"}>
      <Button
        onPress={() => change(number, -1)}
        paddingHorizontal={"$0"}
        width={20}
        height={"$5"}
        flexDirection="column"
        justifyContent="center"
        bgColor="transparent"
        borderWidth={"$2"}
        borderColor="black"
        borderRadius={5}
      >
        <ButtonText color="black" size="lg" h={30} justifyContent="center" bold>
          -
        </ButtonText>
      </Button>
      <Text color="black" w="$10" size="lg" lineHeight={20} textAlign="center">
        {number}
      </Text>
      <Button
        onPress={() => change(number, 1)}
        paddingHorizontal={"$0"}
        width={20}
        height={"$5"}
        flexDirection="column"
        justifyContent="center"
        bgColor="transparent"
        borderWidth={"$2"}
        borderColor="black"
        borderRadius={5}
      >
        <ButtonText color="black" size="lg" h={30} justifyContent="center" bold>
          +
        </ButtonText>
      </Button>
    </HStack>
  );
};

const TextAndPrices: React.FC<ProductProps> = ({ name, price }) => {
  return (
    <HStack marginBottom={"$4"}>
      <Text color="black" w="$48" textAlign="left" size="lg">
        {name}
      </Text>

      <Text color="black" w="$48" textAlign="right" bold size="xl">
        {price.toLocaleString()} XAF
      </Text>
    </HStack>
  );
};

const CatalogProduct: React.FC<ProductProps> = ({
  name,
  price,
  description,
}) => {
  return (
    <HStack marginTop="$4" w="$full" space="4xl" bgColor="white">
      <Box marginRight={"$2"} borderRadius="$xl">
        <StyledImage
          w={180}
          h={180}
          borderRadius="$xl"
          source={{
            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
        />
      </Box>

      <VStack width="$full" align>
        <HStack space="$4xl" w="$full" alignItems="center">
          <Text color="black" bold w="$40" h={"$20"} size="lg">
            {name}
          </Text>
        </HStack>

        <Text marginBottom="$2" maxHeight={80} w="$full" size="sm">
          {description.length > 45
            ? description.slice(0, 45) + "..."
            : description}
        </Text>

        <Text color="black" bold size="xl">
          {price.toLocaleString()} XAF
        </Text>

        <Box marginBottom={"$2"} position="absolute" bottom={0}>
          <ProductNumbering />
        </Box>
      </VStack>
    </HStack>
  );
};

// const initialState = {
//     button1: "gold",
//     button2: "transparent",
// };

const BuyProduct: React.FC<ProductProps> = ({
  name,
  price,
  variantType,
  variance,
}) => {
  const navigation = useNavigation();

  const { data, dispatch } = useContext(MiseContext);
  // create the key for the currently selected variant
  console.log(data.currentVariant);

  // const [activeVariant, setActiveVariant] = useState<string>("");

  const listVariance = variance.map((variant) => {
    let isActive: boolean = variant === data.currentVariant;
    return (
      <Button
        borderRadius={"$2xl"}
        borderColor={isActive ? "white" : "grey"}
        borderWidth={"$1"}
        marginRight={"$5"}
        marginTop={"$5"}
        bgColor={isActive ? "gold" : "transparent"}
        key={variant}
        onPress={() => {
          //setActiveVariant(variant);
          dispatch({ type: "add_key", key: "currentVariant", value: variant });
        }}
      >
        <ButtonText color={isActive ? "white" : "black"}>{variant}</ButtonText>
      </Button>
    );
  });

  return (
    <Box
      flex={1}
      paddingLeft={"$5"}
      paddingRight={"$5"}
      marginTop="$2"
      w="$full"
    >
      <ScrollView>
        <VStack>
          <Text color="black" bold size="2xl">
            {name}
          </Text>
          <Center>
            <StyledImage
              w={"$full"}
              h={340}
              borderRadius="$xl"
              marginTop="$5"
              source={{
                uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              }}
            />
          </Center>

          <Text bold color="black" marginTop="$5">
            Select {variantType}
          </Text>
          <HStack display="flex" flexWrap="wrap">
            {listVariance}
          </HStack>
        </VStack>
      </ScrollView>
      <HStack w={"$full"} h={"$24"} bottom={0}>
        <Text
          w={"50%"}
          h={"$16"}
          paddingBottom={"$4"}
          paddingTop={"$4"}
          color="black"
          bold
          size="2xl"
        >
          {price.toLocaleString()} XAF
        </Text>

        <Button
          onPress={() => navigation.navigate("Kitchen")}
          w={"50%"}
          h={"$16"}
          bgColor="black"
          borderRadius={"$2xl"}
        >
          <ButtonText color="white">Add to Cart</ButtonText>
        </Button>
      </HStack>
    </Box>
  );
};

const ClickProduct: React.FC<ProductProps> = ({
  price,
  orders,
  rating,
}) => {

  return(
    <HStack width={"50%"} margin={"$1"} h={400} flex={1} display="flex" flexWrap="wrap">
      <Box width={"50%"} margin={"$1"} h={400} flex={1} borderWidth={"$1"}>
        <StyledImage
          w={"$full"}
          h={200}
          borderTopLeftRadius={"$xl"}
          borderTopRightRadius={"$xl"}
          source={{
            uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
        />

        <Text>
          {price} XAF
        </Text>

        <Text>
          {orders} orders
        </Text>
          <Text>
            {rating}
          </Text>
      </Box>
    </HStack>
  )

}

export default Product;
export { ProductNumbering };
export { TextAndPrices };
export { CatalogProduct };
export { BuyProduct };
export { ClickProduct };
