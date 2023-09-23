import React, { useRef, useEffect } from "react";
import { StyleSheet } from "react-native";
import { View, Box, Image, Text, HStack, styled, Center, Icon, StarIcon, VStack, Button, ButtonText, Divider } from "@gluestack-ui/themed";
import { Cart, Star } from "iconoir-react-native";

type ProductProps = {
    name: string,
    price: number,
    description: string // a short description of the product
}

const styles = StyleSheet.create({
    image: {
        backgroundColor: "$yellow100",
        padding: "auto",
    }
});

const StyledImage = styled(Image, styles.image);

const Product: React.FC<ProductProps> = ({name, description, price}) => {
    return (
        <Box p="$3" margin="$2" w="$48" borderWidth="$2" borderColor="$blueGray300" borderRadius="$xl">
            <Center>
                <StyledImage
                    w={180}
                    h={180}
                    borderRadius="$md"
                    source={{
                        uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    }}
                />
            </Center>

            <VStack marginTop="$2" width="$full" >
                <HStack space="$4xl" w="$full" alignItems="center">
                    <Text color="black" bold w="$32" size="lg">
                        {name}
                    </Text>

                    <Button bgColor="transparent" width={36}>

                        <Star color={"black"} width={24} height={24} />
                    </Button>
                </HStack>

                <Text marginTop="$1" maxHeight={80} w="$full" size="sm">
                    {description.length > 45 ? description.slice(0, 45) + "..." : description}
                </Text>

                <HStack marginTop="$2" w="$full" space="4xl" alignItems="center">
                    <Text color="black" bold size="xl">
                        {price.toLocaleString()} XAF
                    </Text>
                    <Button width={34} height={35} bgColor="#ffda00">
                        <Cart color={"white"} height={20} width={20} />
                    </Button>
                </HStack>

            </VStack>
        </Box>
    )
}


const ProductNumbering =() => {
    const [number, setNumber] = React.useState(1);
    
    function change(a, b){
        if (a===1 && b===-1){
            return 1;
        }
        else {
            setNumber(a+b)
            return a;
        }
    }
    return (
        <HStack height={"$5"}>
        <Button onPress={() => change(number,-1)}  paddingHorizontal={"$0"}  width={20} height={"$5"} flexDirection="column" justifyContent="center" bgColor="transparent" borderWidth={"$2"} borderColor="black" borderRadius={5} >
        <ButtonText color="black" size="lg" h={"$20"} justifyContent="center" paddingBottom={"$1"} bold>
                -
            </ButtonText>
        </Button>
        <Text color="black" w="$10" size="lg" lineHeight={20} textAlign="center" >
            {number}
        </Text>
        <Button onPress={() => change(number,1)}  paddingHorizontal={"$0"}  width={20} height={"$5"} flexDirection="column" justifyContent="center" bgColor="transparent" borderWidth={"$2"} borderColor="black" borderRadius={5} >
            <ButtonText color="black" size="lg" h={"$20"} justifyContent="center" paddingBottom={"$1"}  bold>
                +
            </ButtonText>
        </Button>
        </HStack>
    )
}

let name="";
let price=0;

const TextAndPrices: React.FC<ProductProps> = ({name, price}) => {
return(
    
        <HStack marginBottom={"$4"}>

            <Text color="black" w="$48" textAlign="left" size="lg">
                {name}
            </Text>

            <Text color="black" w="$48" textAlign="right" bold size="xl">
                {price.toLocaleString()} XAF                
            </Text>


        </HStack>

    )
}

const CatalogProduct: React.FC<ProductProps> = ({name, price, description}) => {
    return(
        
            <HStack marginTop="$4" w="$full" space="4xl">
            
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
                    {description.length > 45 ? description.slice(0, 45) + "..." : description}
                </Text>
                
                    <Text color="black" bold size="xl">
                        {price.toLocaleString()} XAF
                    </Text>
                
                <Box marginBottom={"$2"} position="absolute" bottom={0}>
                    <ProductNumbering />
                </Box>
            </VStack>
            </HStack>
    
    )
}

 

const BuyProduct: React.FC<ProductProps> = ({name, price, description}) => {
    return(
        
            <VStack  paddingLeft={"$5"} paddingRight={"$5"} marginTop="$4" w="$full" space="4xl">
            
            <Center>

            <Text color="black" bold size="2xl">
                        {name}
            </Text>

            <Text color="black" bold size="xl">
                        {price.toLocaleString()} XAF
            </Text>

            </Center>
            <Center >
                <StyledImage
                    w={"$full"}
                    h={340}
                    borderRadius="$xl"
                    source={{
                        uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                    }}
                />
            </Center>



                <Text marginBottom="$2" maxHeight={80} w="$full" size="sm">
                    {description.length > 45 ? description.slice(0, 45) + "..." : description}
                </Text>
                

                
                <Box marginBottom={"$2"} position="absolute" bottom={0}>
                </Box>
            </VStack>
    
    )
}

export default Product;
export {ProductNumbering};
export {TextAndPrices};
export {CatalogProduct};
export {BuyProduct};
