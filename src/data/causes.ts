import { IMG } from './images';

export type Pair = [title: string, body: string];

export interface Cause {
  slug: string;
  crumb: string;
  title: string;
  tiles: [string, string, string];
  intro: string;
  goals: Pair[];
  plans: Pair[];
  extraTitle: string;
  extra: string[];
}

export const CAUSES: Cause[] = [
  {
    slug: 'educational-aid',
    crumb: 'Educational Aid',
    title: 'Keeping talented students in school, college and university',
    tiles: [IMG.students, IMG.sewing, IMG.wheelchair],
    intro: "\"Quality education is the foundation of health, wealth, and overall well-being. It empowers individuals to lead healthy, productive lives. We are committed to providing monthly scholarships to students at various levels—Primary, Secondary, and Higher School, as well as College and University—ensuring access to higher education for all. Currently, we have helped over 200 students across Bangladesh, and we aim to expand our reach further. Our goal is to support 1000 students within the next three years and foster a generation of educated, skilled individuals who will contribute to the socio-economic development of their communities.\"",
    goals: [
      ['Increase Scholarship Coverage', 'Expand the scholarship program to support 1,000 students over the next three years, ensuring equal opportunities across all regions of Bangladesh.'],
      ['Focus on Diverse Education Levels', 'Provide targeted scholarships for different education levels, including Primary, Secondary, Higher School, College, and University, with an emphasis on students from underprivileged backgrounds.'],
      ['Promote Gender Equality in Education', 'Ensure a balanced distribution of scholarships to both male and female students, supporting the educational advancement of girls and helping to close the gender gap in access to education.'],
      ['Skill Development', 'Alongside traditional education, emphasize skill-based learning and vocational training to prepare students for the workforce and foster entrepreneurship.']
    ],
    plans: [
      ['Partnerships with Educational Institutions', 'Establish collaborations with schools, colleges, and universities to streamline the scholarship process, offer mentorship programs, and create educational workshops for scholarship recipients.'],
      ['Community Engagement', 'Engage local communities and create awareness about the importance of education by organizing seminars, events, and outreach programs.'],
      ['Monitoring and Evaluation', 'Implement a monitoring system to track students’ academic progress and overall development, allowing for adjustments to the program based on performance and feedback.'],
      ['Expansion of Support Services', 'Beyond scholarships, provide additional support like counseling, career guidance, and access to online educational resources to enhance students’ learning experiences.'],
      ['Digital Learning Integration', 'Invest in digital education tools and platforms to bridge the gap between rural and urban students, ensuring that everyone has access to high-quality educational resources.']
    ],
    extraTitle: 'Our Achievements in Educational Support',
    extra: [
      'We provide monthly scholarships to students across schools, colleges, and universities in Bangladesh, from the University of Dhaka to Rajshahi University and beyond.',
      'Many scholars have graduated and are now employed. We remain dedicated to reaching underprivileged students in every institution.'
    ]
  },
  {
    slug: 'self-reliance',
    crumb: 'Self-Reliance',
    title: 'Tools and capital so families can earn their own living',
    tiles: [IMG.sewing, IMG.community, IMG.foodDistribution],
    intro: 'There are lots of people around us who have a passion to improve their position but may not be able to make that change because of financial constraints. We want to stand by the side of such needy but energetic people, young and women. We want to make them self-sufficient by distributing sewing machines, agricultural implements, rickshaw-vans, goats, or other low-cost but useful tools. Following our goals we have started distributing sewing machines, agricultural implements, rickshaw-vans, goats, funds for small businesses & many more. We have already helped more than 100 individuals & families under this project.',
    goals: [
      ['Empowering 500+ Beneficiaries', 'Scale up the project to support at least 500 individuals and families in the next three years by providing essential tools and resources to help them become self-reliant.'],
      ['Focus on Women and Youth', 'Prioritize empowering women and young individuals by providing them with the tools and training necessary to start small businesses or enhance their livelihoods, promoting gender equality and youth development.'],
      ['Sustainable Livelihood Programs', 'Implement programs that focus on sustainable income sources such as sewing, small-scale farming, and eco-friendly transportation to ensure long-term economic stability for beneficiaries.'],
      ['Strengthening Small Enterprises', 'Support the creation of small, family-run businesses by offering micro-loans and resources, empowering beneficiaries to become financially independent and contribute to local economies.']
    ],
    plans: [
      ['Expansion of Resource Distribution', 'Broaden the scope of distributed tools, including new categories like poultry farming kits, fishing equipment, or small-scale solar-powered devices, to diversify the income sources of beneficiaries.'],
      ['Skills Development Workshops', 'Organize training sessions on entrepreneurship, financial literacy, and technical skills to help beneficiaries maximize the use of the resources provided, turning them into viable business opportunities.'],
      ['Partnerships with Local & International Organizations', 'Collaborate with local & international community organizations, NGOs, and microfinance institutions to enhance the reach of the program and create a supportive ecosystem for beneficiaries.'],
      ['Regular Monitoring and Support', 'Establish a system to regularly check on the progress of beneficiaries, offering continuous mentorship and additional support where necessary to ensure their long-term success.'],
      ['Impact Measurement and Scaling', 'Develop a mechanism to measure the social and economic impact of the project, using the insights to scale the initiative and refine the approach based on data-driven results.']
    ],
    extraTitle: 'Building Livelihoods, Restoring Dignity',
    extra: [
      'We have provided rickshaws, sewing machines, livestock, and small-business capital to families who had the will to work but not the means.',
      'Each recipient now earns a steady income and supports their family with dignity, free from dependence on aid.'
    ]
  },
  {
    slug: 'medical-care',
    crumb: 'Medical Care',
    title: 'Treatment for patients whose families cannot afford it',
    tiles: [IMG.wheelchair, IMG.relief, IMG.students],
    intro: 'Getting proper treatment is one of the biggest challenges for low-income people in a society. They may somehow manage essential food and clothings, but are often left behind in terms of health care or proper treatment. Ummah Care Foundation takes necessary initiatives to implement the services in some disadvantaged areas of Bangladesh in upcoming days. We have already provided a good number of financial support for medical care to some financially insolvent people for better treatment. We have already helped more than 100 patients with medical financial care.',
    goals: [
      ['Expand Medical Support', 'Increase the number of beneficiaries, aiming to provide financial assistance for medical treatment to at least 500 patients within the next three years.'],
      ['Focus on Critical Healthcare Needs', 'Prioritize support for critical healthcare services, including surgeries, chronic disease treatments, maternal and child health care, and emergency medical needs for low-income individuals.'],
      ['Partnerships with Healthcare Providers', 'Collaborate with hospitals, clinics, and healthcare professionals to secure discounted or free medical services for beneficiaries, ensuring comprehensive care for patients in need.'],
      ['Raise Awareness on Health', 'Promote health awareness and preventive care in disadvantaged communities to reduce the overall burden of disease, focusing on education about hygiene, nutrition, and regular health check-ups.']
    ],
    plans: [
      ['Mobile Health Clinics', 'Launch mobile health clinics to provide free or low-cost basic medical services in rural and underserved areas, ensuring that healthcare reaches even the most remote communities.'],
      ['Emergency Medical Fund', 'Establish an emergency medical fund to provide rapid financial support for urgent and life-threatening health conditions, ensuring timely treatment for those who need immediate care.'],
      ['Monitoring and Follow-up Support', 'Implement a system to track the recovery and well-being of patients who have received financial support, offering additional assistance if needed and evaluating the long-term impact of the program.'],
      ['Health Education Programs', 'Organize community-based health education programs to teach preventive health practices, provide nutritional guidance, and encourage regular medical check-ups, helping to reduce preventable diseases in these areas.']
    ],
    extraTitle: 'Supporting Health, Saving Lives:',
    extra: [
      'Providing essential medical financial aid to over 100 low-income patients, ensuring access to life-saving treatments-'
    ]
  },
  {
    slug: 'winter-clothes',
    crumb: 'Winter Clothes',
    title: 'Warmth for families through the coldest months',
    tiles: [IMG.winterDistribution, IMG.foodDistribution, IMG.community],
    intro: 'In most parts of the world, winter is welcomed by the privileged, affluent people as a gleeful season. However for those living in poverty-stricken regions, the cold season brings a lot of suffering for them.In Winter, it is important to keep warm. However there are many out there who are unprepared for the winter season. For these families living in impoverished countries, they are unable to afford warm clothes for the winter. Ummah Care Foundation has already provided winter clothes to around more than 500 families & individuals.',
    goals: [
      ['Expand Winter Relief Coverage', 'Increase the distribution of winter clothing to at least 2,000 families and individuals in poverty-stricken regions over the next two years.'],
      ['Target Remote and Vulnerable Areas', 'Prioritize outreach to remote and underserved communities where access to winter essentials is most limited, ensuring equitable distribution.'],
      ['Raise Awareness on Winter Preparedness', 'Educate communities on the importance of winter preparedness, including how to protect themselves from cold-related illnesses.'],
      ['Collaborate with Local Organizations', 'Partner with local NGOs and community groups to streamline the distribution of winter clothing and reach a larger audience.']
    ],
    plans: [
      ['Annual Winter Clothing Drive', 'Establish an annual winter clothing drive, encouraging local communities and international supporters to donate new or gently used winter essentials such as blankets, jackets, and warm accessories.'],
      ['Winter Relief Packages', 'Expand the initiative to include not only warm clothing but also blankets, shoes, and other essential items in the winter relief packages to ensure comprehensive support for families.'],
      ['Long-Term Solutions for Cold Protection', 'Explore sustainable solutions, such as affordable heating methods or insulated shelters, to help families stay warm throughout the winter without relying solely on clothing donations.'],
      ['Community-Wide Outreach Campaigns', 'Launch community-based awareness campaigns to spread the word about available winter support services and to help identify the most vulnerable households in need.']
    ],
    extraTitle: 'Warmth for the Winter',
    extra: [
      'Providing winter clothing to over 1000 families and individuals, ensuring protection from the harsh cold.'
    ]
  },
  {
    slug: 'food-assistance',
    crumb: 'Food Assistance',
    title: 'A full meal for every home that goes without',
    tiles: [IMG.foodDistribution, IMG.winterDistribution, IMG.sewing],
    intro: 'Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function. The energy in food is measured in units called calories. Ummah Care Foundation is committed to providing basic food assistance to the people who are in lack of basic food. Ummah Care Foundation has already provided basic food assistance to around more than 900 families & individuals.',
    goals: [
      ['Expand Food Assistance Reach', 'Increase the number of beneficiaries by providing basic food support to at least 2,000 families over the next two years.'],
      ['Ensure Nutritional Support', 'Focus on delivering not only basic food items but also nutrient-rich options to ensure proper growth, health, and well-being for the most vulnerable populations, including children and the elderly.'],
      ['Collaboration with Food Suppliers', 'Establish partnerships with local farms, food producers, and retailers to secure consistent food supplies at reduced costs for ongoing distribution efforts.'],
      ['Seasonal and Emergency Food Aid', 'Provide seasonal food assistance, especially during times of crisis or emergencies like floods, natural disasters, or pandemics, to prevent food insecurity in high-risk areas.']
    ],
    plans: [
      ['Sustainable Food Programs', 'Develop long-term, sustainable food programs such as community gardens, food banks, or cooperative farming projects to empower communities to grow their own food.'],
      ['Nutritional Education Campaigns', 'Launch educational programs focusing on nutrition, food hygiene, and cooking techniques to help beneficiaries make the most of the food they receive.'],
      ['Regular Food Distribution Drives', 'Establish regular food distribution drives to ensure consistent access to basic food essentials for low-income families, especially during periods of high demand such as Ramadan, Eid, and other festive seasons.'],
      ['Monitoring and Impact Assessment', 'Implement a system to monitor the health and nutritional impact of the food assistance program, adjusting the initiative based on feedback and outcomes to ensure maximum effectiveness.']
    ],
    extraTitle: 'Providing Essential Food Support',
    extra: [
      'Delivering basic food assistance to over 900 families and individuals, ensuring access to essential nutrition for those in need.'
    ]
  },
  {
    slug: 'water-aid',
    crumb: 'Water Aid',
    title: 'Safe drinking water for every village we reach',
    tiles: [IMG.goats, IMG.wheelchair, IMG.relief],
    intro: 'Clean water is one of the most valuable resources for life, essential for preventing waterborne diseases, improving hygiene, and ensuring overall health and well-being. Without access to clean water, communities face numerous health challenges. To combat this, Ummah Care Foundation has taken steps to provide tubewells in various areas, ensuring a steady supply of safe, clean water for drinking, cooking, and sanitation. These efforts are not only improving the health of communities but also fostering better hygiene practices and supporting the long-term well-being of families in need.',
    goals: [
      ['Increase Access to Clean Water', 'Install at least 50 more tubewells in underserved communities over the next three years, ensuring that more families have access to clean, safe water.'],
      ['Focus on Water-Scarce Areas', 'Prioritize regions where access to clean water is limited, targeting rural and remote communities that are most vulnerable to waterborne diseases.'],
      ['Promote Hygiene and Sanitation', 'Alongside the provision of clean water, implement hygiene and sanitation education programs to help communities understand the importance of proper water use, handwashing, and sanitation practices.'],
      ['Water Quality Monitoring', 'Establish a regular water quality monitoring system to ensure that the tubewells continue providing safe, potable water free from contamination.']
    ],
    plans: [
      ['Sustainable Water Solutions', 'Explore alternative, sustainable water solutions like rainwater harvesting or solar-powered water pumps to provide clean water in areas where groundwater may not be sufficient.'],
      ['Community Engagement', 'Involve local communities in the management and maintenance of the tubewells to ensure their long-term functionality, while also creating a sense of ownership and responsibility.'],
      ['Expanding Sanitation Infrastructure', 'Complement the tubewell installations with additional sanitation infrastructure, such as building latrines and waste disposal systems, to further improve hygiene in the target communities.'],
      ['Emergency Water Supply', 'Establish an emergency water supply program to respond quickly to water shortages or contamination incidents, ensuring that affected communities have temporary access to safe water until permanent solutions are restored.']
    ],
    extraTitle: 'Ensuring Access to Clean Water',
    extra: [
      'Providing some tubewells to underserved communities, offering safe and reliable water to improve health and hygiene.'
    ]
  },
  {
    slug: 'humanitarian-aid',
    crumb: 'Humanitarian Aid',
    title: 'Standing beside families in their hardest moments',
    tiles: [IMG.community, IMG.goats, IMG.winterDistribution],
    intro: "We offer comprehensive humanitarian aid to individuals and families facing hardships, from assisting poor families with marriage expenses to providing critical support in times of crisis. Our mission is to uplift vulnerable lives, restore dignity, and instill hope for a brighter future. Whether it's financial assistance for essential life events or rehabilitation services for those in need, we aim to empower people and help them rebuild their lives with resilience and optimism. Through targeted interventions, we seek to address both immediate needs and long-term recovery, ensuring a lasting impact.",
    goals: [
      ['Expand Marriage Assistance Program', 'Increase the scope of financial support for marriage expenses to help at least 100 more families in the next two years, ensuring that even the poorest families can celebrate this important life event with dignity.'],
      ['Strengthen Crisis Response', 'Create a dedicated fund for emergency aid that provides rapid and effective support for families facing unexpected hardships, such as natural disasters, accidents, or medical emergencies.'],
      ['Broaden Rehabilitation Services', 'Extend rehabilitation services to include a wider range of assistance, such as psychological counseling, vocational training, and social reintegration programs, reaching at least 200 individuals in the next three years.'],
      ['Collaborate with Local Communities', 'Work closely with community leaders and organizations to identify families in need of marriage assistance and crisis support, ensuring aid is distributed equitably and efficiently.']
    ],
    plans: [
      ['Marriage Assistance Awareness Campaign', 'Launch an awareness campaign to spread the word about the marriage assistance program, encouraging more families to come forward and apply for aid, especially in remote areas.'],
      ['Long-Term Support for Crisis Victims', 'Develop a long-term recovery plan for families affected by crises, providing ongoing assistance beyond immediate relief, including housing, education, and employment support.'],
      ['Build a Sustainable Rehabilitation Network', 'Partner with local rehabilitation centers, NGOs, and healthcare providers to create a sustainable network of services that offer comprehensive care for individuals recovering from illness, injury, or trauma.'],
      ['Monitor and Evaluate Impact', 'Establish a monitoring system to track the effectiveness of marriage assistance, crisis intervention, and rehabilitation services, ensuring that the support provided leads to measurable improvements in the lives of beneficiaries.']
    ],
    extraTitle: 'Standing Beside Families in Hardship',
    extra: [
      'From covering marriage expenses for poor families to urgent support in moments of crisis, we respond wherever hardship strikes.',
      'Hundreds of families have found relief and hope through timely, compassionate assistance.'
    ]
  },
  {
    slug: 'emergency-assistance',
    crumb: 'Emergency Assistance',
    title: 'Relief within days when disaster strikes',
    tiles: [IMG.relief, IMG.students, IMG.goats],
    intro: '"The Emergency Assistance Program is designed to provide critical support to individuals and families facing financial crises due to natural disasters such as floods and earthquakes. When disaster strikes, many people are left struggling to meet their basic needs. Our program offers immediate aid in the form of essential food, financial assistance, and access to services such as rent, utilities, clothing, transportation, and medical care. These short-term interventions are crucial for helping people rebuild their lives after emergencies. To date, we have provided much-needed support to over 600 flood-affected individuals and families, and our efforts continue as we work tirelessly to ensure that no one is left behind in times of crisis."',
    goals: [
      ['Expand Emergency Response Capacity', 'Increase the number of beneficiaries, aiming to provide emergency assistance to at least 1,200 individuals and families affected by natural disasters over the next two years.'],
      ['Build a Disaster Relief Network', 'Establish partnerships with local and international organizations to create a robust disaster relief network, allowing for quicker and more efficient mobilization of resources in times of crisis.'],
      ['Broaden the Scope of Assistance', 'Extend the range of services offered to include temporary housing, mental health support, and legal aid for disaster victims, ensuring comprehensive care during recovery.'],
      ['Focus on Disaster Preparedness', 'Launch a disaster preparedness program in high-risk areas, educating communities on how to protect themselves and their assets, while also training volunteers to respond effectively in emergencies.']
    ],
    plans: [
      ['Create a Disaster Relief Fund', 'Establish a dedicated disaster relief fund to ensure immediate financial assistance is available when natural disasters occur, reducing delays in delivering aid to affected individuals and families.'],
      ['Long-Term Recovery Support', 'Develop long-term recovery programs that help disaster victims rebuild their homes, regain employment, and access healthcare, focusing on sustainable recovery beyond immediate relief efforts.'],
      ['Mobile Response Units', 'Deploy mobile response units equipped with essential supplies, such as food, clothing, water, and medical kits, to quickly reach affected areas, particularly in remote or hard-to-access regions.'],
      ['Disaster Risk Reduction Campaigns', 'Implement community-based disaster risk reduction initiatives, including flood-resistant infrastructure projects, early warning systems, and emergency drills to minimize the impact of future disasters.']
    ],
    extraTitle: 'Emergency Relief in Times of Crisis',
    extra: [
      'Providing vital food, financial aid, and essential services to families affected by natural disasters like floods and earthquakes, helping them rebuild their lives.'
    ]
  }
];
