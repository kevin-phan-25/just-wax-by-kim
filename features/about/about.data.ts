/**
 * --------------------------------------------------------------------------
 * File: features/about/about.data.ts
 *
 * Date: July 31, 2026
 *
 * Description:
 * Editorial content for the About section.
 *
 * Changes:
 * • Preserved Kim's original brand voice
 * • Added intentional paragraph separation
 * • Improved editorial text flow
 * • Highlighted esthetics + pharmacy background
 * • Updated credentials for trust building
 * --------------------------------------------------------------------------
 */

import type {
  Credential,
  AboutSection,
} from "./about.types";


export const aboutContent: AboutSection = {

  eyebrow:
    "Meet Kim",


  title:
    "Creating Moments Where Beauty Feels Effortless.",


  description: [
    `Hi, I’m Kim! 🙋🏻‍♀️ Welcome to Just Wax by Kim.`,

    `I graduated from Aveda Institute and have been a licensed esthetician since 2017. I have an eye for detail and specialize in full body waxing, always striving to make your experience as comfortable as possible. My 12-year background in pharmacy has given me a strong understanding of medications, contraindications, and proper aftercare, allowing me to provide safe, personalized services while helping clients feel comfortable, confident, and well cared for.`,

    `At Just Wax by Kim, I believe every client is unique. That’s why I take the time to understand your skin, your concerns, and your goals so every service is tailored to your individual needs. I strive to create a welcoming, judgment-free environment where you can feel completely at ease. I proudly provide a safe, respectful, and inclusive space where people of all genders, body types, skin tones, and backgrounds can feel completely at ease. Whether it’s your first wax or you’re a seasoned pro, I want every appointment to leave you feeling comfortable, cared for, and confident.`,

    `I truly appreciate every client who trusts me with their care, and I can’t wait to welcome you to my studio!`,
  ],

};


export const credentials: Credential[] = [

  {
    title:
      "Licensed Since 2017",

    description:
      "Professionally trained at Aveda with years of experience providing gentle, precise, and detail-focused waxing services.",
  },


  {
    title:
      "12 Years in Pharmacy",

    description:
      "A strong healthcare background supporting safe treatments, informed aftercare, and personalized recommendations.",
  },


  {
    title:
      "Comfort First",

    description:
      "Every appointment is thoughtfully designed to help you feel relaxed, respected, and completely at ease.",
  },


  {
    title:
      "Inclusive Studio",

    description:
      "A welcoming environment where guests of all genders, skin tones, body types, and backgrounds feel comfortable and confident.",
  },


  {
    title:
      "Personalized Care",

    description:
      "Every service is tailored around your skin, goals, and comfort to create a truly customized experience.",
  },

];
