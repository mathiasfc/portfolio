import React, { useState, useEffect } from "react";
import * as s from "./style";

type TypingAnimationProps = {
  text: string;
  speed?: number;
};

const TypingAnimation = ({ text, speed = 50 }: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
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
