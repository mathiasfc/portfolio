import styled, { css } from "styled-components";

export const InnerSocialPageContent = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;

  padding: 0px;
  margin-top: 20px;
`;

export const SocialNetworkItem = styled.li`
  ${({ theme }) => css`
    padding: 5px 0px;

    svg {
      height: 20px;
      width: 20px;
      fill: ${theme.colors.text};
      margin-right: 15px;
      transition: fill 0.3s;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: ${theme.colors.text};
    }

    :hover {
      svg {
        fill: ${theme.colors.blue};
      }
    }
  `}
`;
