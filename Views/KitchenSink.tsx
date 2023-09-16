import React from "react";
import { View } from "react-native";
import { Button, Text, ButtonText, Box } from "@gluestack-ui/themed";

const KitchenSink = ({ navigation }) => {
    return (
        <Box>
            <Text>The KitchenSink</Text>
            <Button
                onPress={() => navigation.navigate("Home")}
            >
                <ButtonText>
                    Go Home
                </ButtonText>
            </Button>
        </Box>
    )
}

export default KitchenSink;