/**
 *
 * ---
 * File:
 * features/services/data/ladies.data.ts
 *
 * Description:
 * Ladies waxing service catalog.
 *
 * Updates:
 * • Reordered by service category
 * • Brazilian services prioritized
 * • Alphabetical ordering within categories
 * • Removed individual service descriptions
 * • Maintained reusable service structure
 *
 * ---
 */

import type { Service } from "../services.types";

/**
 * Ladies landing page configuration
 */

export const ladiesServicePage = {
  image: "/images/services/ladies-view-pricing.jpg",
  title: "Ladies Waxing",
  description:
    "Premium waxing services created with precision, comfort, and confidence.",
};


/**
 * Ladies service catalog
 */

export const ladiesServices: Service[] = [

  // ---------------------------------------------------------------------------
  // BRAZILIAN WAXING
  // ---------------------------------------------------------------------------

  {
    id: "ladies-new-client-brazilian",
    title: "New Client Brazilian",
    category: "Brazilian Waxing",
    price: "$83",
    duration: "30 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-repeat-brazilian",
    title: "Repeat Brazilian",
    category: "Brazilian Waxing",
    price: "$73",
    duration: "20 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-extended-brazilian",
    title: "Extended Brazilian",
    category: "Brazilian Waxing",
    price: "$65",
    duration: "20 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-standard-brazilian",
    title: "Standard Brazilian",
    category: "Brazilian Waxing",
    price: "$55",
    duration: "15 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-buttocks",
    title: "Buttocks",
    category: "Brazilian Waxing",
    price: "$40",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-butt-strip",
    title: "Butt Strip (Stand-Alone Service)",
    category: "Brazilian Waxing",
    price: "$30",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-inner-buttocks",
    title: "Inner Buttocks (Add-On Only)",
    category: "Brazilian Waxing",
    price: "$15",
    duration: "5 minutes",
    gender: "ladies",
  },


  // ---------------------------------------------------------------------------
  // FACE
  // ---------------------------------------------------------------------------

  {
    id: "ladies-brow-clean-up",
    title: "Brow Clean Up",
    category: "Face",
    price: "$25",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-chin",
    title: "Chin",
    category: "Face",
    price: "$20",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-forehead",
    title: "Forehead",
    category: "Face",
    price: "$20",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-full-face-brows",
    title: "Full Face w/ Brows",
    category: "Face",
    price: "$80",
    duration: "30 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-full-face",
    title: "Full Face w/o Brows",
    category: "Face",
    price: "$65",
    duration: "20 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-jawline",
    title: "Jawlines",
    category: "Face",
    price: "$20",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-neck",
    title: "Neck",
    category: "Face",
    price: "$25",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-nose",
    title: "Nose",
    category: "Face",
    price: "$25",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-sideburns",
    title: "Sideburns",
    category: "Face",
    price: "$20",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-upper-lip",
    title: "Upper Lip",
    category: "Face",
    price: "$15",
    duration: "10 minutes",
    gender: "ladies",
  },


  // ---------------------------------------------------------------------------
  // BODY
  // ---------------------------------------------------------------------------

  {
    id: "ladies-chest",
    title: "Chest",
    category: "Body",
    price: "$40",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-feet-toes",
    title: "Feet & Toes (Stand-Alone Service)",
    category: "Body",
    price: "$15",
    duration: "5 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-full-arms",
    title: "Full Arms",
    category: "Body",
    price: "$85",
    duration: "30 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-full-back",
    title: "Full Back",
    category: "Body",
    price: "$70",
    duration: "20 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-full-body",
    title: "Full Body",
    category: "Body",
    price: "$450",
    duration: "3 hours",
    gender: "ladies",
  },

  {
    id: "ladies-full-legs",
    title: "Full Legs",
    category: "Body",
    price: "$120",
    duration: "40 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-hands-fingers",
    title: "Hands & Fingers (Stand-Alone Service)",
    category: "Body",
    price: "$15",
    duration: "5 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-half-arms",
    title: "Half Arms",
    category: "Body",
    price: "$50",
    duration: "20 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-half-back",
    title: "Half Back",
    category: "Body",
    price: "$40",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-half-lower-legs",
    title: "Half Lower Legs",
    category: "Body",
    price: "$55",
    duration: "20 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-half-upper-legs",
    title: "Half Upper Legs",
    category: "Body",
    price: "$70",
    duration: "30 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-stomach",
    title: "Stomach",
    category: "Body",
    price: "$40",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-underarms",
    title: "Underarms",
    category: "Body",
    price: "$25",
    duration: "10 minutes",
    gender: "ladies",
  },

];
