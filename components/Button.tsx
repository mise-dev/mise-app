import React from "react";
import { Button, ButtonText, Center } from "@gluestack-ui/themed";

// defaault mise button will contain text
const TextButton = ({ children }) => {
  return (
    <Button
      w={"$72"}
      marginVertical="$4"
      borderWidth={"$2"}
      borderColor="blackblack"
      backgroundColor="gold"
    >
      <ButtonText color="black">{children}</ButtonText>
    </Button>
  );
};

export default TextButton;
