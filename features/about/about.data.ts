/**
 * -----------------------------------------------------------------------------
 * File: about.data.ts
 *
 * Changes:
 * - July 28, 2026
 *   - Updated messaging to align with the new brand quote
 *
 * -----------------------------------------------------------------------------
 */
import type { Credential, AboutSection } from "./about.types";

export const aboutContent: AboutSection = {
  eyebrow: "Meet Kim",
  title: "Beauty, Comfort, and Confidence Through Every Detail.",
  description:
    "Just Wax by Kim was created with one goal: providing a luxury waxing experience where every client feels comfortable, confident, and cared for. Every detail is intentional — so you leave feeling vibrant, empowered, and beautifully renewed.",
};

export const credentials: Credential[] = [
  {
    title: "Luxury Experience",
    description:
      "Personalized services designed around comfort, quality, and how you want to feel.",
  },
  {
    title: "Professional Care",
    description:
      "A gentle, skilled approach focused on your confidence and long-lasting results.",
  },
  {
    title: "Personal Attention",
    description:
      "Every appointment receives thoughtful attention so you feel seen, cared for, and renewed.",
  },
];
