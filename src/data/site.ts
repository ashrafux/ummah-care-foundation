import { IMG } from './images';

export const SITE = {
  name: 'Ummah Care Foundation',
  tagline: 'Committed to human social welfare & progress.',
  phone: '+880 1310-188834',
  phoneHref: 'tel:+8801310188834',
  email: 'info@wedevs.foundation',
  facebook: 'https://www.facebook.com/foundation.wedevs'
};

export const ROUTES = {
  home: '/',
  about: '/about',
  areaOfActivity: '/area-of-activity',
  donate: '/donate',
  contact: '/contact',
  membership: '/membership',
  volunteer: '/volunteer',
  faq: '/faq',
  blog: '/news-and-events',
  gallery: '/gallery',
  stories: '/success-stories',
  privacy: '/privacy-policy',
  terms: '/terms-and-conditions'
} as const;

export type NavKey = 'Home' | 'Causes' | 'Gallery' | 'Stories' | 'News' | 'About' | 'Contact' | '';

/** Cause list in the order used by the header mega menu. */
export const CAUSE_NAV = [
  { name: 'Educational Aid', slug: 'educational-aid', img: IMG.students },
  { name: 'Self-Reliance', slug: 'self-reliance', img: IMG.sewing },
  { name: 'Medical Care', slug: 'medical-care', img: IMG.wheelchair },
  { name: 'Winter Clothing', slug: 'winter-clothes', img: IMG.winterDistribution },
  { name: 'Food Assistance', slug: 'food-assistance', img: IMG.foodDistribution },
  { name: 'Water Aid', slug: 'water-aid', img: IMG.goats },
  { name: 'Humanitarian Aid', slug: 'humanitarian-aid', img: IMG.community },
  { name: 'Emergency Assistance', slug: 'emergency-assistance', img: IMG.relief }
].map((c) => ({ ...c, href: `/causes/${c.slug}` }));

export const causeHref = (slug: string) => `/causes/${slug}`;
