import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import StarsEffect from "@/components/StarsEffect";
import Footer from "@/components/Footer";
import { SEO_DATA } from "@/utils/constants";
import * as s from "./style";

type PageProps = {
  title: string;
  description: string;
  noIndex?: boolean;
  children: ReactNode;
};

/**
 * The `Page` component serves as a layout template for your application pages.
 * It includes the SEO data, header, main content area, footer, and additional decorative effects.
 */
const Page = ({ title, description, noIndex = false, children }: PageProps) => {
  const router = useRouter();
  const [pageURL, setPageURL] = useState("");

  useEffect(() => {
    /**
     * Every time we have a change in our route, we update the pageURL used for SEO.
     * We also listen for the query params, as we have dynamic routes such as products
     * and tags which uses the same path, but changes the query params.
     */
    setPageURL(window?.location?.href);
  }, [router.pathname, router.query]);

  useEffect(() => {
    /**
     * This function calculates the viewport height (vh) and sets it as a custom
     * CSS property (--vh) on the root element. This is necessary because on mobile
     * devices, the viewport height can change due to the dynamic browser UI (e.g.,
     * the address bar expanding/collapsing).
     */
    const setViewportHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);
    window.addEventListener("orientationchange", setViewportHeight);

    return () => {
      window.removeEventListener("resize", setViewportHeight);
      window.removeEventListener("orientationchange", setViewportHeight);
    };
  }, []);

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={SEO_DATA.keywords}
        favicon="/favicon/favicon.ico"
        robots={noIndex ? "noindex,nofollow" : undefined}
        openGraph={{
          type: "website",
          title: title,
          description: description,
          site_name: "mathiasfc - portfolio",
          url: pageURL,
          locale: "pt_BR",
          images: [
            {
              url: "/images/logo.jpeg",
              width: "600",
              height: "600",
              alt: "A purple puppy dog typing on a computer looking surprised on a black background, pixel art",
            },
          ],
        }}
      />

      <s.PageContainer>
        <Header />
        <s.Main>{children}</s.Main>
        <Footer />

        {/* Additional Decorative Effects */}
        <StarsEffect />
        <s.UniverseGlowEffect
          src="/images/glow.svg"
          alt="Glow effect fixed at the background"
        />
      </s.PageContainer>
    </>
  );
};

export default Page;
