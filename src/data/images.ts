// Central image map. Photos bundled with the handoff are served from /public/images;
// the rest are hotlinked from the live WordPress media library. Swap any entry here
// once the remaining media is copied into /public/images.
const WP = 'https://wedevs.foundation/wp-content/uploads';

export const IMG = {
  // Local photos
  students: '/images/IMG_20240903_101856.jpg',
  sewing: '/images/IMG_20240902_164239.jpg',
  wheelchair: '/images/IMG_20240903_103859.jpg',
  winterDistribution: '/images/IMG_20240902_163919-scaled-1.jpg',
  foodDistribution: '/images/IMG_20240903_105703.jpg',
  goats: '/images/IMG_20240903_102902-scaled-1.jpg',
  community: '/images/IMG_20240902_165353.jpg',
  relief: '/images/IMG_20240903_103056-scaled-1.jpg',
  winterClothing: '/images/Winter-Clothing-1.jpg',
  paymentBanner: '/images/Payment-Banner_5-1024x34.jpg',
  sunset: '/images/sunset-bg.jpg',
  logoDark: '/images/logo-dark.png',
  logoLight: '/images/logo-light.png',

  // Remote (not in the handoff bundle)
  fieldWork: `${WP}/2024/09/IMG_20240902_163503-scaled-1.jpg`,
  foodCheck: `${WP}/2024/10/%E2%9C%853-1.jpg`,
  waterCheck: `${WP}/2024/10/%E2%9C%859.jpg`,
  storyRagib1: `${WP}/2024/10/%E2%9C%856.jpg`,
  storyRagib2: `${WP}/2024/10/%E2%9C%857.jpg`,
  storyMonowara: `${WP}/2025/12/photo_2025-12-03_12-48-09.jpg`,
  aoaSelfReliance: `${WP}/2024/08/photo_6210859178210218302_y.jpg`,
  aoaMedical: `${WP}/2024/09/IMG_20240903_111105.jpg`,
  aoaWinter: `${WP}/2024/09/IMG-20240316-WA0000.jpg`,
  aoaFood: `${WP}/2024/08/IMG_20240610_132833_820.jpg`,
  aoaWater: `${WP}/2024/09/IMG_20240903_115525.jpg`,
  aoaHumanitarian: `${WP}/2024/09/IMG_20240903_103251.jpg`,
  eduAid2: `${WP}/2024/10/%E2%9C%858.jpg`,
  eduAid3: `${WP}/2024/09/IMG_20240903_101856-1.jpg`,
  selfReliance2: `${WP}/2024/10/%E2%9C%852.jpg`,
  medical2: `${WP}/2024/10/%E2%9C%855.jpg`,
  humanitarian2: `${WP}/2024/10/%E2%9C%8510.jpg`,
  emergency2: `${WP}/2024/10/%E2%9C%85-1.jpg`,
  avatars: [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces'
  ]
} as const;
