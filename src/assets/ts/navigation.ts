import { HeaderNav } from '../../models/navigation';

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

const navs = {
  headerNav,
};

export default navs;
