import GlitchText from "@/components/GlitchText";
import React from "react";

export enum FunctionTemplateEnum {
  PORTFOLIO = "portfolio",
  CONTACT_ME = "contactMe",
  SOCIAL_NETWORKS = "socialNetworks",
}

const mobilePortfolioFn = (
  <p>
    <span className="span-code-blue">
      <i>
        <GlitchText text="function" />
      </i>
    </span>{" "}
    <span className="span-code-green">
      <GlitchText text="latestWorks" />
    </span>
    <GlitchText text="();" />
  </p>
);

const desktopPortfolioFn = (
  <>
    <p>
      <span className="span-code-blue">
        <i>
          <GlitchText text="function" />
        </i>{" "}
      </span>
      <span className="span-code-green">
        <GlitchText text="portfolio" />
      </span>
      (
      <span className="span-code-orange">
        <i>
          <GlitchText text="latestWorks " />
        </i>
      </span>
      ){" {"}
    </p>
    <p>
      <span className="span-code-pink">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <GlitchText text="return" />{" "}
      </span>
      <span className="span-code-purple">
        <GlitchText text="`Discover some of my" />{" "}
      </span>
      <span className="span-code-yellow">
        <GlitchText text={"${"} />
      </span>
      <span>
        <GlitchText text="latestWorks" />
      </span>
      <span className="span-code-yellow">{"}"}</span>;
    </p>
    <p>{"}"}</p>
  </>
);

const mobileContactMeFn = (
  <p>
    <span className="span-code-blue">
      <i>
        <GlitchText text="function" />
      </i>
    </span>{" "}
    <span className="span-code-green">
      <GlitchText text="contactMe" />
    </span>
    <GlitchText text="();" />
  </p>
);

const desktopContactMeFn = (
  <>
    <p>
      <span className="span-code-blue">
        <i>
          <GlitchText text="function" />
        </i>
      </span>{" "}
      <span className="span-code-green">
        <GlitchText text="contactMe" />
      </span>
      (
      <span className="span-code-orange">
        <i>
          <GlitchText text="target" />
        </i>
      </span>
      <span> = </span>
      <span className="span-code-yellow">
        {" "}
        <GlitchText text="'me'" />
      </span>
      ){" {"}
    </p>
    <p>
      <span className="span-code-pink">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <GlitchText text="return" />
      </span>
      <span className="span-code-purple">
        {" "}
        <GlitchText text=" `Feel free to send " />
      </span>
      <span className="span-code-yellow">{"${"}</span>
      <GlitchText text="target" />
      <span className="span-code-yellow">{"}"}</span>
      <span className="span-code-purple">
        <GlitchText text=" a message" />
      </span>
      <span className="span-code-purple">`</span>;
    </p>
    <p>{"}"}</p>
  </>
);

const mobileSocialNetworksFn = (
  <p>
    <span className="span-code-blue">
      <i>
        <GlitchText text="function" />
      </i>
    </span>{" "}
    <span className="span-code-green">
      <GlitchText text="socialNetworks" />
    </span>
    <GlitchText text="();" />
  </p>
);

const desktopSocialNetworksFn = (
  <>
    <p>
      <span className="span-code-blue">
        <i>
          <GlitchText text="function" />
        </i>
      </span>{" "}
      <span className="span-code-green">
        <GlitchText text="socialNetworks" />
      </span>
      (
      <span className="span-code-orange">
        <i>
          <GlitchText text="action" />
        </i>
      </span>
      <span> = </span>
      <span className="span-code-yellow">
        {" "}
        <GlitchText text="'find'" />
      </span>
      ){" {"}
    </p>
    <p>
      <span className="span-code-pink">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <GlitchText text="return" />{" "}
      </span>
      <span className="span-code-purple">{"`"}</span>
      <span className="span-code-yellow">{"${"}</span>
      <span>
        <GlitchText text="action" />
      </span>
      <span className="span-code-yellow">{"} "}</span>
      <span className="span-code-purple">
        <GlitchText text="  me on your favorite social network" />
      </span>
      <span className="span-code-purple">`</span>;
    </p>
    <p>{"}"}</p>
  </>
);

const templatesFunction = {
  portfolio: {
    mobile: mobilePortfolioFn,
    desktop: desktopPortfolioFn,
  },
  contactMe: {
    mobile: mobileContactMeFn,
    desktop: desktopContactMeFn,
  },
  socialNetworks: {
    mobile: mobileSocialNetworksFn,
    desktop: desktopSocialNetworksFn,
  },
};

export default templatesFunction;
