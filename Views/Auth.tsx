import React from "react";
import { Box, Input, InputField, Center, Text } from "@gluestack-ui/themed";
import TextButton from "../components/Button";

function Auth() {
    return (
        <Box backgroundColor="white" height="$full">
            <Center>
                <Text marginTop="$2" size="2xl" bold>
                    Log In
                </Text>
                <Input w={"$72"} marginVertical="$4" variant="outline" size="md">
                    <InputField placeholder="Username" />
                </Input>
                <Input w={"$72"} marginVertical="$4" variant="outline" size="md">
                    <InputField type="password" placeholder="Password" />
                </Input>

                <TextButton>
                    Join
                </TextButton>
            </Center>
        </Box>
    )
}

export default Auth;