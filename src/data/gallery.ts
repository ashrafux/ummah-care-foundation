import { IMG } from './images';

export interface Shot {
  src: string;
  alt: string;
  /** Cause slug, matching CAUSE_NAV in site.ts. */
  cause: string;
}

// Interleaved on purpose so the unfiltered view reads as a mix rather than
// eight blocks. Add new photos anywhere in this list; the counts, the filters
// and the grid all follow from it.
export const GALLERY: Shot[] = [
  { src: IMG.students, alt: 'Scholarship recipients with their certificates', cause: 'educational-aid' },
  { src: IMG.sewing, alt: 'Handing over a sewing machine to a beneficiary', cause: 'self-reliance' },
  { src: IMG.wheelchair, alt: 'A patient receiving a wheelchair', cause: 'medical-care' },
  { src: IMG.winterClothing, alt: 'Winter clothing distribution in the north', cause: 'winter-clothes' },
  { src: IMG.foodDistribution, alt: 'Volunteers handing out food packs', cause: 'food-assistance' },
  { src: IMG.waterCheck, alt: 'A newly installed tubewell in the village', cause: 'water-aid' },
  { src: IMG.community, alt: 'Community support programme', cause: 'humanitarian-aid' },
  { src: IMG.relief, alt: 'Emergency relief handover', cause: 'emergency-assistance' },

  { src: IMG.storyMonowara, alt: 'Monowara Akter after her BCS result', cause: 'educational-aid' },
  { src: IMG.aoaSelfReliance, alt: 'Small business capital handed to a family', cause: 'self-reliance' },
  { src: IMG.aoaMedical, alt: 'Medical treatment support in hospital', cause: 'medical-care' },
  { src: IMG.winterDistribution, alt: 'Blankets being distributed on a cold morning', cause: 'winter-clothes' },
  { src: IMG.foodCheck, alt: 'Rice and essentials ready for delivery', cause: 'food-assistance' },
  { src: IMG.aoaWater, alt: 'Villagers collecting safe drinking water', cause: 'water-aid' },
  { src: IMG.aoaHumanitarian, alt: 'Families receiving humanitarian support', cause: 'humanitarian-aid' },
  { src: IMG.fieldWork, alt: 'Reaching flood-affected families by boat', cause: 'emergency-assistance' },

  { src: IMG.eduAid2, alt: 'A student receiving a monthly scholarship', cause: 'educational-aid' },
  { src: IMG.goats, alt: 'Livestock handed over under the self-reliance programme', cause: 'self-reliance' },
  { src: IMG.storyRagib1, alt: 'Ragib Ishraq during treatment', cause: 'medical-care' },
  { src: IMG.aoaWinter, alt: 'Warm clothes packed for distribution', cause: 'winter-clothes' },
  { src: IMG.aoaFood, alt: 'Food assistance reaching a household', cause: 'food-assistance' },
  { src: IMG.humanitarian2, alt: 'Marriage support for a family in need', cause: 'humanitarian-aid' },
  { src: IMG.emergency2, alt: 'Relief packages after a flood', cause: 'emergency-assistance' },

  { src: IMG.eduAid3, alt: 'Students supported through school and college', cause: 'educational-aid' },
  { src: IMG.selfReliance2, alt: 'A rickshaw-van handed to its new owner', cause: 'self-reliance' },
  { src: IMG.medical2, alt: 'Surgery costs covered for a low-income patient', cause: 'medical-care' },
  { src: IMG.storyRagib2, alt: 'Ragib Ishraq on the way to recovery', cause: 'medical-care' }
];
