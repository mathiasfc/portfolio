import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
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
 * Page component that serves as a layout wrapper for all pages.
 * It includes common elements like SEO meta tags, header, and footer.
 */
const Page = ({ title, description, noIndex, children }: PageProps) => {
  const [pageURL, setPageURL] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    /**
     * Sets the current page URL for SEO purposes.
     */
    const currentURL =
      typeof window !== "undefined"
        ? `${window.location.origin}${router.asPath}`
        : "";
    setPageURL(currentURL);
  }, [router.asPath]);

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
      </s.PageContainer>
    </>
  );
};

export default Page;
