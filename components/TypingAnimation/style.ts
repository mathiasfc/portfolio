import styled, { keyframes } from "styled-components";

export const TypingAnimationContainer = styled.div`
  span {
    white-space: pre-line;
    font-size: 1rem;
  }
`;

const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const TypingAnimationCursor = styled.span`
  position: absolute;
  opacity: 1;
  animation: ${blinkAnimation} 0.4s infinite alternate;
`;
