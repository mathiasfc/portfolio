import { breakpoints } from "@/utils/breakpoints";
import styled, { css } from "styled-components";

export const CodeContentContainer = styled.div`
  border: 1px solid #202637;
  background-color: #0c162d;
  padding: 1.5rem;
  margin: 1.5rem;
  border-radius: 0.375rem;
  word-wrap: break-word;
  max-width: 654px;
  min-height: 82px;
  width: 100%;
  line-height: 2rem;
  min-width: 320px;

  @media (max-width: ${breakpoints.sm}) {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`;

export const CodeBlock = styled.div`
  ${({ theme }) => css`
    margin-top: 1rem;
    cursor: pointer;

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
