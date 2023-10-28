import { User } from "lucide-react-native";
// import Shop from './Shop';
import React from "react";
import {
    VStack,
    Button,
    ButtonText,
    Text,
    Box,
    Center,
    InputField,
    Input,
    FormControl,
    FormControlLabel,
    FormControlLabelText,
    Heading
} from "@gluestack-ui/themed";

import { useState, useContext } from "react";
import { MiseContext } from "../sdk";

export default function LogInPage({ navigation }) {
    const [count, setCount] = useState(0);
    const mise = useContext(MiseContext);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <Box h="$full" w="$full">
            <Box marginTop="$12">
                <Center>
                    <Heading>Baskket</Heading>
                </Center>
            </Box>
            <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false} >
                <VStack width={"$full"} space="md" justifyContent="center">
                    <Center>
                        <Box>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Username</FormControlLabelText>
                            </FormControlLabel>
                            <Input width={"$72"} >
                                <InputField
                                    value={name}
                                    onChangeText={newText => setName(newText)}
                                    type="text"
                                    placeholder="Kyle Reese"
                                />
                            </Input>
                        </Box>
                    </Center>
                    <Center>
                        <Box>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Email</FormControlLabelText>
                            </FormControlLabel>
                            <Input width={"$72"}>
                                <InputField
                                    value={email}
                                    onChangeText={newEmail => setEmail(newEmail)}
                                    type="email"
                                    placeholder="email"
                                />
                            </Input>
                        </Box></Center>
                    <Center>
                        <Box>
                            <FormControlLabel mb='$1'>
                                <FormControlLabelText>Password</FormControlLabelText>
                            </FormControlLabel>
                            <Input width={"$72"}>
                                <InputField
                                    value={password}
                                    onChangeText={newPassword => setPassword(newPassword)}
                                    type="password"
                                    placeholder="password"
                                />
                            </Input>
                        </Box>
                    </Center>
                </VStack>
            </FormControl>

            <Center>
                <Button marginTop="$5" width={"$72"} onPress={async () => {
                    // will provide the info
                    const result = await mise.sdk.createUser(name, email, password);
                    if (result.success) {
                        console.log("this was a success");
                    } else console.log("it failed 🫨");
                }}>
                    <ButtonText>
                        Sign Up
                    </ButtonText>
                </Button>
            </Center>
        </Box>
    );
}

