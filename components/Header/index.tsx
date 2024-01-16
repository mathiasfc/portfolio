import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import routes from "@/utils/routes";
import * as s from "./style";

const Header = () => {
  const router = useRouter();

  const headerClassNameBuilder = (defaultClass: string, route: string) => {
    let className = defaultClass;

    if (router.pathname === route) {
      className += ` active-style`;
    }

    return className;
  };

  return (
    <s.HeaderContainer>
      <s.HeaderNavigation>
        <ul>
          <li>
            <Link
              className={headerClassNameBuilder("a-orange", routes.portfolio)}
              href="/portfolio"
            >
              [portfolio]
            </Link>
          </li>
          <li>
            <Link
              className={headerClassNameBuilder("a-blue", routes.contactMe)}
              href="/contact"
            >
              [contact-me]
            </Link>
          </li>
          <li>
            <Link
              className={headerClassNameBuilder(
                "a-purple",
                routes.socialNetworks
              )}
              href="/social"
            >
              [social]
            </Link>
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
      </s.HeaderNavigation>
    </s.HeaderContainer>
  );
};

export default Header;
