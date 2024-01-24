import React, { useState, useEffect } from "react";
import Link from "next/link";
import Hidden from "@/components/Hidden";
import TypingAnimation from "@/components/TypingAnimation";
import templatesFunction, {
  FunctionTemplateEnum,
} from "@/components/CommandTerminal/TemplatesFunction";
import routes from "@/utils/routes";
import * as s from "./style";

type CommandTerminalProps = {
  pageTitle?: string;
  mobileText: string;
  desktopText?: string;
  functions?: FunctionTemplateEnum[];
  delayToShowFunctions?: number;
};

enum SizesEnum {
  DESKTOP = "desktop",
  MOBILE = "mobile",
}

const CommandTerminal = ({
  pageTitle = "portfolio",
  mobileText,
  desktopText,
  functions,
  delayToShowFunctions = 5800,
}: CommandTerminalProps) => {
  const [showRedirectFunctions, setShowRedirectFunctions] = useState(false);

  useEffect(() => {
    if (!!functions?.length) {
      setTimeout(() => {
        setShowRedirectFunctions(true);
      }, delayToShowFunctions);
    }
  }, []);

  const showRedirectFunctionsCondition =
    showRedirectFunctions && functions?.length;

  const buildAriaLabelText = (func: FunctionTemplateEnum) => {
    let ariaLabelText = "Click here to be redirected to ";

    if (func === FunctionTemplateEnum.PORTFOLIO) {
      ariaLabelText += "my latest works page";
    }

    if (func === FunctionTemplateEnum.CONTACT_ME) {
      ariaLabelText += "contact page";
    }

    if (func === FunctionTemplateEnum.SOCIAL_NETWORKS) {
      ariaLabelText += "my social networks page";
    }

    return ariaLabelText;
  };

  const redirectFunctionContent = (size: SizesEnum) => {
    let animatedText = mobileText;

    if (size === SizesEnum.DESKTOP && desktopText) {
      animatedText = desktopText;
    }

    return (
      <>
        <TypingAnimation text={animatedText} />

        {showRedirectFunctionsCondition && (
          <>
            {functions.map((func, index) => (
              <s.CodeBlock key={index}>
                <Link
                  href={routes[func]}
                  aria-role="button"
                  title={buildAriaLabelText(func)}
                  aria-label={buildAriaLabelText(func)}
                >
                  {func === FunctionTemplateEnum.PORTFOLIO &&
                    templatesFunction.portfolio[size]}
                  {func === FunctionTemplateEnum.CONTACT_ME &&
                    templatesFunction.contactMe[size]}
                  {func === FunctionTemplateEnum.SOCIAL_NETWORKS &&
                    templatesFunction.socialNetworks[size]}
                </Link>
              </s.CodeBlock>
            ))}
          </>
        )}
      </>
    );
  };

  return (
    <s.CommandTerminalContainer>
      <s.CommandTerminalHeader>
        <span>
          {">"} {pageTitle}
          <Link href={routes.home}>@mathiasfc_</Link>
        </span>
        <span>
          {new Date().toLocaleString("default", { month: "short" }) +
            new Date().getDate()}{" "}
        </span>
      </s.CommandTerminalHeader>

      <s.CommandTerminalBody>
        {[SizesEnum.DESKTOP, SizesEnum.MOBILE].map((size) => {
          if (size === SizesEnum.DESKTOP) {
            return <Hidden xlDown>{redirectFunctionContent(size)}</Hidden>;
          } else if (size === SizesEnum.MOBILE) {
            return <Hidden xlUp>{redirectFunctionContent(size)}</Hidden>;
          }
        })}
      </s.CommandTerminalBody>
    </s.CommandTerminalContainer>
  );
};

export default CommandTerminal;
