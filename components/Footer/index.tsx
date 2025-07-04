import React from "react";
import OctoCatIcon from "@/components/icons/SocialNetworks/OctoCat";
import * as s from "./style";

const Footer = () => {
  return (
    <s.FooterContainer>
      <s.FooterNavigation>
        <ul>
          <li>
            <a
              className="a-orange"
              href="https://old.mathiasfc.dev"
              target="_blank"
            >
              [old-version]
            </a>
          </li>
          <li>
            <a
              className="a-blue"
              href="https://vemadotar.com.br/sorte"
              target="_blank"
            >
              [feeling-lucky]
            </a>
          </li>
          <li>
            <a
              className="a-pink"
              href="https://github.com/mathiasfc"
              target="_blank"
            >
              [github]
            </a>
          </li>
        </ul>
      </s.FooterNavigation>

      <s.FooterCopyRight>
        <s.OctoCatLink
          href="https://github.com/mathiasfc/portfolio"
          aria-label="GitHub repository"
          title="GitHub repository"
        >
          <OctoCatIcon />
        </s.OctoCatLink>
        <span>2023 - {new Date().getFullYear()}, built with</span>
        <s.HeartEmoji>❤️</s.HeartEmoji>
      </s.FooterCopyRight>
    </s.FooterContainer>
  );
};

export default Footer;
