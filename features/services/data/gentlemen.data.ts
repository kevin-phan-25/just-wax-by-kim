/**
 *
 * ---
 * File:
 * features/services/data/gentlemen.data.ts
 *
 * Description:
 * Gentlemen waxing service catalog.
 *
 * Updates:
 * • Updated complete pricing catalog
 * • Renamed Bikini category to Male Brazilian
 * • Removed waxer tier pricing
 * • Simplified single-provider pricing
 * • Maintained reusable service structure
 *
 * ---
 *
 */

import type { Service } from "../services.types";


/**
 * Gentlemen landing page configuration
 */
export const gentlemenServicePage = {
  image:
    "/images/services/gentlement-view-pricing.jpg",

  title:
    "Gentlemen Waxing",

  description:
    "Professional waxing services designed for men who value confidence, comfort, and exceptional care.",
};



/**
 * Gentlemen service catalog
 */
export const gentlemenServices: Service[] = [


  // ---------------------------------------------------------------------------
  // MALE BRAZILIAN
  // ---------------------------------------------------------------------------

  {
    id: "gentlemen-new-client-brazilian",

    title: "New Client Brazilian",

    category: "Male Brazilian",

    description:
      "A first-time Brazilian waxing experience focused on comfort, precision, and smooth results.",

    price: "$115",

    duration: "30 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-repeat-brazilian",

    title: "Repeat Brazilian",

    category: "Male Brazilian",

    description:
      "A maintenance Brazilian service for returning guests seeking consistent smooth results.",

    price: "$100",

    duration: "30 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-butt-strip",

    title: "Butt Strip (Stand-Alone Service)",

    category: "Male Brazilian",

    description:
      "A stand-alone waxing service designed for a clean, polished finish.",

    price: "$40",

    duration: "10 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-buttocks",

    title: "Buttocks",

    category: "Male Brazilian",

    description:
      "Professional buttocks waxing for smooth, comfortable results.",

    price: "$50",

    duration: "10 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-buttocks-butt-strip",

    title: "Buttocks + Butt Strip",

    category: "Male Brazilian",

    description:
      "Complete waxing service combining buttocks and butt strip maintenance.",

    price: "$80",

    duration: "20 minutes",

    gender: "gentlemen",
  },



  // ---------------------------------------------------------------------------
  // FACE
  // ---------------------------------------------------------------------------

  {
    id: "gentlemen-brows",

    title: "Brows (Clean Up)",

    category: "Face",

    description:
      "A clean and natural eyebrow shaping service designed for a polished appearance.",

    price: "$35",

    duration: "10 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-nose",

    title: "Nose",

    category: "Face",

    description:
      "Quick and precise nose waxing for a clean, groomed appearance.",

    price: "$30",

    duration: "10 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-ears",

    title: "Ears",

    category: "Face",

    description:
      "Precision ear waxing for a refreshed, well-groomed appearance.",

    price: "$30",

    duration: "10 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-cheeks",

    title: "Cheeks",

    category: "Face",

    description:
      "Gentle cheek waxing to create a cleaner facial appearance.",

    price: "$20",

    duration: "5 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-neck",

    title: "Neck (Front or Back)",

    category: "Face",

    description:
      "Precision waxing for a cleaner neckline and finished appearance.",

    price: "$30",

    duration: "10 minutes",

    gender: "gentlemen",
  },



  // ---------------------------------------------------------------------------
  // BODY
  // ---------------------------------------------------------------------------

  {
    id: "gentlemen-underarms",

    title: "Underarms",

    category: "Body",

    description:
      "Smooth underarm waxing designed for lasting comfort and confidence.",

    price: "$35",

    duration: "10 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-full-chest-stomach",

    title: "Full Chest (Chest & Stomach)",

    category: "Body",

    description:
      "Complete chest and stomach waxing for a smooth, clean finish.",

    price: "$100",

    duration: "30 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-full-back-shoulders",

    title: "Full Back + Shoulders",

    category: "Body",

    description:
      "Full back and shoulder waxing for smooth, confident results.",

    price: "$105",

    duration: "30 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-full-back",

    title: "Full Back",

    category: "Body",

    description:
      "Professional full back waxing service for long-lasting smoothness.",

    price: "$85",

    duration: "20 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-half-back",

    title: "Half Back",

    category: "Body",

    description:
      "Targeted half-back waxing service.",

    price: "$50",

    duration: "15 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-stomach",

    title: "Stomach",

    category: "Body",

    description:
      "Smooth stomach waxing for a refined appearance.",

    price: "$50",

    duration: "15 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-chest-only",

    title: "Chest (Only)",

    category: "Body",

    description:
      "Chest waxing service focused on smooth and comfortable results.",

    price: "$50",

    duration: "15 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-full-legs",

    title: "Full Legs",

    category: "Body",

    description:
      "Complete leg waxing service for smooth, polished results.",

    price: "$180",

    duration: "1 hour",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-half-legs",

    title: "Half Legs",

    category: "Body",

    description:
      "Half-leg waxing service customized for your grooming needs.",

    price: "$95",

    duration: "30 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-full-arms",

    title: "Full Arms",

    category: "Body",

    description:
      "Complete arm waxing service for smooth, even results.",

    price: "$120",

    duration: "40 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-half-arms",

    title: "Half Arms",

    category: "Body",

    description:
      "Targeted arm waxing service.",

    price: "$65",

    duration: "20 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-shoulders",

    title: "Shoulders",

    category: "Body",

    description:
      "Shoulder waxing service for a cleaner appearance.",

    price: "$30",

    duration: "10 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-feet-toes",

    title: "Feet & Toes",

    category: "Body",

    description:
      "Detail waxing service for feet and toes.",

    price: "$15",

    duration: "5 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-hands-fingers",

    title: "Hands & Fingers",

    category: "Body",

    description:
      "Detail waxing service for hands and fingers.",

    price: "$15",

    duration: "5 minutes",

    gender: "gentlemen",
  },


  {
    id: "gentlemen-full-body",

    title: "Full Body",

    category: "Body",

    description:
      "A complete luxury waxing experience designed for men seeking full-body smoothness.",

    price: "$590",

    duration: "4 hours",

    gender: "gentlemen",
  },

];
