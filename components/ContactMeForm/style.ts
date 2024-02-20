import { breakpoints } from "@/utils/breakpoints";
import styled, { css, keyframes } from "styled-components";

export const ContactMeFormContainer = styled.form``;

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
        margin-top: 1rem;
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

    input,
    textarea {
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

    textarea {
      resize: none;
      height: 80px;
      padding: 10px;
      margin: 1rem;
      line-height: 25px;

      @media (max-width: ${breakpoints.sm}) {
        width: 100%;
        margin: 1rem 0 1rem 1rem;
      }
    }

    .span-red-feedback-symbol {
      color: red;
    }

    .span-green-feedback-symbol {
      color: ${theme.colors.green};
    }

    .span-grey-feedback-symbol {
      color: ${theme.colors.text};
    }
  `}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SuccessfullySentMessageContainer = styled.div`
  display: flex;
  align-items: center;
  animation: ${fadeIn} 1s ease-in-out;

  span {
    max-width: 280px;
  }

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const MessageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 280px;

    a {
      width: 200px;
      color: ${theme.colors.orange};

      @media (max-width: ${breakpoints.sm}) {
        width: 175px;
        margin-top: 15px;
      }
    }
  `};
`;
