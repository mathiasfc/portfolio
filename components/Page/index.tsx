import React, { ReactNode } from "react";
import Header from "@/components/Header";
import StarsEffect from "@/components/StarsEffect";
import Footer from "@/components/Footer";
import * as s from "./style";

type PageProps = {
  children: ReactNode;
};

/**
 * The `Page` component serves as a layout template for your application pages.
 * It includes a header, main content area, footer, and additional decorative effects.
 */
const Page = ({ children }: PageProps) => {
  return (
    <s.PageContainer>
      <Header />
      <s.Main>{children}</s.Main>
      <Footer />

      {/* Additional Decorative Effects */}
      <StarsEffect />
      <s.UniverseGlowEffect src="/glow.svg" />
    </s.PageContainer>
  );
};

export default Page;
