"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Link from "next/link";

export const SignupCard = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"#000"}
      flexDirection={"column"}
    >
      <Box>
        <Image
          width={200}
          height={180}
          src={
            "https://res.cloudinary.com/dafsjo7al/image/upload/v1699109179/Screenshot_12_htxljm.png"
          }
          alt="Logo Quiero Pudrirme En Plata"
        />
      </Box>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Registrate
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Para disfrutar de todas nuestras funciones interesantes ✌️
          </Text>
        </Stack>
        <Box rounded={"lg"} bg={"#0a0a0a"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Nombre de usuario</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Correo electronico</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Contraseña</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"black"}
                color={"white"}
                _hover={{
                  bg: "gray.900",
                }}
              >
                Registrarme
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                ¿Ya eres usuario?{" "}
                <Link href={"/"} color={"blue.400"}>
                  <Text as="b"> Inicia sesión</Text>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
