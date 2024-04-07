"use client";

import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Box } from "@chakra-ui/react";
import "./time.scss";

const RenderTime = ({ remainingTime }: any) => {
  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [oneLastRerender, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <Box className="time-wrapper">
      <Box key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
        {remainingTime}
      </Box>
      {prevTime.current !== null && (
        <Box
          key={prevTime.current}
          className={`time ${!isTimeUp ? "down" : ""}`}
        >
          {prevTime.current}
        </Box>
      )}
    </Box>
  );
};

export function TimeQuestion() {
  return (
    <Box margin={3} className="timer-wrapper">
      <CountdownCircleTimer
        isPlaying
        size={120}
        duration={30}
        colors={["#F7B801", "#ff0000"]}
        colorsTime={[10, 0]}
        strokeWidth={14}
        strokeLinecap={"butt"}
        onComplete={() => {
          return { shouldRepeat: true, delay: 1.5 };
        }}
      >
        {RenderTime}
      </CountdownCircleTimer>
    </Box>
  );
}
