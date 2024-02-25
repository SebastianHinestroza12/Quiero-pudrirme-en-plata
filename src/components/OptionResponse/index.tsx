import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export const OptionResponse = (props: any) => {
  return (
    <Flex>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Text color={"orange"} fontWeight={"bold"} fontSize={20}>
          {props.letter}:
        </Text>
        <Text marginLeft={3}>{props.option}</Text>
      </Box>
    </Flex>
  );
};
