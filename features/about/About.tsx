/**
 * -----------------------------------------------------------------------------
 * File: features/about/about.data.ts
 *
 * Date: July 29, 2026
 *
 * Description:
 * Static content for the About section.
 *
 * Changes:
 * • July 29, 2026 – Removed em dash from description
 * -----------------------------------------------------------------------------
 */
import type {
  Credential,
  AboutSection,
} from "./about.types";

export const aboutContent: AboutSection = {
  eyebrow: "Meet Kim",
  title: "Creating Moments Where Beauty Feels Effortless.",
  description:
    "Just Wax by Kim was created from a passion for helping every client feel confident, comfortable, and beautifully cared for. Each appointment is thoughtfully personalized, creating a calm, refined experience where you can relax, reconnect, and leave feeling your absolute best.",
};

export const credentials: Credential[] = [
  {
    title: "Thoughtful Experience",
    description:
      "Every detail is designed to create a comfortable, calming, and elevated experience.",
  },
  {
    title: "Expert Care",
    description:
      "A gentle and precise approach focused on beautiful results and lasting confidence.",
  },
  {
    title: "Personal Connection",
    description:
      "Every guest receives dedicated attention and care that feels personal and intentional.",
  },
];
