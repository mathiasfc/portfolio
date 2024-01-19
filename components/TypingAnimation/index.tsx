import React, { useState, useEffect } from "react";
import * as s from "./style";

type TypingAnimationProps = {
  text: string;
  speed?: number;
};

/**
 * The `TypingAnimation` component creates a typing animation effect by gradually revealing
 * the characters of the provided text. It supports custom speed settings for controlling the
 * pace of the animation.
 */
const TypingAnimation = ({ text, speed = 50 }: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    // Function to animate typing by gradually revealing characters.
    const typeText = async () => {
      for (let i = 0; i <= text.length; i++) {
        setDisplayedText(text.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    };

    typeText();
  }, [text, speed]);

  return (
    <s.TypingAnimationContainer>
      <span>{displayedText}</span>
      <s.TypingAnimationCursor>|</s.TypingAnimationCursor>
    </s.TypingAnimationContainer>
  );
};

export default TypingAnimation;
