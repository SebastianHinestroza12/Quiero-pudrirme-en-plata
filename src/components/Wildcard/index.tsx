import React from "react";
import { WildcardUser } from "@/interfaces";
import { Box, Flex, Text } from "@chakra-ui/react";

export const WildCard = ({ name, urlIcon }: WildcardUser) => {
  return (
    <Flex
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"center"}
      margin={3}
    >
      <Box bg={"black"} borderRadius={90} p={3} cursor={"pointer"}>
        {urlIcon}
      </Box>
      <Text>{name}</Text>
    </Flex>
  );
};
