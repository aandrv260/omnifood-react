import { FooterNavMenu, HeaderNav } from '../../models/navigation';

export const headerNav: HeaderNav = [
  {
    title: 'How it works',
    url: '#section-how',
  },

  {
    title: 'Meals',
    url: '#section-meals',
  },

  {
    title: 'Testimonials',
    url: '#section-testimonials',
  },

  {
    title: 'Pricing',
    url: '#section-pricing',
  },

  {
    title: 'Try for free',
    url: '#section-cta',
    isCta: true,
  },
];

export const footerNav: FooterNavMenu[] = [
  {
    heading: 'Account',
    items: [
      {
        title: 'Create account',
        url: '#',
      },

      {
        title: 'Sign in',
        url: '#',
      },

      {
        title: 'iOS app',
        url: '#',
      },

      {
        title: 'Android app',
        url: '#',
      },
    ],
  },

  {
    heading: 'Company',
    items: [
      {
        title: 'About Omnifood',
        url: '#',
      },

      {
        title: 'For Business',
        url: '#',
      },

      {
        title: 'Cooking partners',
        url: '#',
      },

      {
        title: 'Careers',
        url: '#',
      },
    ],
  },

  {
    heading: 'Resources',
    items: [
      {
        title: 'Recipe directory',
        url: '#',
      },

      {
        title: 'Help center',
        url: '#',
      },

      {
        title: 'Privacy & terms',
        url: '#',
      },
    ],
  },
];

const navs = {
  headerNav,
  footerNav,
};

export default navs;
