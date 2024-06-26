import Page from "@/components/Page";
import CommandTerminal from "@/components/CommandTerminal";
import * as s from "./style";

/**
 * @deprecated
 * This page is currently unused and will not be displayed.
 * It will remain inactive until the development of the portfolio page.
 */
const PortfolioTemplate = () => {
  const pageTitle = "Portfolio | Mathias Falci";
  const pageDescription =
    "Explore Mathias Falci's portfolio of web development projects. From responsive websites to interactive web applications, each project showcases a commitment to creativity, functionality, and user experience.";

  return (
    <Page title={pageTitle} description={pageDescription}>
      <CommandTerminal
        pageTitle="portfolio"
        mobileText={`// Here, you'll discover \n // some of my latest works`}
        desktopText={`// Here, you'll discover some of my latest works`}
      >
        <s.InnerPortfolioPageContent>
          <p>🚧 Oops! Sadly this page isn't ready yet.</p>
          <p>I'm actively working on it to bring you something awesome!</p>
          <p>
            In the meantime, you can still access the old version{" "}
            <a href="https://old.mathiasfc.dev/projetos">here</a>.
          </p>
        </s.InnerPortfolioPageContent>
      </CommandTerminal>
    </Page>
  );
};

export default PortfolioTemplate;
