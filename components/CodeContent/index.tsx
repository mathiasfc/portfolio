import React, { useState, useEffect } from "react";
import TypingAnimation from "@/components/TypingAnimation";
import * as s from "./style";

const CodeContent = () => {
  return (
    <s.CodeContentContainer>
      <TypingAnimation text={`Welcome to my portfolio! \n Let's start`} />
    </s.CodeContentContainer>
  );
};

export default CodeContent;
