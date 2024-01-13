import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      background: string;
      black: string;
      white: string;
      purple: string;
      pink: string;
      blue: string;
      green: string;
      orange: string;
      yellow: string;
    };
  }
}
