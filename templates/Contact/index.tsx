import Page from "@/components/Page";
import CommandTerminal from "@/components/CommandTerminal";
import ContactMeForm from "@/components/ContactMeForm";
import * as s from "./style";

const ContactTemplate = () => {
  const pageTitle = "Contact | Mathias Falci";
  const pageDescription =
    "Connect with Mathias Falci, a frontend developer passionate about web development. Reach out to discuss projects, collaborations, or just to say hello.";

  return (
    <Page title={pageTitle} description={pageDescription}>
      <CommandTerminal
        pageTitle="contact"
        mobileText={`// Drop me a message below, \n // and let's start a conversation`}
      >
        <s.InnerContactPageContent>
          <ContactMeForm />
        </s.InnerContactPageContent>
      </CommandTerminal>
    </Page>
  );
};

export default ContactTemplate;
