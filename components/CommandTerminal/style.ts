import { breakpoints } from "@/utils/breakpoints";
import styled, { css } from "styled-components";

export const CommandTerminalContainer = styled.div`
  margin: 1.5rem;
  word-wrap: break-word;
  width: 100%;
  line-height: 2rem;

  min-width: 320px;
  max-width: 654px;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`;

export const CommandTerminalHeader = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.575rem;
    border-top-right-radius: 0.575rem;
    background: #14141499;
    height: 45px;
    text-align: center;
    color: ${theme.colors.white};

    span {
      font-size: 0.8rem;
      letter-spacing: 2px;
    }

    a {
      color: ${theme.colors.white};
      text-decoration: none;
    }
  `}
`;

export const CommandTerminalBody = styled.div`
  background-color: #0c162d;
  padding: 1.5rem;
  border-bottom-left-radius: 0.575rem;
  border-bottom-right-radius: 0.575rem;
  min-height: 300px;
  max-height: 300px;
  overflow-y: scroll;

  @media (min-width: ${breakpoints.lg}) {
    min-height: 380px;
    overflow: hidden;
  }
`;

export const CodeBlock = styled.div`
  ${({ theme }) => css`
    width: auto;
    margin-top: 1rem;

    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      display: inline-block;
    }

    p {
      margin: 0px;
    }

    .span-code-blue {
      color: ${theme.colors.blue};
    }

    .span-code-orange {
      color: ${theme.colors.orange};
    }

    .span-code-purple {
      color: ${theme.colors.purple};
    }

    .span-code-green {
      color: ${theme.colors.green};
      transition: color 0.3s, background-color 0.3s;
      border-radius: 0.2rem;

      &:hover {
        color: ${theme.colors.black};
        background-color: ${theme.colors.green};
      }
    }

    .span-code-yellow {
      color: ${theme.colors.yellow};
    }

    .span-code-pink {
      color: ${theme.colors.pink};
    }
  `}
`;
