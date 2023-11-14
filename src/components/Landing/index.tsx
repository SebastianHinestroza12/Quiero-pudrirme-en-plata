"use client";

import React from "react";
import { Flex, Box, Image, Stack, Text } from "@chakra-ui/react";
import styles from "@/components/Landing/landing.module.scss";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const Landing = () => {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bgGradient="linear(to-br, #000, #000048)"
      flexDirection={"column"}
    >
      <Stack
        spacing={4}
        mx={"auto"}
        maxW={"md"}
        bg={"#000"}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Box
          rounded={"xl"}
          bgGradient="linear(to-br, #000, #000048)"
          className={styles.logo}
          p={5}
        >
          <Image
            width={210}
            height={210}
            src={
              "https://res.cloudinary.com/dafsjo7al/image/upload/v1699925163/Screenshot_8_fjwndc-fotor-20231113202510_jocgvh.png"
            }
            alt="Logo Quiero Pudrirme En Plata"
          />
        </Box>
        <Box>
          <Text
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={22}
            textTransform={"capitalize"}
          >
            ¿quién quiere pudrirse en plata?
          </Text>
        </Box>

        <Link href={"/auth/login"}>
          <Box
            bg={"#84B200"}
            rounded={"xl"}
            p={2}
            className={styles.container_play}
          >
            <Icon
              className={styles.icon_play}
              icon="carbon:play-filled"
              color="white"
              width="32"
            />

            <Text
              fontWeight={"bold"}
              textAlign={"center"}
              textTransform={"uppercase"}
            >
              juega ahora
            </Text>
          </Box>
        </Link>
      </Stack>
      {/* <Box mb={20}>
        <Image
          src={
            "https://res.cloudinary.com/dafsjo7al/image/upload/v1699408622/Screenshot_10_fpqnyo.png"
          }
          alt="Logo Quiero Pudrirme En Plata"
        />
      </Box> */}
    </Flex>
  );
};
