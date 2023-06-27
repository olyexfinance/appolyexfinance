import { t } from "@lingui/macro";
import "./Footer.css";
import twitterIcon from "img/ic_twitter.svg";
import discordIcon from "img/ic_discord.svg";
import telegramIcon from "img/ic_telegram.svg";
import githubIcon from "img/ic_github.svg";
import substackIcon from "img/ic_substack.svg";

type Link = {
  label: string;
  link: string;
  external?: boolean;
  isAppLink?: boolean;
};

type SocialLink = {
  link: string;
  name: string;
  icon: string;
};

export function getFooterLinks(isHome) {
  const FOOTER_LINKS: { home: Link[]; app: Link[] } = {
    home: [
      { label: t`Terms and Conditions`, link: "/terms-and-conditions" },
      { label: t`Referral Terms`, link: "/referral-terms" },
      { label: t`Media Kit`, link: "https://gmxio.gitbook.io/gmx/media-kit", external: true },
      // { label: "Jobs", link: "/jobs", isAppLink: true },
    ],
    app: [
      { label: t`Media Kit`, link: "https://gmxio.gitbook.io/gmx/media-kit", external: true },
      // { label: "Jobs", link: "/jobs" },
    ],
  };
  return FOOTER_LINKS[isHome ? "home" : "app"];
}

export const SOCIAL_LINKS: SocialLink[] = [
  { link: "https://twitter.com/account/access", name: "Twitter", icon: twitterIcon },
  { link: "", name: "Substack", icon: substackIcon },
  { link: "", name: "Github", icon: githubIcon },
  { link: "https://t.me/olyexfinance", name: "Telegram", icon: telegramIcon },
  { link: "", name: "Discord", icon: discordIcon },
];
