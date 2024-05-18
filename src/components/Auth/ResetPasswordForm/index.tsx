"use client";

import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
  Box,
  Image,
} from "@chakra-ui/react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { UserDataOptional } from "@/interfaces";
import axios from "@/config/axios";
import { useChakraToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";

export const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const email = localStorage.getItem("email")?.toString();
  const showToast = useChakraToast();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const toastError = () => {
    return showToast({
      title: "Error del Servidor",
      description: "Por favor, inténtalo de nuevo más tarde.",
      status: "error",
      duration: 7000,
    });
  };

  const handleRecoverPassword: SubmitHandler<FieldValues> = async (value) => {
    const data = value as UserDataOptional;

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const recoverPassword = await axios.put("/auth/recover-password", {
        email,
        newPassword: data.password,
      });

      if (recoverPassword.status === 200) {
        showToast({
          title: "Contraseña cambiada",
          description: "Tu contraseña ha sido cambiada exitosamente.",
          status: "success",
          duration: 4000,
          isClosable: false,
        });

        setTimeout(() => {
          router.push("/auth/login");
        }, 4000);
      }
    } catch (error: any) {
      error && toastError();
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
      <form onSubmit={handleSubmit(handleRecoverPassword)}>
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
            <FormLabel>Correo Electronico</FormLabel>
            <Input
              placeholder={email}
              disabled
              color={"#FFF"}
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <FormControl isInvalid={!!errors.password} isRequired>
            <FormLabel>Contraseña</FormLabel>
            <InputGroup>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Contraseña es requerida",
                  minLength: {
                    value: 8,
                    message: "La contraseña debe tener al menos 8 caracteres",
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
          <Stack spacing={6}>
            <Button
              bg={"#000"}
              color={"white"}
              _hover={{
                bg: "gray.900",
              }}
              isLoading={isSubmitting}
              type="submit"
            >
              Restablecer
            </Button>
          </Stack>
        </Stack>
      </form>
    </Flex>
  );
};
