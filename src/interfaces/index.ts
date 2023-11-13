export interface UserData {
  email: string;
  password: string;
  userName?: string;
}

export type UserDataOptional = Partial<UserData>;

export type ToastOptions = {
  title: string;
  description: string;
  status: "success" | "error" | "warning" | "info";
  duration: number;
  isClosable?: boolean;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
};
