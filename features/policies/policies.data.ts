/**
 * -----------------------------------------------------------------------------
 * File: features/policies/policies.data.ts
 * -----------------------------------------------------------------------------
 */

import type { PolicySection } from "./policies.types";

export const POLICIES_DATA: PolicySection[] = [
  {
    id: "late-arrival",
    title: "Late Arrival Policy",
    intro:
      "Please plan accordingly and allow extra time for travel, parking, and any unexpected delays.",
    paragraphs: [
      "All appointments include a 6-minute grace period. Beginning at the 7-minute mark, your appointment will be considered late and the following fees will apply:",
    ],
    bullets: [
      "7+ minutes late: A 25% rescheduling fee will be required to book a new appointment.",
      "10+ minutes late: Your appointment will be automatically canceled, and 75% of the scheduled service cost will be charged.",
    ],
    note:
      "I value both your time and mine. I make every effort to stay on schedule so that each client receives the full attention and quality service they deserve. Arriving on time allows me to provide the best possible experience for you while respecting the appointments that follow. Please keep in mind that Midtown parking can be unpredictable. Plan ahead to allow enough time for parking and arrival.",
  },
  {
    id: "cancellation",
    title: "Cancellation & Rescheduling Policy",
    intro:
      "I understand that plans can change. If you need to cancel or reschedule, please provide as much notice as possible.",
    bullets: [
      "Cancellations or rescheduling requests must be made at least 12 hours before your scheduled appointment time.",
      "Appointments canceled or rescheduled within the 12-hour window will be subject to a 50% charge of the scheduled service total.",
    ],
    note:
      "This policy helps protect appointment availability and ensures fairness to both my business and other clients.",
  },
  {
    id: "hair-length",
    title: "Hair Length Requirements",
    paragraphs: [
      "For the best waxing results, hair must be approximately ¼ inch long (about the length of a grain of rice or a sprinkle).",
      "If the hair is too short, the wax may not properly grip the hair, resulting in an ineffective service. If the hair is significantly longer than recommended, additional discomfort may occur.",
      "Please check the hair length of the area being serviced before your appointment. If it is not at the appropriate length, please reschedule so we can provide the quality results you deserve.",
    ],
  },
  {
    id: "health-safety",
    title: "Health, Safety & Sanitation",
    intro: "Your comfort and safety are always a priority.",
    bullets: [
      "Masks are optional. If you prefer to wear a mask during your appointment, I am happy to do the same.",
      "All treatment areas and equipment are thoroughly cleaned, sanitized, and disinfected between every client.",
      "All single-use items are properly disposed of after each service.",
    ],
    note:
      "I maintain a clean, safe, and welcoming environment for every guest.",
  },
  {
    id: "genital-waxing",
    title: "Genital Waxing Policy",
    intro:
      "Due to personal and professional boundaries, genital waxing services are currently available only to female and gender-diverse clients who meet the following criteria:",
    bullets: [
      "Individuals who currently identify as women, regardless of sex assigned at birth.",
      "Individuals assigned female at birth, regardless of current gender identity.",
      "Individuals who are transitioning in any stage of their journey.",
    ],
    paragraphs: [
      "I strive to provide an inclusive, respectful, and affirming environment for all clients. If you have questions about whether a service is appropriate for you, please feel welcome to reach out.",
      "For services I am unable to provide, I am happy to recommend other trusted waxing professionals in the area.",
    ],
  },
  {
    id: "respectful-environment",
    title: "Respectful Environment Policy",
    paragraphs: [
      "Just Wax By Kim is a space built on comfort, trust, and respect.",
      "I welcome clients of all backgrounds and expect all guests to treat themselves, others, and the studio environment with kindness and respect.",
      "Any inappropriate behavior, harassment, discrimination, or disrespectful conduct will not be tolerated. Services may be discontinued immediately, and appropriate action will be taken if necessary.",
    ],
  },
];
