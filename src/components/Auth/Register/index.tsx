"use client";

import { useState } from "react";
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
  FormErrorMessage,
} from "@chakra-ui/react";
import { useChakraToast } from "@/hooks/useToast";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import { UserDataOptional } from "@/interfaces/index";
import Link from "next/link";
import axios from "@/util/axios";

export const SignupCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const showToast = useChakraToast();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleRegister: SubmitHandler<FieldValues> = async (values) => {
    const data = values as UserDataOptional;
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const createdUser = await axios.post("/auth/register", data);

      if (createdUser.status === 201) {
        showToast({
          title: "Registro exitoso",
          description: `¡Bienvenido ${data.userName}! ¡Por favor, inicia sesión!`,
          status: "success",
          duration: 4000,
          isClosable: false,
        });
        setTimeout(() => {
          router.push("/auth/login");
        }, 4000);
      }
    } catch (error: any) {
      //Servidor Apagado

      if (error.code === "ERR_NETWORK") {
        return showToast({
          title: "Error del Servidor",
          description: "Por favor, inténtalo de nuevo más tarde.",
          status: "error",
          duration: 7000,
        });
      }

      const { status, data } = error.response;

      if (status === 409 && data.error.includes("username")) {
        showToast({
          title: "Error de registro",
          description:
            "Este nombre de usuario ya está registrado. Por favor, utiliza otro nombre.",
          status: "error",
          duration: 7000,
        });
      } else if (status === 409 && data.error.includes("email")) {
        showToast({
          title: "Error de registro",
          description:
            "Este correo electrónico ya está registrado. Por favor, utiliza otro correo electrónico.",
          status: "error",
          duration: 7000,
        });
      } else {
        showToast({
          title: "Error del Servidor",
          description: "Por favor, inténtalo de nuevo más tarde.",
          status: "error",
          duration: 7000,
        });
      }
    }
  };

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
          height={200}
          src={
            "https://res.cloudinary.com/dafsjo7al/image/upload/v1699408622/Screenshot_10_fpqnyo.png"
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
          <form onSubmit={handleSubmit(handleRegister)}>
            <Stack spacing={4}>
              <FormControl isInvalid={!!errors.userName} id="email" isRequired>
                <FormLabel>Nombre de usuario</FormLabel>
                <Input
                  type="text"
                  id="userName"
                  {...register("userName", {
                    required: "Nombre de usuario es obligatorio",
                    minLength: {
                      value: 3,
                      message: "Minimo 3 caracteres",
                    },
                    maxLength: {
                      value: 20,
                      message: "Maximo 3 caracteres",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.userName &&
                  typeof errors.userName.message === "string" ? (
                    <span>{errors.userName.message}</span>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email} id="email" isRequired>
                <FormLabel>Correo electronico</FormLabel>
                <Input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "No es un correo electrónico válido",
                    },
                  })}
                />

                <FormErrorMessage>
                  {errors.email && typeof errors.email.message === "string" ? (
                    <span>{errors.email.message}</span>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!errors.password}
                id="password"
                isRequired
              >
                <FormLabel>Contraseña</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Contraseña es requerida",
                      minLength: {
                        value: 8,
                        message:
                          "La contraseña debe tener al menos 8 caracteres",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                        message:
                          "La contraseña debe contener al menos 1 mayúscula, 1 minúscula, 1 número y 1 caracter especial",
                      },
                    })}
                  />
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
                <FormErrorMessage>
                  {errors.password &&
                  typeof errors.password.message === "string" ? (
                    <span>{errors.password.message}</span>
                  ) : null}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  isLoading={isSubmitting}
                  size="lg"
                  type="submit"
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
                  <Link href={"/auth/login"} color={"blue.400"}>
                    <Text as="b"> Inicia sesión</Text>
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
