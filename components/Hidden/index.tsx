import React, { ReactNode } from "react";
import * as s from "./style";

type HiddenProps = {
  children: ReactNode;
  alignCenter?: boolean;
  xsUp?: boolean;
  smUp?: boolean;
  smDown?: boolean;
  mdUp?: boolean;
  mdDown?: boolean;
  lgUp?: boolean;
  lgDown?: boolean;
  xlUp?: boolean;
  xlDown?: boolean;
};

const Hidden = ({
  children,
  alignCenter = false,
  xsUp,
  smUp,
  smDown,
  mdUp,
  mdDown,
  lgUp,
  lgDown,
  xlUp,
  xlDown,
}: HiddenProps) => {
  const props = {
    alignCenter,
    xsUp,
    smUp,
    smDown,
    mdUp,
    mdDown,
    lgUp,
    lgDown,
    xlUp,
    xlDown,
  };

  return <s.HiddenContainer {...props}>{children}</s.HiddenContainer>;
};

export default Hidden;
