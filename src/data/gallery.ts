import { IMG } from './images';

export interface Shot {
  src: string;
  alt: string;
  /** Cause slug, matching CAUSE_NAV in site.ts. */
  cause: string;
}

// The gallery page groups these by cause, so the order here only decides the
// order within a cause. Add new photos anywhere in this list; the sections, the
// counts and the sidebar all follow from it.
//
// One entry per photograph the foundation has supplied, so no cause shows the
// same picture twice. Field photos from the foundation's own archive live in
// /public/images/gallery and are named after their cause.
const g = (name: string) => `/images/gallery/${name}.jpg`;

export const GALLERY: Shot[] = [
  { src: IMG.students, alt: 'A student receiving a gift in the classroom', cause: 'educational-aid' },
  { src: IMG.eduAid3, alt: 'A scholarship recipient on his college campus', cause: 'educational-aid' },

  { src: IMG.aoaMedical, alt: 'A child under treatment, with the hospital paperwork', cause: 'medical-care' },
  { src: g('medical-care-01'), alt: 'A man beside the wheelchair he received', cause: 'medical-care' },

  { src: IMG.aoaSelfReliance, alt: 'A young man on his new rickshaw van', cause: 'self-reliance' },
  { src: IMG.sewing, alt: 'Handing over a sewing machine to a beneficiary', cause: 'self-reliance' },
  { src: IMG.goats, alt: 'A goat handed over in the village courtyard', cause: 'self-reliance' },
  { src: IMG.selfReliance2, alt: 'A street food stall trading into the evening', cause: 'self-reliance' },
  { src: g('self-reliance-01'), alt: 'A family receiving a goat in the village', cause: 'self-reliance' },
  { src: g('self-reliance-02'), alt: 'A goat handed to a family in the village courtyard', cause: 'self-reliance' },
  { src: g('self-reliance-03'), alt: 'A couple with their new goat', cause: 'self-reliance' },
  { src: g('self-reliance-04'), alt: 'A woman receiving a goat with her handover papers', cause: 'self-reliance' },
  { src: g('self-reliance-05'), alt: 'A goat and its handover papers given to a woman', cause: 'self-reliance' },
  { src: g('self-reliance-06'), alt: 'A sewing machine handed to a beneficiary', cause: 'self-reliance' },
  { src: g('self-reliance-07'), alt: 'A goat handed over with its papers', cause: 'self-reliance' },
  { src: g('self-reliance-08'), alt: 'An elderly man receiving a goat', cause: 'self-reliance' },
  { src: g('self-reliance-09'), alt: 'An elderly man with his new goat', cause: 'self-reliance' },
  { src: g('self-reliance-10'), alt: 'A boxed sewing machine handed over', cause: 'self-reliance' },
  { src: g('self-reliance-11'), alt: 'A woman with the goat she received', cause: 'self-reliance' },
  { src: g('self-reliance-12'), alt: 'A goat handed to a woman in the courtyard', cause: 'self-reliance' },
  { src: g('self-reliance-13'), alt: 'A young girl receiving support in the village courtyard', cause: 'self-reliance' },
  { src: g('self-reliance-14'), alt: 'A girl and her father with their new goat', cause: 'self-reliance' },
  { src: g('self-reliance-15'), alt: 'A young girl with her family\'s goat', cause: 'self-reliance' },
  { src: g('self-reliance-16'), alt: 'Goats growing well months after the handover', cause: 'self-reliance' },
  { src: g('self-reliance-17'), alt: 'A vegetable seller at his market stall', cause: 'self-reliance' },

  { src: IMG.winterClothing, alt: 'Volunteers with quilts before a winter distribution', cause: 'winter-clothes' },
  { src: g('winter-clothes-01'), alt: 'A quilt handed to a man in winter', cause: 'winter-clothes' },
  { src: g('winter-clothes-02'), alt: 'Quilts handed out on a cold morning', cause: 'winter-clothes' },
  { src: g('winter-clothes-03'), alt: 'A winter clothing distribution indoors', cause: 'winter-clothes' },

  { src: IMG.community, alt: 'Families collecting relief bags from the relief truck', cause: 'humanitarian-aid' },
  { src: IMG.aoaHumanitarian, alt: 'Holding up the 2026 gift package list: food, essentials and winter items', cause: 'humanitarian-aid' },
  { src: g('humanitarian-aid-04'), alt: 'A donation handed over at the foundation office', cause: 'humanitarian-aid' },
  { src: g('humanitarian-aid-01'), alt: 'Members of a community meeting raising their forms', cause: 'humanitarian-aid' },

  { src: IMG.relief, alt: 'Relief reaching a flooded village by boat', cause: 'emergency-assistance' },
  { src: IMG.foodDistribution, alt: 'A relief package carried through the floodwater', cause: 'emergency-assistance' },
  { src: g('emergency-assistance-01'), alt: 'A boat loaded with relief bags in the floodwater', cause: 'emergency-assistance' },
  { src: g('emergency-assistance-02'), alt: 'Relief bags carried through a flooded village', cause: 'emergency-assistance' },
  { src: g('emergency-assistance-03'), alt: 'Volunteers handing relief to a flood-hit family', cause: 'emergency-assistance' },

  { src: IMG.aoaFood, alt: 'Food relief handed out to a flood-hit family', cause: 'food-assistance' },
  { src: g('food-assistance-01'), alt: 'Food packs loaded on a van for distribution', cause: 'food-assistance' },
  { src: g('food-assistance-02'), alt: 'Volunteers packing food packs', cause: 'food-assistance' },

  { src: IMG.aoaWater, alt: 'Bottled water and relief bags loaded on the distribution truck', cause: 'water-aid' },
  { src: g('water-aid-01'), alt: 'Bottled water and relief bags loaded for the flood zone', cause: 'water-aid' },
  { src: g('water-aid-02'), alt: 'Bottled water and supplies stored before distribution', cause: 'water-aid' }
];
