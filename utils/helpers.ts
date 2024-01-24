import { FunctionTemplateEnum } from "@/components/CommandTerminal/TemplatesFunction";

/**
 * Builds ARIA (Accessible Rich Internet Applications) label text based on the specified function template.
 *
 * const label = buildAriaLabelText(FunctionTemplateEnum.PORTFOLIO);
 * // Returns: "Click here to be redirected to my latest works page"
 */
export const buildRedirectFunctionAriaLabelText = (
  func: FunctionTemplateEnum
) => {
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
