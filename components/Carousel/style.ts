import styled from "styled-components";

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
  margin-left: -20px;

  @media (max-width: 768px) {
    gap: 20px;
    margin-left: -10px;
  }
`;

export const CarouselSlide = styled.div`
  flex: 0 0 auto;
  min-width: 0;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 10px;
  }

  /* Ensure project cards maintain their width and consistent height */
  > div {
    width: 350px;
    max-width: 90vw;
    height: 550px; /* Fixed height for consistency */
  }

  @media (max-width: 768px) {
    > div {
      width: 300px;
      max-width: 85vw;
      height: 480px; /* Reduced height for mobile */
    }
  }

  @media (max-width: 480px) {
    > div {
      width: 280px;
      max-width: 80vw;
      height: 450px; /* Even smaller for small screens */
    }
  }
`;
