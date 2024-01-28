import { breakpoints } from "@/utils/breakpoints";
import styled, { keyframes } from "styled-components";

export const TypingAnimationContainer = styled.div`
  position: relative;

  span {
    white-space: pre-line;
    opacity: 0.8;
    font-size: 1rem;

    @media (max-width: ${breakpoints.sm}) {
      font-size: 0.9rem;
      line-height: 1.5rem;
    }
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
