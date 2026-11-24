// Imam Support sponsorship: the people a donor can sponsor each month, and the
// whole-program option. Content from the foundation's sponsorship design.
//
// Before launch, replace these with the real, consented profiles and live figures.

export interface Sponsee {
  id: string;
  name: string;
  initials: string;
  meta: string;
  bio: string;
  /** Taka a month still needed, out of MONTHLY_NEED. */
  needed: number;
  /** Sponsors already sharing this person, out of MAX_SPONSORS. */
  sponsors: number;
  /** Portrait in /public/images/imams. Initials show until one is added. */
  photo?: string;
}

export const MONTHLY_NEED = 8000;
export const MAX_SPONSORS = 4;
export const PROGRAM_MIN = 500;

export const IMAM_ABOUT = [
  'Many village imams lead five daily prayers, teach children the Quran and serve their community on a salary of a few thousand taka.',
  'Each imam needs ৳8,000 a month. Up to four sponsors can share one imam, so you can give a part of his salary, or sponsor the whole program.'
];

export const SPONSEES: Sponsee[] = [
  { id: 'IMM-0001', name: 'Imam Abdur Rahim', initials: 'IR', meta: '48 years · Male · Nilphamari', bio: 'Imam Abdur Rahim has led prayers at his village masjid for 20 years and teaches 40 children the Quran every morning.', needed: 3000, sponsors: 2, photo: '/images/imams/abdur-rahim.jpg' },
  { id: 'IMM-0002', name: 'Imam Yusuf', initials: 'IY', meta: '35 years · Male · Rangpur', bio: 'Imam Yusuf is a hafez who leads Taraweeh every Ramadan and runs an evening maktab for working children.', needed: 8000, sponsors: 0, photo: '/images/imams/yusuf.jpg' },
  { id: 'IMM-0003', name: 'Imam Nurul Amin', initials: 'IA', meta: '56 years · Male · Sunamganj', bio: 'Imam Nurul Amin serves a haor village that is cut off by water for half the year.', needed: 8000, sponsors: 0, photo: '/images/imams/nurul-amin.jpg' },
  { id: 'IMM-0004', name: 'Muezzin Kamal', initials: 'MK', meta: '41 years · Male · Kurigram', bio: 'Kamal has called the adhan five times a day for 15 years and cares for the masjid.', needed: 8000, sponsors: 0, photo: '/images/imams/kamal.jpg' }
];

export const PROGRAM = {
  name: 'Sponsor the whole program',
  meta: `From ৳${PROGRAM_MIN} a month`,
  bio: 'Your monthly gift is shared across everyone in Support an imam, wherever the need is greatest.'
};

/** Monthly amounts offered for one person: shares of what is still needed, ending with all of it. */
export const monthlyOptions = (needed: number) =>
  [...new Set([1000, 2000, 4000].filter((a) => a < needed).concat(needed))];
export const PROGRAM_OPTIONS = [500, 1000, 2000, 5000];
