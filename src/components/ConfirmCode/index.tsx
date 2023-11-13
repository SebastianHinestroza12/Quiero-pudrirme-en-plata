"use client";

import {
  Button,
  FormControl,
  Flex,
  Stack,
  HStack,
  PinInput,
  PinInputField,
  Center,
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import axios from "@/util/axios";
import { useChakraToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";

type NumberCode = {
  email: string;
  codeConfirm: any;
};

export const ConfirmCode = () => {
  const userEmail = localStorage.getItem("email");
  const router = useRouter();
  const showToast = useChakraToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const confirmCode: SubmitHandler<FieldValues> = async (values) => {
    const data = values as NumberCode;
    const confirmationCode = Number(data.codeConfirm.join(""));

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const sendCode = await axios.post("/code-confirm", {
        email: userEmail,
        codeConfirm: confirmationCode,
      });

      if (sendCode.status === 200) {
        showToast({
          title: "Verificación exitosa",
          description:
            "Tu identidad ha sido verificada correctamente. Puedes cambiar tu contraseña ahora.",
          status: "success",
          duration: 4000,
          isClosable: false,
        });

        //Redirigimos Para que cambie su contraseña
        setTimeout(() => {
          router.push("/auth/recover-password");
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

      if (status === 401 || status === 404) {
        showToast({
          title: "Error",
          description: "El código de verificación ingresado es incorrecto.",
          status: "error",
          duration: 7000,
          isClosable: true,
        });
      }
      if (status === 500) {
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
      <form onSubmit={handleSubmit(confirmCode)}>
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
            {userEmail}
          </Center>
          <FormControl isInvalid={!!errors.codeConfirm}>
            <Center>
              <HStack>
                <PinInput>
                  {[1, 2, 3, 4].map((index) => (
                    <PinInputField
                      key={index}
                      {...register(`codeConfirm.${index}`, {
                        required: "Código es requerido",
                      })}
                    />
                  ))}
                </PinInput>
              </HStack>
            </Center>
          </FormControl>

          <FormErrorMessage>
            {errors.codeConfirm &&
            typeof errors.codeConfirm.message === "string" ? (
              <span>{errors.codeConfirm.message}</span>
            ) : null}
          </FormErrorMessage>
          <Stack spacing={6}>
            <Button
              isLoading={isSubmitting}
              bg={"#000"}
              color={"white"}
              _hover={{
                bg: "gray.900",
              }}
              type="submit"
            >
              Verificar
            </Button>
          </Stack>
        </Stack>
      </form>
    </Flex>
  );
};
