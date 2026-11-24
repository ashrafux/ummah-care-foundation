// What the donate box on each cause page offers: a short summary for the area,
// an outline icon, the people reached so far against the goal (both taken from the
// cause's own text in causes.ts), and the gifts a donor can pick.
//
// Gift prices are working figures for the design review. Replace them with the
// foundation's real costs before the page goes live.

export interface Gift {
  name: string;
  desc: string;
  price: number;
}

export interface Giving {
  summary: string;
  /** Path data for a 24 × 24 outline icon. */
  icon: string;
  /** People or families reached so far, and the goal. Left out where the cause gives no figures. */
  impact?: { done: number; goal: number; unit: string };
  gifts: Gift[];
}

export const GIVING: Record<string, Giving> = {
  'educational-aid': {
    summary: 'School fees, books and stipends so children from poor families stay in school.',
    icon: 'M22 10L12 5 2 10l10 5 10-5zM6 12.5V17c3 2.2 9 2.2 12 0v-4.5M22 10v5',
    impact: { done: 200, goal: 1000, unit: 'students' },
    gifts: [
      { name: 'Books and supplies', desc: 'A year of books, copies and pens for one student.', price: 1000 },
      { name: 'One month’s scholarship', desc: 'Keeps one student in class for a month.', price: 1500 },
      { name: 'Six months’ scholarship', desc: 'Half a year of study for one student.', price: 9000 }
    ]
  },
  'self-reliance': {
    summary: 'Livestock, sewing machines, rickshaws and training that help families earn a living.',
    icon: 'M12 21v-9M12 12c0-4.4 3-7 7.5-7 0 4.4-3 7-7.5 7zM12 15c0-3.3-2.3-5.5-6-5.5 0 3.3 2.3 5.5 6 5.5z',
    impact: { done: 100, goal: 500, unit: 'families' },
    gifts: [
      { name: 'A goat', desc: 'A first source of milk and income for a family.', price: 8000 },
      { name: 'A sewing machine', desc: 'Lets a woman earn from tailoring at home.', price: 12000 },
      { name: 'A rickshaw van', desc: 'A daily income for a father who wants to work.', price: 25000 }
    ]
  },
  'medical-care': {
    summary: 'Treatment, surgery and medicine for patients who cannot afford them.',
    icon: 'M6 3v5a4 4 0 008 0V3M10 12v2.5a4.5 4.5 0 009 0V13M19 13a2 2 0 100-4 2 2 0 000 4z',
    impact: { done: 100, goal: 500, unit: 'patients' },
    gifts: [
      { name: 'A month of medicine', desc: 'Regular medicine for one patient for a month.', price: 2000 },
      { name: 'Tests and check-ups', desc: 'Diagnosis for a patient who has put it off.', price: 5000 },
      { name: 'Towards surgery', desc: 'A share of an operation a family cannot afford.', price: 20000 }
    ]
  },
  'winter-clothes': {
    summary: 'Blankets and warm clothes for families facing the northern cold waves.',
    icon: 'M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M9 3.5l3 2 3-2M9 20.5l3-2 3 2',
    impact: { done: 500, goal: 2000, unit: 'families' },
    gifts: [
      { name: 'Warm quilt', desc: 'Keeps one person warm through the cold wave.', price: 600 },
      { name: 'Winter clothes for a child', desc: 'A jacket, cap and socks for one child.', price: 800 },
      { name: 'Winter pack for a family', desc: 'Quilts and warm clothes for a family of four.', price: 2500 }
    ]
  },
  'food-assistance': {
    summary: 'Food packs, iftar and meals for families who go without.',
    icon: 'M7 3v18M4 3v5a3 3 0 006 0V3M17 21V3c-2.2 1-3.5 3.5-3.5 7v3H17',
    impact: { done: 900, goal: 2000, unit: 'families' },
    gifts: [
      { name: 'Iftar for ten people', desc: 'One evening’s iftar for ten fasting people.', price: 1000 },
      { name: 'Food pack for a family', desc: 'Rice, lentils, oil and essentials for a family.', price: 1500 },
      { name: 'Ramadan food pack', desc: 'A month of essentials for a family in Ramadan.', price: 3000 }
    ]
  },
  'water-aid': {
    summary: 'Tube wells, pumps and clean water for villages without safe drinking water.',
    icon: 'M12 3s6.5 6.8 6.5 11.5a6.5 6.5 0 01-13 0C5.5 9.8 12 3 12 3zM9 15a3 3 0 003 3',
    gifts: [
      { name: 'Clean water for a family', desc: 'Drinking water for a family after a flood.', price: 500 },
      { name: 'Repair a tube well', desc: 'Brings a broken village tube well back to use.', price: 5000 },
      { name: 'A new tube well', desc: 'Safe water for a whole cluster of homes.', price: 25000 }
    ]
  },
  'humanitarian-aid': {
    summary: 'Shelter, marriage support and community projects where the need is greatest.',
    icon: 'M12 20.5s-7.5-4.6-7.5-10.4A4.3 4.3 0 0112 7.4a4.3 4.3 0 017.5 2.7c0 5.8-7.5 10.4-7.5 10.4z',
    gifts: [
      { name: 'Support in a crisis', desc: 'Urgent help for a family facing sudden hardship.', price: 5000 },
      { name: 'Help with a marriage', desc: 'A share of the costs for a poor family’s wedding.', price: 10000 },
      { name: 'Rebuild a home', desc: 'Towards repairing a home after hardship.', price: 20000 }
    ]
  },
  'emergency-assistance': {
    summary: 'Fast relief after floods, cyclones, fires and other disasters.',
    icon: 'M12 9v4M12 17h.01M10.3 3.9L2.6 17a2 2 0 001.7 3h15.4a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z',
    impact: { done: 600, goal: 1200, unit: 'families' },
    gifts: [
      { name: 'Clean water', desc: 'Safe drinking water for a family in the flood zone.', price: 500 },
      { name: 'Flood relief pack', desc: 'Food, water and essentials for one family.', price: 1500 },
      { name: 'Emergency cash support', desc: 'Helps a family rebuild after a disaster.', price: 5000 }
    ]
  },
  'orphan-care': {
    summary: 'Food, schooling and care for orphaned children.',
    icon: 'M12 21a9 9 0 100-18 9 9 0 000 18zM8.5 14s1.3 2 3.5 2 3.5-2 3.5-2M9 9.5h.01M15 9.5h.01',
    gifts: [
      { name: 'Food for a month', desc: 'A month of meals for one orphaned child.', price: 2000 },
      { name: 'Full care for a month', desc: 'Food, school and health for one child.', price: 4000 },
      { name: 'A year of schooling', desc: 'Fees, books and uniform for one child.', price: 6000 }
    ]
  },
  'imam-support': {
    summary: 'Monthly support for imams and muezzins who serve on a very low salary.',
    icon: 'M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z',
    gifts: [
      { name: 'Eid gift', desc: 'Eid clothes and food for an imam’s family.', price: 1500 },
      { name: 'A month for a muezzin', desc: 'One month’s support for a muezzin.', price: 2000 },
      { name: 'A month for an imam', desc: 'One month’s support for an imam.', price: 3000 }
    ]
  }
};

export const taka = (n: number) => '৳' + n.toLocaleString('en-US');
