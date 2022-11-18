export type HeaderNavItem = {
  url: string;
  title: string;
  isCta?: boolean;
};

export type FooterNavMenuItem = {
  url: string;
  title: string;
};

export type FooterNavMenu = {
  heading: string;
  items: FooterNavMenuItem[];
};

export type HeaderNav = HeaderNavItem[];
export type FooterNav = FooterNavMenu[];
