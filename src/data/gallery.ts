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
// same picture twice. The two flood-relief photographs each appear in a second
// section because they are the only coverage of food and water aid so far.
export const GALLERY: Shot[] = [
  { src: IMG.students, alt: 'A student receiving a gift in the classroom', cause: 'educational-aid' },
  { src: IMG.eduAid3, alt: 'A scholarship recipient on his college campus', cause: 'educational-aid' },

  { src: IMG.aoaMedical, alt: 'A child under treatment, with the hospital paperwork', cause: 'medical-care' },
  { src: IMG.wheelchair, alt: 'A wheelchair recipient out on the campus path', cause: 'medical-care' },

  { src: IMG.aoaSelfReliance, alt: 'A battery-run van handed to its new owner', cause: 'self-reliance' },
  { src: IMG.sewing, alt: 'Handing over a sewing machine to a beneficiary', cause: 'self-reliance' },
  { src: IMG.goats, alt: 'A goat handed over in the village courtyard', cause: 'self-reliance' },
  { src: IMG.selfReliance2, alt: 'A street food stall trading into the evening', cause: 'self-reliance' },

  { src: IMG.winterClothing, alt: 'Volunteers with quilts before a winter distribution', cause: 'winter-clothes' },

  { src: IMG.community, alt: 'A handover at the Ummah Care Foundation office', cause: 'humanitarian-aid' },
  { src: IMG.aoaHumanitarian, alt: 'Assistance handed over at the foundation office', cause: 'humanitarian-aid' },

  { src: IMG.relief, alt: 'Relief reaching a flooded village by boat', cause: 'emergency-assistance' },
  { src: IMG.foodDistribution, alt: 'A relief package carried through the floodwater', cause: 'emergency-assistance' },

  { src: IMG.aoaFood, alt: 'Food relief handed out to a flood-hit family', cause: 'food-assistance' },

  { src: IMG.aoaWater, alt: 'Volunteers wading through floodwater to reach a home', cause: 'water-aid' }
];
