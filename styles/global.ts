import { createGlobalStyle, css } from "styled-components";
import { theme } from "@/styles/theme";

const redirectLinks = css`
  a.a-blue,
  a.a-orange,
  a.a-purple,
  a.a-pink {
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.2rem;
    text-decoration: none;
    transition: color 0.3s, background-color 0.3s;
  }

  ${({ theme }) => css`
    .a-blue {
      color: ${theme.colors.blue};

      &:hover,
      .active-style {
        color: ${theme.colors.black};
        background-color: ${theme.colors.blue};
      }
    }

    .a-blue.active-style {
      color: ${theme.colors.black};
      background-color: ${theme.colors.blue};
    }

    .a-orange {
      color: ${theme.colors.orange};

      &:hover {
        color: ${theme.colors.black};
        background-color: ${theme.colors.orange};
      }
    }

    .a-orange.active-style {
      color: ${theme.colors.black};
      background-color: ${theme.colors.orange};
    }

    .a-purple {
      color: ${theme.colors.purple};

      &:hover {
        color: ${theme.colors.black};
        background-color: ${theme.colors.purple};
      }
    }

    .a-purple.active-style {
      color: ${theme.colors.black};
      background-color: ${theme.colors.purple};
    }

    .a-pink {
      color: ${theme.colors.pink};

      &:hover {
        color: ${theme.colors.black};
        background-color: ${theme.colors.pink};
      }
    }
  `}
`;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100vh;
    color: ${theme.colors.text};
    padding: 0;
    margin: 0;
    /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
      font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  }

  * {
    box-sizing: border-box;
  }

  ${redirectLinks}
`;

export default GlobalStyle;
