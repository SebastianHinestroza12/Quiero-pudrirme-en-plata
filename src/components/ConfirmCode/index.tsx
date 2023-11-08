"use client";

import {
  Button,
  FormControl,
  Flex,
  Stack,
  useColorModeValue,
  HStack,
  PinInput,
  PinInputField,
  Center,
  Heading,
} from "@chakra-ui/react";

export const ConfirmCode = () => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#000"}>
      <Stack
        spacing={4}
        w={"full"}
        maxW={"sm"}
        bg={"#0a0a0a"}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={10}
      >
        <Center>
          <Heading
            fontWeight={"bold"}
            lineHeight={1.1}
            fontSize={{ base: "2xl", md: "3xl" }}
          >
            Verifica tu correo electrónico
          </Heading>
        </Center>
        <Center fontSize={{ base: "sm", sm: "md" }} color={"#FFF"}>
          Hemos enviado el código a tu correo electrónico.
        </Center>
        <Center
          fontSize={{ base: "sm", sm: "md" }}
          fontWeight="bold"
          color={"#FFF"}
        >
          username@mail.com
        </Center>
        <FormControl>
          <Center>
            <HStack>
              <PinInput>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"#000"}
            color={"white"}
            _hover={{
              bg: "gray.900",
            }}
          >
            Verificar
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};
