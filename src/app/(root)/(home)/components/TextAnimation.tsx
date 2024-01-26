"use client"
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Deepanshu Agarwal",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "a Full Stack  Web Developer",
        3000,
      ]}
      wrapper="span"
      speed={{ type: "keyStrokeDelayInMs", value: 100 }}
      style={{ fontSize: "2rem", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TextAnimation;
