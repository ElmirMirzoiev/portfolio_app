import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export type BlockTitleType = {
  intro?: string;
  title: string;
};
type LinkItem = {
  id: number;
  path: string;
  title: string;
};
type AnimatedTitleType = {
  id: number;
  title: string;
};
export type IconType = {
  id: number;
  href: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};
export type MainDataType = {
  blockTitle: BlockTitleType;
  animatedTitle: AnimatedTitleType[];
  icons: IconType[];
  greetingBlockText: string;
  link: LinkItem[];
};

export const MainData: MainDataType = {
  blockTitle: {
    intro: "Hello, I am",
    title: "Elmir Mirzoiev",
  },
  animatedTitle: [
    { id: 1, title: "front-end developer" },
    { id: 2, title: "web-developer" },
    { id: 3, title: "software Engineer" },
  ],
  icons: [
    { id: 1, href: "https://t.me/ElmirMirzoiev", icon: TelegramIcon },
    { id: 2, href: "https://github.com/ElmirMirzoiev", icon: GitHubIcon },
    {
      id: 3,
      href: "https://www.linkedin.com/in/elmir-mirzoiev-64b29a1b9/",
      icon: LinkedInIcon,
    },
  ],
  greetingBlockText:
    " I'm front-end developer. I have experience in cross-browser, adaptive,\n" +
    " responsive development, creating SPA with react, redux, typescript, using RestAPI.\n" +
    " I will be glad to join your team and work together",
  link: [
    { id: 1, path: "/about", title: "About me" },
    { id: 2, path: "/contacts", title: "Hire me" },
  ],
};
