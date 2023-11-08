"use client";

import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export const SendCodeToEmail = () => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#000"}>
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={"#0a0a0a"}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading
          fontWeight={"bold"}
          lineHeight={1.1}
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          ¿Olvidaste tu contraseña?
        </Heading>
        <Text fontSize={{ base: "sm", sm: "md" }} color={"#FFF"}>
          Recibirás un correo electrónico con un codigo para verificar tu
          identidad.
        </Text>
        <FormControl id="email">
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"#000"}
            color={"white"}
            _hover={{
              bg: "gray.900",
            }}
          >
            Solicitar codigo
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};
