import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  z-index: 1;
  padding: 1rem;
  width: 100%;
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
