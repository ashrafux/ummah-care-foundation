import { IMG } from './images';

export interface Testimonial {
  name: string;
  role: string;
  quote?: string;
  photo?: boolean;
}

export const TESTIMONIAL_IMGS = [
  IMG.students, IMG.sewing, IMG.wheelchair, IMG.winterDistribution,
  IMG.foodDistribution, IMG.goats, IMG.community, IMG.relief
];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Rahima Khatun', role: 'Scholarship recipient, Rajshahi University', quote: '"The monthly scholarship let me stay in university when my family could no longer pay. I am now in my final year and the first graduate in our village."' },
  { name: 'Abdul Karim', role: 'Sewing machine recipient, Pabna', photo: true },
  { name: 'Md. Sohel Rana', role: 'Medical care beneficiary, Bogura', quote: '"Ummah Care paid for my surgery when no one else could. The team visited us in hospital and followed up for months. I can walk again."' },
  { name: 'Fatema Begum', role: 'Water aid beneficiary, Naogaon', quote: '"The tubewell in our para changed everything. Our children no longer fall sick from dirty water, and the women no longer walk an hour to fetch it."' },
  { name: 'Jamal Uddin', role: 'Rickshaw recipient, Rangpur', quote: '"With my own rickshaw I earn every day instead of renting one. My children are back in school and we eat three meals."' },
  { name: 'Salma Akter', role: 'Winter clothing beneficiary, Kurigram', photo: true },
  { name: 'Anwar Hossain', role: 'Flood relief beneficiary, Sylhet', quote: '"When the flood took our home, Ummah Care reached us within days with food and cash. We rebuilt because someone showed up."' },
  { name: 'Nasrin Sultana', role: 'Scholarship recipient, Dhaka College', quote: '"I was about to drop out after my father passed. The scholarship covered my fees and books, and today I teach at a primary school."' },
  { name: 'Rafiqul Islam', role: 'Livestock recipient, Chatmohar', quote: '"Two goats became a small herd in three years. It is the first time our family has had savings."' },
  { name: 'Hasina Parvin', role: 'Food assistance beneficiary, Bogura', quote: '"During Ramadan the food packs meant we could break our fast with dignity. My mother cried when the volunteers arrived."' }
];
