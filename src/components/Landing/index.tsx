"use client";

import React, { useEffect } from "react";
import { Flex, Box, Image } from "@chakra-ui/react";
import styles from "@/components/Landing/loader.module.scss";
import { useRouter } from "next/navigation";

export const Landing = () => {
  const router = useRouter();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      router.push("/auth/login");
    }, 8800);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"#000"}
      flexDirection={"column"}
    >
      <Box mb={20}>
        <Image
          src={
            "https://res.cloudinary.com/dafsjo7al/image/upload/v1699408622/Screenshot_10_fpqnyo.png"
          }
          alt="Logo Quiero Pudrirme En Plata"
        />
      </Box>
      <Box className={styles.loader}></Box>
    </Flex>
  );
};
