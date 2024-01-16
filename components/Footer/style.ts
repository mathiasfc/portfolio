import { breakpoints } from "@/utils/breakpoints";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  max-width: 1280px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  position: absolute;
  bottom: 0px;
  padding: 0 1rem;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    font-size: 0.6rem;
    height: auto;
    margin-bottom: 0.5rem;
  }
`;

export const FooterNavigation = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
`;

export const FooterCopyRight = styled.div`
  margin: 0 0.5rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 170px;

  @media (max-width: ${breakpoints.sm}) {
    width: 160px;
    margin: 0.3rem;
    margin-top: 1rem;
  }
`;

export const OctoCatLink = styled.a`
  text-decoration: none;
  background-color: transparent;

  svg {
    fill: #fff;
    display: inline-block;
  }
`;

export const HeartEmoji = styled.span`
  color: #4654a3;
  font-size: 1rem;
`;
