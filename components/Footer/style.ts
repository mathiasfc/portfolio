import { breakpoints } from "@/utils/breakpoints";
import styled, { css } from "styled-components";

export const FooterContainer = styled.footer`
  max-width: 1280px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;
  height: auto;
  position: absolute;
  bottom: 0px;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    font-size: 0.6rem;
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

    li {
      a {
        border-radius: 0.2rem;
        padding: 0.5rem;
        text-decoration: none;
        cursor: pointer;
        transition: color 0.3s, background-color 0.3s;
      }

      .a-blue {
        ${({ theme }) => css`
          color: ${theme.colors.blue};

          &:hover {
            color: ${theme.colors.black};
            background-color: ${theme.colors.blue};
          }
        `}
      }

      .a-orange {
        ${({ theme }) => css`
          color: ${theme.colors.orange};

          &:hover {
            color: ${theme.colors.black};
            background-color: ${theme.colors.orange};
          }
        `}
      }

      .a-purple {
        ${({ theme }) => css`
          color: ${theme.colors.purple};

          &:hover {
            color: ${theme.colors.black};
            background-color: ${theme.colors.purple};
          }
        `}
      }
    }
  }
`;

export const FooterCopyRight = styled.div`
  margin: 0.5rem;
  margin-left: 2rem;

  @media (max-width: ${breakpoints.sm}) {
    margin: 0.3rem;
  }
`;

export const HeartEmoji = styled.span`
  color: #4654a3;
  font-size: 1.5rem;
`;
