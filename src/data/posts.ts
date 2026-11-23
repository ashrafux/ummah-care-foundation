import { IMG } from './images';

export interface Post {
  slug: string;
  title: string;
  /** ISO date the post was published. */
  date: string;
  /** Cause slug, matching CAUSE_NAV in site.ts. */
  cause: string;
  img: string;
  /** The article, one string per paragraph. */
  body: string[];
}

// The foundation's six blog posts, newest first. The text is the foundation's own,
// taken from its original blog (16 October 2024) with the name changed to Ummah Care.
export const POSTS: Post[] = [
  {
    slug: 'medical-assistance-for-over-50-patients',
    title: 'Medical Assistance for Over 50 Patients: Expanding Support to 200 by 2027',
    date: '2024-10-16',
    cause: 'medical-care',
    img: IMG.wheelchair,
    body: [
      'Over the past three years, Ummah Care Foundation has provided financial assistance ranging from 5,000 to 100,000 BDT to more than 50 underprivileged and ailing individuals across different districts in Bangladesh. The foundation aims to extend this support to 200 patients by 2027.'
    ]
  },
  {
    slug: 'supporting-education-for-over-200-meritorious-students',
    title: 'Supporting Education for Over 200 Meritorious Students: A Vision for 1,000 by 2027',
    date: '2024-10-16',
    cause: 'educational-aid',
    img: IMG.students,
    body: [
      'Over the past three years, Ummah Care Foundation has provided monthly financial assistance to more than 200 underprivileged but talented students across various schools, colleges, and universities in Bangladesh.',
      'Looking ahead, the foundation aims to extend this support to 1,000 deserving students within the next three years, empowering them to pursue higher education and build a brighter future.'
    ]
  },
  {
    slug: 'basic-food-assistance-program-2024',
    title: 'Basic Food Assistance Program 2024: Supporting Over 200 Families in Naogaon and Pabna',
    date: '2024-10-16',
    cause: 'food-assistance',
    img: IMG.foodDistribution,
    body: [
      'In early 2024, Ummah Care Foundation distributed essential food items to more than 200 families in Naogaon and Pabna under its Basic Food Assistance Program.',
      'To date, the foundation has provided crucial food support to approximately 900 families, offering consistent aid to those in need throughout the year.'
    ]
  },
  {
    slug: 'van-goat-and-sewing-machine-distribution-2023',
    title: 'Empowering Families & Individuals in Naogaon and Pabna: Van, Goat and Sewing Machine Distribution 2023',
    date: '2024-10-16',
    cause: 'self-reliance',
    img: IMG.sewing,
    body: [
      'In 2023, Ummah Care Foundation distributed vans, goats and sewing machines to more than 100 families & individuals in the Naogaon and Pabna districts as part of the self-reliance project.',
      'This initiative aimed to empower underprivileged families & individuals by providing them with the tools to generate sustainable income and improve their livelihoods.'
    ]
  },
  {
    slug: 'winter-clothing-distribution-2023',
    title: 'Winter Clothing Distribution 2023 in Naogaon and Pabna: Supporting Over 500 Families',
    date: '2024-10-16',
    cause: 'winter-clothes',
    img: IMG.winterClothing,
    body: [
      'In 2023, Ummah Care Foundation distributed winter clothes to more than 500 families in the Naogaon and Pabna districts.',
      'This initiative aimed to provide warmth and protection to underprivileged families during the cold season, ensuring they are better prepared to face the winter with dignity and care.'
    ]
  },
  {
    slug: 'flood-relief-for-over-600-families',
    title: 'Flood Relief: Reaching Over 600 Affected Families with Emergency Aid',
    date: '2024-10-16',
    cause: 'emergency-assistance',
    img: IMG.community,
    body: [
      'This year, Ummah Care Foundation provided essential flood relief to more than 600 families severely impacted by devastating floods.',
      'Our team delivered emergency food supplies, clean water, clothing, and other necessities directly to homes in several areas of Feni, Noakhali, and Comilla, ensuring that families received timely assistance during their time of need.'
    ]
  }
];

export const postHref = (p: Post) => `/news-and-events/${p.slug}`;

export const postDate = (p: Post) =>
  new Date(p.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

/** About 200 words a minute, never less than one. */
export const readMinutes = (p: Post) =>
  Math.max(1, Math.round(p.body.join(' ').split(/\s+/).length / 200));
