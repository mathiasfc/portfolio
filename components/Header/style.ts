import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;

  z-index: 3;
`;

export const HeaderInnerContainer = styled.div`
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OctoCatLink = styled.a`
  text-decoration: none;
  background-color: transparent;

  svg {
    fill: #fff;
    display: inline-block;
  }
`;
