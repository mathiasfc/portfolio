import Head from "next/head";
import Header from "@/components/Header";
import StarsEffect from "@/components/StarsEffect";
import CodeContent from "@/components/CodeContent";
import Footer from "@/components/Footer";
import * as s from "./style";

const AboutTemplate = () => {
  return (
    <s.AboutTemplateContainer>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StarsEffect />

      <Header />
      <s.Main>
        <CodeContent />

        <s.UniverseGlowEffect src="/glow.svg" />
      </s.Main>

      <Footer />
    </s.AboutTemplateContainer>
  );
};

export default AboutTemplate;
