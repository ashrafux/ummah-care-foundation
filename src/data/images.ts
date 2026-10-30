// Central image map. Every photograph is served from /public/images; the originals
// supplied by the foundation live outside the published folder in /source-images.
// Swap a photo by pointing its key at a different file — nothing else needs editing.

export const IMG = {
  // --- Education ---
  students: '/images/classroom-gift.jpg',
  eduAid2: '/images/classroom-gift.jpg',
  eduAid3: '/images/wheelchair-campus.jpg',

  // --- Medical care ---
  wheelchair: '/images/wheelchair-campus.jpg',
  aoaMedical: '/images/child-hospital-visit.jpg',
  medical2: '/images/child-hospital-visit.jpg',

  // --- Self-reliance ---
  sewing: '/images/sewing-machine-handover.jpg',
  goats: '/images/courtyard-man-goat.jpg',
  aoaSelfReliance: '/images/relief-ride-van.jpg',
  selfReliance2: '/images/street-food-stall.jpg',

  // --- Winter clothing ---
  winterDistribution: '/images/quilt-distribution-group.jpg',
  winterClothing: '/images/quilt-distribution-group.jpg',
  aoaWinter: '/images/quilt-distribution-group.jpg',

  // --- Flood relief: food, water and emergency ---
  fieldWork: '/images/flood-relief-village.jpg',
  relief: '/images/flood-relief-village.jpg',
  emergency2: '/images/flood-relief-village.jpg',
  waterCheck: '/images/flood-relief-village.jpg',
  aoaWater: '/images/flood-relief-village.jpg',
  foodDistribution: '/images/flood-relief-package.jpg',
  foodCheck: '/images/flood-relief-package.jpg',
  aoaFood: '/images/flood-relief-package.jpg',

  // --- Humanitarian aid ---
  community: '/images/foundation-handover-moment.jpg',
  humanitarian2: '/images/foundation-handover-moment.jpg',
  aoaHumanitarian: '/images/office-envelope-handover.jpg',

  // --- Success stories ---
  storyRagib1: '/images/wheelchair-campus.jpg',
  storyRagib2: '/images/classroom-gift.jpg',
  storyMonowara: '/images/sewing-machine-handover.jpg',

  // --- Brand and chrome (no photography) ---
  logoDark: '/images/logo-dark.svg',
  logoLight: '/images/logo-light.svg',
  paymentBanner: '/images/Payment-Banner_5-1024x34.jpg',
  sunset: '/images/sunset-bg.jpg',

  // Face crops taken from the photographs above, for the membership avatar stack.
  avatars: [
    '/images/avatar-1.jpg',
    '/images/avatar-2.jpg',
    '/images/avatar-3.jpg',
    '/images/avatar-4.jpg'
  ]
} as const;
