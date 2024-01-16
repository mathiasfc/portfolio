import { breakpoints } from "@/utils/breakpoints";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;

  padding: 1rem;
  height: 40px;
  z-index: 3;

  font-size: 0.8rem;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    font-size: 0.6rem;
  }
`;

export const HeaderInnerContainer = styled.div`
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  border: 1px solid red;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: flex-start;

  @media (max-width: ${breakpoints.sm}) {
    justify-content: center;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
`;
