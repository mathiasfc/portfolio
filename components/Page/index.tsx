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
        <s.UniverseGlowEffect src="/images/glow.svg" />
      </s.PageContainer>
    </>
  );
};

export default Page;
