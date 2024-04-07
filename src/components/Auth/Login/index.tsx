"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { UserData } from "@/interfaces";
import Link from "next/link";
import { useChakraToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";
import { AuthNextGoogle } from "@/components/Auth/AuthNextGoogle";
import {
  Flex,
  FormErrorMessage,
  Box,
  FormControl,
  FormLabel,
  Divider,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  InputRightElement,
  InputGroup,
  Image,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "../../../util/axios";

export const LoginUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const showToast = useChakraToast();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const userData: UserData = values as UserData;
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const login = await axios.post("/auth/login", userData);
      const { userName } = login.data;

      if (login.status === 200) {
        showToast({
          title: "Inicio de sesión exitoso",
          description: `¡Bienvenido ${userName}! ¡Hora de pudrirte en plata!`,
          status: "success",
          duration: 4000,
          isClosable: false,
        });
        setTimeout(() => {
          router.push("/play_game");
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

      const { status } = error.response;

      if (status === 401) {
        showToast({
          title: "Error de inicio de sesión",
          description:
            "El email o la contraseña son incorrectos. Por favor, verifica tus credenciales e intenta de nuevo.",
          status: "error",
          duration: 7000,
        });
      } else if (status === 404) {
        showToast({
          title: "Usuario no registrado",
          description:
            "Lo sentimos, el usuario ingresado no está registrado. Por favor, crea una cuenta antes de intentar iniciar sesión.",
          status: "error",
          duration: 7000,
          isClosable: true,
        });
      } else if (status === 403) {
        //Cuenta Bloqueada Por Intentos Fallidos
        showToast({
          title: "Cuenta Bloqueada",
          description:
            "Tu cuenta ha sido bloqueada debido a varios intentos fallidos de inicio de sesión. Para desbloquearla y garantizar tu seguridad, te recomendamos cambiar tu contraseña.",
          status: "warning",
          duration: 15000,
        });
        //Redirigirlo para que verifique su identidad y cambie su contraseña
      } else {
        //Error del servidor
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
      <Box my={5}>
        <Image
          width={200}
          height={200}
          src={
            "https://res.cloudinary.com/dafsjo7al/image/upload/v1699408622/Screenshot_10_fpqnyo.png"
          }
          alt="Logo Quiero Pudrirme En Plata"
        />
      </Box>
      <Stack spacing={6} mx={"auto"} maxW={"lg"} py={4} px={6}>
        <Stack align={"center"}>
          <Heading textAlign={"center"} fontSize={"4xl"}>
            Iniciar sesión en su cuenta
          </Heading>
        </Stack>
        <Box rounded={"lg"} bg={"#0a0a0a"} boxShadow={"lg"} p={8}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel htmlFor="email">
                  Correo o nombre de usuario
                </FormLabel>
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
              <FormControl isInvalid={!!errors.password}>
                <FormLabel>Contraseña</FormLabel>
                <InputGroup>
                  <Input
                    id="password"
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
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  justify={"flex-end"}
                >
                  <Link href={"/auth/confirm-identity"}>
                    <Text>¿Has olvidado tu contraseña?</Text>
                  </Link>
                </Stack>
                <Button
                  bg={"black"}
                  color={"white"}
                  _hover={{
                    bg: "gray.900",
                  }}
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Iniciar sesión
                </Button>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  justify={"center"}
                >
                  <Link href={"/auth/register"}>
                    <Text>
                      ¿No tiene una cuenta? <Text as="b">Registrate</Text>
                    </Text>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </form>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Divider flex="1" />
          <Text px={2}>O</Text>
          <Divider flex="1" />
        </Box>
        <Box>
          <AuthNextGoogle />
        </Box>
      </Stack>
    </Flex>
  );
};
