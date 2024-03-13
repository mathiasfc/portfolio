import styled, { css } from "styled-components";

export const InnerErrorPageContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    a {
      color: ${theme.colors.text};
    }
  `}
`;
