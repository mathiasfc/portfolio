import Page from "@/components/Page";
import Image from "next/image";
import Link from "next/link";
import routes from "@/utils/routes";
import * as s from "./style";

type ErrorTemplateProps = {
  page404: boolean;
};

const ErrorTemplate = ({ page404 }: ErrorTemplateProps) => {
  const pageTitle = `${
    page404 ? "404 - Not Found" : "500 - Internal Server Error"
  } | Mathias Falci`;

  const page404Message = "We don't find the page that you're looking for";
  const page500Message = "An internal error occurred";

  const pageDescription = `${page404 ? page404Message : page500Message}`;

  return (
    <Page title={pageTitle} description={pageDescription} noIndex>
      <s.InnerErrorPageContent>
        <Image
          src={`/images/${page404 ? "404" : "500"}.png`}
          width={250}
          height={250}
          alt={`Picture of a puppy dog that represents the ${
            page404 ? "404" : "500"
          } page`}
        />

        <p>{pageDescription}</p>
        <Link href={routes.home}>back to home page</Link>
      </s.InnerErrorPageContent>
    </Page>
  );
};

export default ErrorTemplate;
