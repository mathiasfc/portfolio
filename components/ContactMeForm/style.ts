import { breakpoints } from "@/utils/breakpoints";
import styled, { css } from "styled-components";

export const ContactMeFormContainer = styled.div``;

export const LabelContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 1rem;

    label {
      font-weight: bold;
      color: ${theme.colors.blue};
    }
  `}
`;

export const InlineInputWithButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      cursor: pointer;
      background-color: transparent;
      color: ${theme.colors.text};
      border: 1px solid ${theme.colors.text};
      border-radius: 6px;
      height: 32px;
      width: 120px;

      @media (max-width: ${breakpoints.sm}) {
        width: 100%;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;

        &:hover {
          color: ${theme.colors.text};
          border: 1px solid ${theme.colors.text};
        }
      }

      &:hover {
        border: 1px solid ${theme.colors.white};
        color: ${theme.colors.white};
      }
    }

    @media (max-width: ${breakpoints.sm}) {
      flex-direction: column;
    }
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 1.3rem;
      color: ${theme.colors.green};
    }

    input {
      margin: 0 1rem;
      padding: 0 0.7rem;
      background-color: transparent;
      border: none;
      color: ${theme.colors.text};
      border: 1px solid transparent;
      outline: none;
      height: 32px;
      width: 90%;
      border-radius: 6px;

      &:focus {
        border: 1px solid ${theme.colors.blue};
      }

      @media (max-width: ${breakpoints.sm}) {
        width: 100%;
        margin: 1rem 0 1rem 1rem;
      }
    }
  `}
`;
