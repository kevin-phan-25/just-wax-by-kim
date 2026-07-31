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
 * • Refined luxury brand messaging
 * • Added true paragraph separation
 * • Improved editorial text flow
 * • Highlighted Kim's esthetics + pharmacy background
 * • Updated credentials for stronger trust building
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
    `Hi, I'm Kim! 🙋🏻‍♀️ Welcome to Just Wax by Kim.`,

    `I graduated from Aveda and have been licensed as an esthetician since 2017. I specialize in full-body waxing with a gentle, detail-oriented approach, always striving to make every appointment as comfortable as possible.`,

    `My 12-year background in pharmacy has given me a strong understanding of medications, contraindications, skin health, and proper aftercare. This knowledge allows me to provide safe, personalized treatments while helping every guest feel comfortable, confident, and well cared for.`,

    `At Just Wax by Kim, I believe every client is unique. I take the time to understand your skin, your concerns, and your goals so every service is thoughtfully tailored to your individual needs.`,

    `My goal is to create a warm, welcoming, and judgment-free environment where you can completely relax. I proudly provide a safe, respectful, and inclusive space for people of all genders, body types, skin tones, and backgrounds.`,

    `Whether it is your first wax or you are a longtime guest, every appointment is designed to leave you feeling comfortable, cared for, and confident.`,

    `Thank you for trusting me with your care. I look forward to welcoming you to my studio and helping you feel your very best.`,
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
