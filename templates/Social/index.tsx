import Page from "@/components/Page";
import CommandTerminal from "@/components/CommandTerminal";

const SocialTemplate = () => {
  const pageTitle = "Social Networks | Mathias Falci";
  const pageDescription =
    "Connect with Mathias Falci through his social networks, feel free to get in touch.";

  return (
    <Page title={pageTitle} description={pageDescription}>
      <CommandTerminal
        pageTitle="social"
        mobileText={`// Let's stay connected! \n // Find me on your favorite \n // social network`}
        desktopText={`// Let's stay connected! \n // Find me on your favorite social network`}
      />
    </Page>
  );
};

export default SocialTemplate;
