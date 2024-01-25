import React, { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import Hidden from "@/components/Hidden";
import TypingAnimation from "@/components/TypingAnimation";
import templatesFunction, {
  FunctionTemplateEnum,
} from "@/components/CommandTerminal/TemplatesFunction";
import routes from "@/utils/routes";
import { buildRedirectFunctionAriaLabelText } from "@/utils/helpers";
import * as s from "./style";

type CommandTerminalProps = {
  pageTitle?: string;
  mobileText: string;
  desktopText?: string;
  redirectFunctions?: FunctionTemplateEnum[];
  delayToShowContent?: number;
  children?: ReactNode;
};

/**
 * Enum representing possible sizes for the CommandTerminal component.
 * @enum {string}
 */
enum SizesEnum {
  DESKTOP = "desktop",
  MOBILE = "mobile",
}

/**
 * CommandTerminal component that emulates a command-line interface.
 * @param {CommandTerminalProps} props - The properties of the CommandTerminal component.
 * @returns {ReactNode} The rendered CommandTerminal component.
 */
const CommandTerminal = ({
  pageTitle = "portfolio",
  mobileText,
  desktopText,
  redirectFunctions,
  delayToShowContent = 5800,
  children,
}: CommandTerminalProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    /**
     * Sets a timeout to show the content after a specified delay.
     */
    const showContentTimeout = setTimeout(() => {
      setShowContent(true);
    }, delayToShowContent);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(showContentTimeout);
  }, [delayToShowContent]);

  const showRedirectFunctionsCondition =
    showContent && redirectFunctions?.length;

  /**
   * Generates content for redirect functions based on size.
   */
  const redirectFunctionContent = (size: SizesEnum) => {
    return (
      <>
        {redirectFunctions?.map((func, index) => (
          <s.CodeBlock key={index}>
            <Link
              href={routes[func]}
              aria-role="button"
              title={buildRedirectFunctionAriaLabelText(func)}
              aria-label={buildRedirectFunctionAriaLabelText(func)}
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
          {showContent ? (
            <span role="img" aria-label="Green Circle">
              🟢
            </span>
          ) : (
            <span role="img" aria-label="Yellow Circle">
              🟡
            </span>
          )}
        </span>
      </s.CommandTerminalHeader>

      <s.CommandTerminalBody>
        {[SizesEnum.DESKTOP, SizesEnum.MOBILE].map((size, index) => {
          if (size === SizesEnum.DESKTOP) {
            return (
              <Hidden xlDown key={index}>
                <TypingAnimation text={desktopText || mobileText} />

                {showRedirectFunctionsCondition &&
                  redirectFunctionContent(size)}
              </Hidden>
            );
          } else if (size === SizesEnum.MOBILE) {
            return (
              <Hidden xlUp key={index}>
                <TypingAnimation text={mobileText} />

                {showRedirectFunctionsCondition &&
                  redirectFunctionContent(size)}
              </Hidden>
            );
          }
        })}

        {showContent && children}
      </s.CommandTerminalBody>
    </s.CommandTerminalContainer>
  );
};

export default CommandTerminal;
