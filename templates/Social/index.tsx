import Page from "@/components/Page";
import CommandTerminal from "@/components/CommandTerminal";
import { SocialNetworksTitlesEnum } from "@/utils/constants";
import DevToIcon from "@/components/icons/SocialNetworks/DevTo";
import GlitchText from "@/components/GlitchText";
import StackOverflowIcon from "@/components/icons/SocialNetworks/StackOverflow";
import OctoCatIcon from "@/components/icons/SocialNetworks/OctoCat";
import LinkedinIcon from "@/components/icons/SocialNetworks/Linkedin";
import FacebookIcon from "@/components/icons/SocialNetworks/Facebook";
import InstagramIcon from "@/components/icons/SocialNetworks/Instagram";
import * as s from "./style";

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
      >
        <s.InnerSocialPageContent>
          {SOCIAL_NETWORKS.map((socialNetwork) => {
            return (
              <s.SocialNetworkItem key={socialNetwork.id}>
                <a href={socialNetwork.url} target="_blank">
                  {socialNetwork.icon}
                  <GlitchText text={socialNetwork.title} />
                </a>
              </s.SocialNetworkItem>
            );
          })}
        </s.InnerSocialPageContent>
      </CommandTerminal>
    </Page>
  );
};

const SOCIAL_NETWORKS = [
  {
    id: 0,
    title: SocialNetworksTitlesEnum.StackOverflow,
    url: "https://stackoverflow.com/users/3954447/mathiasfc/",
    icon: <StackOverflowIcon />,
  },
  {
    id: 1,
    title: SocialNetworksTitlesEnum.Github,
    url: "https://github.com/mathiasfc/",
    icon: <OctoCatIcon />,
  },
  {
    id: 2,
    title: SocialNetworksTitlesEnum.Instagram,
    url: "https://www.instagram.com/mathiasfalci/",
    icon: <InstagramIcon />,
  },
  {
    id: 3,
    title: SocialNetworksTitlesEnum.LinkedIn,
    url: "https://www.linkedin.com/in/mathias-falci/",
    icon: <LinkedinIcon />,
  },
  {
    id: 4,
    title: SocialNetworksTitlesEnum.Facebook,
    url: "https://www.facebook.com/mathiasfalci/",
    icon: <FacebookIcon />,
  },
  {
    id: 5,
    title: SocialNetworksTitlesEnum.DevTo,
    url: "https://dev.to/mathiasfc/",
    icon: <DevToIcon />,
  },
];

export default SocialTemplate;
