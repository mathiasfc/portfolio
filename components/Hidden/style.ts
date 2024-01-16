import styled, { css } from "styled-components";
import { breakpoints, breakpointsMinusOne } from "@/utils/breakpoints";

const xsUpStyle = css`
  @media (min-width: ${breakpoints.xs}) {
    display: none;
  }
`;

const smDownStyle = css`
  @media (max-width: ${breakpointsMinusOne.sm}) {
    display: none;
  }
`;

const smUpStyle = css`
  @media (min-width: ${breakpoints.sm}) {
    display: none;
  }
`;

const mdDownStyle = css`
  @media (max-width: ${breakpointsMinusOne.md}) {
    display: none;
  }
`;

const mdUpStyle = css`
  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
`;

const lgDownStyle = css`
  @media (max-width: ${breakpointsMinusOne.lg}) {
    display: none;
  }
`;

const lgUpStyle = css`
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`;

const xlDownStyle = css`
  @media (max-width: ${breakpointsMinusOne.xl}) {
    display: none;
  }
`;

const xlUpStyle = css`
  @media (min-width: ${breakpoints.xl}) {
    display: none;
  }
`;

type HiddenContainerProps = {
  readonly alignCenter?: boolean;
  readonly xsUp?: boolean;
  readonly smDown?: boolean;
  readonly smUp?: boolean;
  readonly mdDown?: boolean;
  readonly mdUp?: boolean;
  readonly lgUp?: boolean;
  readonly lgDown?: boolean;
  readonly xlUp?: boolean;
  readonly xlDown?: boolean;
};
export const HiddenContainer = styled.div<HiddenContainerProps>`
  width: 100%;

  ${({ alignCenter }) =>
    alignCenter &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${({ xsUp, smDown, smUp, mdDown, mdUp, lgUp, lgDown, xlUp, xlDown }) => css`
    ${xsUp && xsUpStyle}

    ${smDown && smDownStyle}

    ${smUp && smUpStyle}

    ${mdDown && mdDownStyle}

    ${mdUp && mdUpStyle}

    ${lgUp && lgUpStyle}

    ${lgDown && lgDownStyle}

    ${xlUp && xlUpStyle}

    ${xlDown && xlDownStyle}
  `}
`;
