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
 * • Inclusive service language
 * • Bikini prioritized
 * • Added Standard Bikini option
 * • Removed gender-specific Brazilian category naming
 * • Organized by body area
 * • Added Inner Thigh options
 * • Updated Full Body pricing
 * • Prepared for compact editorial pricing layout
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
    "Professional waxing services designed for comfort, confidence, and exceptional care.",
};


/**
 * Gentlemen service catalog
 */

export const gentlemenServices: Service[] = [

  // ---------------------------------------------------------------------------
  // BIKINI
  // ---------------------------------------------------------------------------

  {
    id: "gentlemen-standard-bikini",
    title: "Standard Bikini",
    category: "Bikini",
    price: "$85",
    duration: "20 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-new-client-brazilian",
    title: "New Client Brazilian",
    category: "Bikini",
    price: "$120",
    duration: "40 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-repeat-brazilian",
    title: "Repeat Brazilian",
    category: "Bikini",
    price: "$105",
    duration: "30 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-buttocks-butt-strip",
    title: "Buttocks + Butt Strip",
    category: "Bikini",
    price: "$80",
    duration: "20 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-buttocks",
    title: "Buttocks",
    category: "Bikini",
    price: "$50",
    duration: "15 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-butt-strip",
    title: "Butt Strip",
    category: "Bikini",
    price: "$40",
    duration: "10 minutes",
    gender: "gentlemen",
  },


  // ---------------------------------------------------------------------------
  // FACE
  // ---------------------------------------------------------------------------

  {
    id: "gentlemen-brows",
    title: "Brows",
    category: "Face",
    price: "$35",
    duration: "10 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-cheeks",
    title: "Cheeks",
    category: "Face",
    price: "$20",
    duration: "5 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-ears",
    title: "Ears",
    category: "Face",
    price: "$30",
    duration: "10 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-neck",
    title: "Neck (Front or Back)",
    category: "Face",
    price: "$30",
    duration: "10 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-nose",
    title: "Nose",
    category: "Face",
    price: "$30",
    duration: "10 minutes",
    gender: "gentlemen",
  },


  // ---------------------------------------------------------------------------
  // BODY
  // ---------------------------------------------------------------------------

  {
    id: "gentlemen-full-arms",
    title: "Full Arms",
    category: "Body",
    price: "$120",
    duration: "40 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-half-arms",
    title: "Half Arms",
    category: "Body",
    price: "$65",
    duration: "20 minutes",
    gender: "gentlemen",
  },


  {
    id: "gentlemen-full-back-shoulders",
    title: "Full Back + Shoulders",
    category: "Body",
    price: "$105",
    duration: "30 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-full-back",
    title: "Full Back",
    category: "Body",
    price: "$85",
    duration: "20 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-half-back",
    title: "Half Back",
    category: "Body",
    price: "$50",
    duration: "15 minutes",
    gender: "gentlemen",
  },


  {
    id: "gentlemen-full-chest-shoulders",
    title: "Full Chest + Shoulders",
    category: "Body",
    price: "$120",
    duration: "30 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-full-chest-stomach",
    title: "Chest + Stomach",
    category: "Body",
    price: "$100",
    duration: "30 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-chest-only",
    title: "Chest",
    category: "Body",
    price: "$50",
    duration: "15 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-nipples",
    title: "Nipples",
    category: "Body",
    price: "$20",
    duration: "5 minutes",
    gender: "gentlemen",
  },


  // ---------------------------------------------------------------------------
  // HANDS + FEET
  // ---------------------------------------------------------------------------

  {
    id: "gentlemen-feet-toes",
    title: "Feet + Toes",
    category: "Body",
    price: "$15",
    duration: "5 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-hands-fingers",
    title: "Hands + Fingers",
    category: "Body",
    price: "$15",
    duration: "5 minutes",
    gender: "gentlemen",
  },


  // ---------------------------------------------------------------------------
  // LEGS
  // ---------------------------------------------------------------------------

  {
    id: "gentlemen-full-legs",
    title: "Full Legs",
    category: "Body",
    price: "$180",
    duration: "1 hour",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-half-legs",
    title: "Half Legs",
    category: "Body",
    price: "$95",
    duration: "30 minutes",
    gender: "gentlemen",
  },


  // ---------------------------------------------------------------------------
  // INNER THIGH
  // ---------------------------------------------------------------------------

  {
    id: "gentlemen-inner-thigh",
    title: "Inner Thigh",
    category: "Body",
    price: "Select Option",
    duration: "",
    gender: "gentlemen",

    options: [
      {
        label: "Partial Inner Thigh",
        price: "$30",
        duration: "10 minutes",
      },

      {
        label: "Full Inner Thigh",
        price: "$40",
        duration: "15 minutes",
      },
    ],
  },


  // ---------------------------------------------------------------------------
  // SHOULDERS
  // ---------------------------------------------------------------------------

  {
    id: "gentlemen-shoulders",
    title: "Shoulders",
    category: "Body",
    price: "$30",
    duration: "10 minutes",
    gender: "gentlemen",
  },


  // ---------------------------------------------------------------------------
  // STOMACH
  // ---------------------------------------------------------------------------

  {
    id: "gentlemen-stomach",
    title: "Stomach",
    category: "Body",
    price: "$50",
    duration: "15 minutes",
    gender: "gentlemen",
  },

  {
    id: "gentlemen-stomach-strip",
    title: "Stomach Strip",
    category: "Body",
    price: "$15",
    duration: "5 minutes",
    gender: "gentlemen",
  },


  // ---------------------------------------------------------------------------
  // UNDERARMS
  // ---------------------------------------------------------------------------

  {
    id: "gentlemen-underarms",
    title: "Underarms",
    category: "Body",
    price: "$35",
    duration: "10 minutes",
    gender: "gentlemen",
  },


  // ---------------------------------------------------------------------------
  // FULL BODY LAST
  // ---------------------------------------------------------------------------

  {
    id: "gentlemen-full-body",
    title: "Full Body",
    category: "Body",
    price: "$595",
    duration: "4 hours",
    gender: "gentlemen",
  },

];
