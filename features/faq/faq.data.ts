/**
 *
 * ---
 * File:
 * features/faq/faq.data.ts
 *
 * Description:
 * Professional FAQ content for Just Wax by Kim.
 *
 * Updates:
 * • Rewritten with original luxury studio messaging
 * • Split into Before Waxing and After Wax Care sections
 * • Improved client education and reassurance
 *
 * ---
 *
 */

import type {
  FAQItemType,
} from "./faq.types";


export const BEFORE_WAXING_FAQ: FAQItemType[] = [

{
  id: "before-1",

  question:
    "What should I share with my Esthetician before my appointment?",

  answer:
    "Your comfort and skin health are our top priorities. Before your service, please let Kim know about any medications, skincare treatments, or products you are currently using. Certain ingredients such as Retin-A, retinoids, Accutane, exfoliating acids, or medications that affect skin sensitivity may require special consideration before waxing."
},


{
  id: "before-2",

  question:
    "How should I prepare before my waxing appointment?",

  answer:
    "For the best waxing results, allow your hair to grow approximately 1/4 inch before your appointment. Avoid shaving or trimming beforehand, as shorter hair may not be long enough for effective removal. We also recommend avoiding tanning, hot tubs, excessive heat exposure, and heavy skincare products immediately before your service."
},


{
  id: "before-3",

  question:
    "Are there skincare products that may affect my waxing service?",

  answer:
    "Yes. Some skincare products can increase skin sensitivity and make waxing more uncomfortable. Please inform Kim if you use products containing retinoids, AHAs, glycolic acid, chemical exfoliants, prescription acne treatments, or other active ingredients. This allows us to customize your service and protect the integrity of your skin."
},


{
  id: "before-4",

  question:
    "How should I prepare for a bikini or Brazilian wax?",

  answer:
    "For optimal results, hair should be at least 1/4 inch long. If you currently shave, we recommend allowing several weeks of growth before your first waxing appointment. Between services, gentle exfoliation helps maintain smoother skin and supports healthy hair growth by reducing the chance of trapped hairs."
},


{
  id: "before-5",

  question:
    "What is the difference between Bikini, Extended Bikini, and Brazilian waxing?",

  answer:
    "A Bikini wax removes hair along the edges of the bikini line. An Extended Bikini provides additional cleanup beyond the traditional bikini area. A Brazilian wax removes hair from the front, bikini line, and back area, with customization available based on your personal preference. Kim will always discuss your desired look before beginning your service."
},


{
  id: "before-6",

  question:
    "What if I am nervous or this is my first wax?",

  answer:
    "First-time waxing guests often have questions or feel a little nervous, and that is completely normal. Kim creates a calm, private, and comfortable environment while explaining each step of the process. Your experience will always be personalized, professional, and performed at a pace that feels right for you."
},


{
  id: "before-7",

  question:
    "What sanitation practices do you follow?",

  answer:
    "Client safety is extremely important at Just Wax by Kim. We follow strict sanitation practices and use fresh applicators during services. Waxing tools are never reused between clients, ensuring a clean and professional experience every visit."
},


{
  id: "before-8",

  question:
    "Do you accept walk-in appointments?",

  answer:
    "Appointments are recommended to ensure availability and provide enough time for your personalized service. Walk-ins may be accommodated when openings are available, but scheduling ahead is the best way to reserve your preferred time."
},

];



export const AFTER_WAX_CARE_FAQ: FAQItemType[] = [

{
  id: "after-1",

  question:
    "How should I care for my skin after waxing?",

  answer:
    "The first 24 to 48 hours after waxing are important for allowing your skin to recover. Avoid hot tubs, saunas, swimming pools, excessive sweating, and activities that create friction on the treated area. Allow your skin time to calm before applying exfoliating products."
},


{
  id: "after-2",

  question:
    "How can I maintain smooth skin and prevent ingrown hairs?",

  answer:
    "Consistent exfoliation is one of the best ways to maintain smooth, healthy skin. After the first 48 hours following your appointment, gentle exfoliation 1 to 2 times per week can help remove dead skin cells and encourage healthy hair growth."
},


{
  id: "after-3",

  question:
    "When should I schedule my next waxing appointment?",

  answer:
    "Most guests return every 4 to 6 weeks depending on their individual hair growth cycle and the service performed. Maintaining a regular schedule helps create smoother results and allows hair to grow back softer over time."
},


{
  id: "after-4",

  question:
    "Why choose waxing instead of shaving?",

  answer:
    "Waxing removes hair from the root, providing longer-lasting smoothness compared to shaving. With consistent appointments, many guests notice softer regrowth and improved skin texture. Shaving only removes hair at the surface, which often leads to quicker regrowth and rougher texture."
},


{
  id: "after-5",

  question:
    "Is redness or sensitivity normal after waxing?",

  answer:
    "Mild redness, sensitivity, or small bumps can occasionally occur after waxing, especially for first-time guests. This is typically temporary as your skin adjusts. Following proper aftercare instructions and avoiding irritation helps your skin return to a smooth, comfortable state."
},

];
