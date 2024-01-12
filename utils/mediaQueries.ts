import { breakpoints } from "@/utils/breakpoints";

export const mediaQueries = {
  xsUp: `(min-width: ${breakpoints.xs}px)`,
  smDown: `(max-width: ${breakpoints.sm - 1}px)`,
  smUp: `(min-width: ${breakpoints.sm}px)`,
  mdDown: `(max-width: ${breakpoints.md - 1}px)`,
  mdUp: `(min-width: ${breakpoints.md}px)`,
  lgDown: `(max-width: ${breakpoints.lg - 1}px)`,
  lgUp: `(min-width: ${breakpoints.lg}px)`,
  xlDown: `(max-width: ${breakpoints.xl - 1}px)`,
  xlUp: `(min-width: ${breakpoints.xl}px)`,
};
