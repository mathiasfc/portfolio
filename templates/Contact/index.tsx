import Head from "next/head";
import Page from "@/components/Page";
import CommandTerminal from "@/components/CommandTerminal";

const ContactTemplate = () => {
  const pageTitle = "Contact | Mathias Falci";
  const pageDescription =
    "Connect with Mathias Falci, a frontend developer passionate about web development. Reach out to discuss projects, collaborations, or just to say hello.";

  return (
    <Page title={pageTitle} description={pageDescription}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CommandTerminal
        pageTitle="contact"
        mobileText={`// Drop me a message below, \n // and let's start a conversation`}
      />
    </Page>
  );
};

export default ContactTemplate;
