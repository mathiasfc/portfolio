import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import StarsEffect from "@/components/StarsEffect";
import Footer from "@/components/Footer";
import { constants } from "@/utils/constants";
import * as s from "./style";

type PageProps = {
  title: string;
  description: string;
  children: ReactNode;
};

/**
 * The `Page` component serves as a layout template for your application pages.
 * It includes the SEO data, header, main content area, footer, and additional decorative effects.
 */
const Page = ({ title, description, children }: PageProps) => {
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
        keywords={constants.SEO.keywords}
        favicon="/favicon.ico"
        openGraph={{
          type: "website",
          title: title,
          description: description,
          site_name: "mathiasfc - portfolio",
          url: pageURL,
          locale: "pt_BR",
          images: [
            {
              url: "/logo.jpeg",
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
        <s.UniverseGlowEffect src="/glow.svg" />
      </s.PageContainer>
    </>
  );
};

export default Page;
