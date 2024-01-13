import React from "react";
import * as s from "./style";
import Link from "next/link";

const Footer = () => {
  return (
    <s.FooterContainer>
      <s.FooterNavigation>
        <ul>
          <li>
            <a className="a-orange" href="https://old.mathiasfc.dev">
              [old-version]
            </a>
          </li>
          <li>
            <Link className="a-blue" href="/about">
              [about]
            </Link>
          </li>
          <li>
            <a
              className="a-purple"
              href="https://giphy.com/search/dog"
              target="_blank"
            >
              [puppy-paradise]
            </a>
          </li>
        </ul>
      </s.FooterNavigation>

      <s.FooterCopyRight>
        <span>
          {new Date().getFullYear()}, built with <s.HeartEmoji>❤️</s.HeartEmoji>
        </span>
      </s.FooterCopyRight>
    </s.FooterContainer>
  );
};

export default Footer;
