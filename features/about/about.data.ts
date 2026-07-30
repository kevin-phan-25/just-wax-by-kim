/**
 * -----------------------------------------------------------------------------
 * File: features/about/about.data.ts
 *
 * Date: July 29, 2026
 *
 * Description:
 * Editorial content for the About section.
 *
 * Changes:
 * • July 29, 2026 – Refined luxury brand messaging
 * • July 29, 2026 – Expanded description for editorial text flow
 * • July 29, 2026 – Updated credential language
 * -----------------------------------------------------------------------------
 */

import type {
  Credential,
  AboutSection,
} from "./about.types";


export const aboutContent: AboutSection = {
  eyebrow: "Meet Kim",

  title:
    "Creating Moments Where Beauty Feels Effortless.",

  description:
    "Just Wax by Kim was created from a passion for helping every client feel confident, comfortable, and beautifully cared for. Each appointment is thoughtfully personalized, creating a calm and refined experience where you can relax, reconnect, and leave feeling your absolute best. With attention to detail and a genuine commitment to care, every visit is designed to feel effortless, welcoming, and uniquely yours.",
};


export const credentials = [
  {
    title: "Thoughtful Experience",
    description:
      "Every appointment is intentionally designed to create a calm, comfortable, and elevated experience from beginning to end.",
  },

  {
    title: "Expert Care",
    description:
      "A gentle and precise approach focused on beautiful results, lasting confidence, and care tailored to each guest.",
  },

  {
    title: "Personal Connection",
    description:
      "Every guest receives dedicated attention and a personalized experience built on trust, comfort, and genuine connection.",
  },

  {
    title: "Premium Attention",
    description:
      "Every detail is thoughtfully considered, from personalized recommendations to a relaxing environment designed around your comfort.",
  },

  {
    title: "Confidence Through Care",
    description:
      "A refined approach that helps every guest feel confident, refreshed, and beautifully cared for long after each appointment.",
  },
];
