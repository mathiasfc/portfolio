import React from "react";
import OctoCatIcon from "@/components/icons/Octocat";
import * as s from "./style";

const Header = () => {
  return (
    <s.HeaderContainer>
      <s.HeaderInnerContainer>
        <s.HeaderContent>
          <s.OctoCatLink href="https://github.com/" aria-label="Homepage">
            <OctoCatIcon />
          </s.OctoCatLink>
        </s.HeaderContent>
      </s.HeaderInnerContainer>
    </s.HeaderContainer>
  );
};

export default Header;
