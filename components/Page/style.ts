import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const Main = styled.main`
  padding: 5rem 0rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`;

export const UniverseGlowEffect = styled.img`
  top: 50%;
  left: 50%;
  width: 200%;
  transform: translate(-50%, -50%) scaleX(-1);
  pointer-events: none;
  overflow: hidden;
  position: absolute;
  border-style: none;
  z-index: -1;
`;
