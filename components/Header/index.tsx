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
      console.log(router.pathname, route);
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
              className={headerClassNameBuilder("a-orange", routes.home)}
              href={routes.home}
            >
              [home]
            </Link>
          </li>
          <li>
            <Link
              className={headerClassNameBuilder("a-blue", routes.contactMe)}
              href={routes.contactMe}
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
              href={routes.socialNetworks}
            >
              [social]
            </Link>
          </li>
          <li>
            <Link
              className={headerClassNameBuilder("a-pink", routes.portfolio)}
              href={routes.portfolio}
            >
              [portfolio]
            </Link>
          </li>
        </ul>
      </s.HeaderNavigation>
    </s.HeaderContainer>
  );
};

export default Header;
