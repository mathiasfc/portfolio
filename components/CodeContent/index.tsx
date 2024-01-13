import React, { useState, useEffect } from "react";
import TypingAnimation from "@/components/TypingAnimation";
import * as s from "./style";

const FnContactMePlaceholder = () => (
  <>
    <p>
      <span className="span-code-blue">
        <i>function</i>
      </span>{" "}
      <span className="span-code-green">contactMe</span>(
      <span className="span-code-orange">
        <i>target</i>
      </span>
      <span> = </span>
      <span className="span-code-yellow">'me'</span>){" {"}
    </p>
    <p>
      <span className="span-code-pink">&nbsp;&nbsp;return</span>
      <span className="span-code-purple"> `Click here to contact </span>
      <span className="span-code-yellow">{"${"}</span>
      <span>target</span>
      <span className="span-code-yellow">{"}"}</span>
      <span className="span-code-purple">`</span>;
    </p>
    <p>{"}"}</p>
  </>
);

const CodeContent = () => {
  const [showContactMeButton, setShowContactMeButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContactMeButton(true);
    }, 3800);
  }, []);
  return (
    <s.CodeContentContainer>
      <TypingAnimation
        text={`// Hi there! I'm Mathias, \n // building the web one line at a time`}
      />

      <s.CodeBlock>
        {showContactMeButton && <FnContactMePlaceholder />}
      </s.CodeBlock>
    </s.CodeContentContainer>
  );
};

export default CodeContent;
