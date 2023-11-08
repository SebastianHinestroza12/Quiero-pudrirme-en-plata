export type UserData = {
  email: string;
  password: string;
};

export type ToastOptions = {
  title: string;
  description: string;
  status: "success" | "error" | "warning" | "info";
  duration: number;
  isClosable?: boolean;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
};
