/**
 * ---
 * File: features/policies/policies.data.ts
 *
 * Description:
 * Studio policy content.
 *
 * Updated:
 * • Restored bullet formatting
 * • Optimized for editorial grid layout
 * • Improved luxury presentation
 *
 * ---
 */

import type { PolicySection } from "./policies.types";

export const POLICIES_DATA: PolicySection[] = [
  {
    id: "arrival",
    title: "Arrival & Timeliness",

    intro:
      "Please plan accordingly and allow additional time for travel, parking, and any unexpected delays so your appointment can begin smoothly.",

    paragraphs: [
      "Each appointment includes a 5-minute grace period. Beginning at the 6-minute mark, your appointment will be considered late and the following adjustments may apply.",
    ],

    bullets: [
      "6+ minutes late: A 25% rescheduling fee will be required to reserve a new appointment time.",
      "10+ minutes late: The appointment may be canceled, and 75% of the scheduled service total will be charged.",
    ],

    note:
      "I truly value your time and mine. I make every effort to stay on schedule so each guest receives the full attention and quality experience they deserve. Please keep in mind that Midtown parking can be unpredictable, so planning ahead is highly recommended.",
  },


  {
    id: "appointments",

    title: "Appointments & Scheduling",

    intro:
      "I understand that schedules can change. If you need to adjust your appointment, please provide as much notice as possible.",

    bullets: [
      "Cancellations or rescheduling requests must be made at least 24 hours before your scheduled appointment time.",
      "Appointments canceled or rescheduled within the 24-hour window will be subject to a 50% charge of the scheduled service total.",
    ],

    note:
      "This policy helps protect appointment availability and allows me to provide consistent service for every guest while respecting the time reserved specifically for you.",
  },


  {
    id: "hair-length",

    title: "Hair Length Requirements",

    paragraphs: [
      "For optimal waxing results, hair should be approximately ¼ inch long (about the length of a grain of rice or a sprinkle).",

      "If hair is too short, the wax may not properly grip the hair, which can result in an incomplete service. If hair is significantly longer than recommended, additional discomfort may occur.",

      "Please check the length of the area being serviced before your appointment. If the hair is not at the appropriate length, rescheduling may be recommended to ensure the best possible results.",
    ],
  },


  {
    id: "health-safety",

    title: "Health, Safety & Sanitation",

    intro:
      "Your comfort, safety, and well-being are always a priority.",

    bullets: [
      "Masks are optional. If you prefer to wear a mask during your appointment, I am happy to do the same.",
      "All treatment areas and equipment are thoroughly cleaned, sanitized, and disinfected between every guest.",
      "All single-use supplies are properly disposed of after each service.",
    ],

    note:
      "I maintain a clean, professional, and welcoming environment where every guest can feel comfortable and cared for.",
  },


  {
    id: "specialty-services",

    title: "Specialty Service Guidelines",

    intro:
      "Due to personal and professional boundaries, certain intimate waxing services are currently available only to female and gender-diverse clients who meet the following criteria:",

    bullets: [
      "Individuals who currently identify as women, regardless of sex assigned at birth.",
      "Individuals assigned female at birth, regardless of current gender identity.",
      "Individuals who are transitioning at any stage of their journey.",
    ],

    paragraphs: [
      "My goal is to provide an inclusive, respectful, and affirming environment for every client. If you have questions about whether a service is appropriate for you, please feel welcome to reach out.",

      "For services I am unable to provide, I am happy to recommend trusted professionals who may better accommodate your needs.",
    ],
  },


  {
    id: "respectful-environment",

    title: "Respectful Studio Environment",

    paragraphs: [
      "Just Wax By Kim is a space built on comfort, trust, professionalism, and respect.",

      "I welcome clients of all backgrounds and expect every guest to treat themselves, others, and the studio environment with kindness and consideration.",

      "Any inappropriate behavior, harassment, discrimination, or disrespectful conduct will not be tolerated. Services may be discontinued immediately, and appropriate action may be taken when necessary.",
    ],
  },
];
