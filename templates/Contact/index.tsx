import Head from "next/head";
import Header from "@/components/Header";
import StarsEffect from "@/components/StarsEffect";
import CommandTerminal from "@/components/CommandTerminal";
import { FunctionTemplateEnum } from "@/components/CommandTerminal/TemplatesFunction";
import Footer from "@/components/Footer";
import * as s from "./style";

const ContactTemplate = () => {
  return (
    <s.ContactTemplateContainer>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StarsEffect />

      <Header />
      <s.Main>
        <CommandTerminal
          pageTitle="contact"
          mobileText={`// Drop me a message below, \n // and let's start a conversation`}
        />

        <s.UniverseGlowEffect src="/glow.svg" />
      </s.Main>

      <Footer />
    </s.ContactTemplateContainer>
  );
};

export default ContactTemplate;
