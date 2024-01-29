import Page from "@/components/Page";
import CommandTerminal from "@/components/CommandTerminal";
import { FunctionTemplateEnum } from "@/components/CommandTerminal/TemplatesFunction";

const HomeTemplate = () => {
  const pageTitle = "Home | Mathias Falci";
  const pageDescription =
    "Welcome to the portfolio of Mathias Falci, a frontend developer passionate about building the web with creativity and precision. Explore my projects, get in touch, and connect with me on social networks.";

  return (
    <Page title={pageTitle} description={pageDescription}>
      <CommandTerminal
        pageTitle="home"
        mobileText={`// Hi there! I'm Mathias, \n // building the web \n // one line at a time`}
        desktopText={`// Hi there! I'm Mathias, \n // building the web one line at a time`}
        redirectFunctions={[
          FunctionTemplateEnum.CONTACT_ME,
          FunctionTemplateEnum.SOCIAL_NETWORKS,
        ]}
      />
    </Page>
  );
};

export default HomeTemplate;
