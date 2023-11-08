import { useToast } from "@chakra-ui/react";
import { ToastOptions } from "@/interfaces";

export const useChakraToast = () => {
  const toast = useToast();

  const showToast = (options: ToastOptions) => {
    toast({
      title: options.title,
      description: options.description,
      status: options.status,
      duration: options.duration,
      isClosable: options.isClosable || true,
      position: options.position || "top-right",
    });
  };

  return showToast;
};
