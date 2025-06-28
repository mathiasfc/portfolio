import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  user-select: none; /* Prevent text selection during drag */
`;

export const CarouselViewport = styled.div`
  overflow: hidden;
  width: 100%;
  touch-action: pan-x; /* Allow only horizontal scrolling on mobile */
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  /* Visual feedback during wheel gestures */
  &.is-wheel-dragging {
    cursor: grabbing;

    * {
      pointer-events: none; /* Prevent accidental clicks during wheel scrolling */
    }
  }
`;

export const CarouselInner = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px 0;
  margin: 0px 20px;

  @media (max-width: ${breakpoints.sm}) {
    gap: 20px;
  }
`;

export const CarouselSlide = styled.div`
  flex: 0 0 auto;
  min-width: 0;

  > div {
    width: 350px;
    max-width: 90vw;
    height: 480px;

    @media (max-width: ${breakpoints.sm}) {
      width: 280px;
      max-width: 80vw;
      height: 450px;
    }

    @media (min-width: ${breakpoints.xl}) {
      height: 550px;
    }
  }
`;
