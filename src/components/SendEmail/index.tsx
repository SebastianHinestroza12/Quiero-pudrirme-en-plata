"use client";

import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { UserDataOptional } from "@/interfaces";
import axios from "@/util/axios";
import { useChakraToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";

export const SendCodeToEmail = () => {
  const showToast = useChakraToast();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  type Email = {
    email: string;
  };

  const sendEmail: SubmitHandler<FieldValues> = async (value) => {
    const data = value as Email;

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const sendCode = await axios.post("/generate-verification-code", data);

      if (sendCode.status === 200) {
        localStorage.setItem("email", data.email.toLowerCase());
        router.push("/auth/verify-code");
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

      if (status === 404) {
        showToast({
          title: "Error",
          description:
            "No se pudo encontrar un usuario con ese correo electrónico.",
          status: "error",
          duration: 6000,
          isClosable: true,
        });
      } else if (status === 500 && data.error.include("sending")) {
        showToast({
          title: "Error",
          description:
            "Hubo un problema al enviar el código al correo electrónico.",
          status: "error",
          duration: 6000,
          isClosable: true,
        });
      } else {
        showToast({
          title: "Error del Servidor",
          description: "Por favor, inténtalo de nuevo más tarde.",
          status: "error",
          duration: 6000,
        });
      }
    }
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#000"}>
      <form onSubmit={handleSubmit(sendEmail)}>
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
          <FormControl isInvalid={!!errors.email}>
            <Input
              id="email"
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              {...register("email", {
                required: "Email es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "No es un correo electrónico válido",
                },
              })}
            />
          </FormControl>
          <FormErrorMessage>
            {errors.email && typeof errors.email.message === "string" ? (
              <span>{errors.email.message}</span>
            ) : null}
          </FormErrorMessage>
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
              Solicitar codigo
            </Button>
          </Stack>
        </Stack>
      </form>
    </Flex>
  );
};
