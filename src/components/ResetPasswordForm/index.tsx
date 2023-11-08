"use client";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export const ResetPasswordForm = () => {
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
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Ingrese nueva clave
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"#000"}
            color={"white"}
            _hover={{
              bg: "gray.900",
            }}
          >
            Restablecer
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};
