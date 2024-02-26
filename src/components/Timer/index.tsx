"use client";

import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Box } from "@chakra-ui/react";

export const Timer = () => {
  return (
    <Box>
      <CountdownCircleTimer
        isPlaying
        size={120}
        duration={30}
        colors={["#F7B801", "#A30000"]}
        colorsTime={[30, 10]}
        strokeWidth={14}
        strokeLinecap={"butt"}
        onComplete={() => {
          return { shouldRepeat: true, delay: 1.5 };
        }}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </Box>
  );
};
