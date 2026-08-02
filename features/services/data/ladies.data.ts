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
 * • Brazilian moved to Signature Waxing section
 * • Removed Sr/Jr waxer pricing
 * • Removed individual service descriptions
 * • Updated complete pricing catalog
 * • Added complete face and body services
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
  // SIGNATURE WAXING
  // ---------------------------------------------------------------------------

  {
    id: "ladies-new-client-brazilian",
    title: "New Client Brazilian",
    category: "Signature Waxing",
    price: "$83",
    duration: "30 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-repeat-brazilian",
    title: "Repeat Brazilian",
    category: "Signature Waxing",
    price: "$73",
    duration: "20 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-extended-brazilian",
    title: "Extended Brazilian",
    category: "Signature Waxing",
    price: "$65",
    duration: "20 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-standard-brazilian",
    title: "Standard Brazilian",
    category: "Signature Waxing",
    price: "$55",
    duration: "15 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-butt-strip",
    title: "Butt Strip (Stand-Alone Service)",
    category: "Signature Waxing",
    price: "$30",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-inner-buttocks",
    title: "Inner Buttocks (Add-On Only)",
    category: "Signature Waxing",
    price: "$15",
    duration: "5 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-buttocks",
    title: "Buttocks",
    category: "Signature Waxing",
    price: "$40",
    duration: "10 minutes",
    gender: "ladies",
  },


  // ---------------------------------------------------------------------------
  // FACE & BEAUTY
  // ---------------------------------------------------------------------------

  {
    id: "ladies-brow-clean-up",
    title: "Brow Clean Up",
    category: "Face & Beauty",
    price: "$25",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-full-face-brows",
    title: "Full Face w/ Brows",
    category: "Face & Beauty",
    price: "$80",
    duration: "30 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-full-face",
    title: "Full Face w/o Brows",
    category: "Face & Beauty",
    price: "$65",
    duration: "20 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-upper-lip",
    title: "Upper Lip",
    category: "Face & Beauty",
    price: "$15",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-chin",
    title: "Chin",
    category: "Face & Beauty",
    price: "$20",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-jawline",
    title: "Jawlines",
    category: "Face & Beauty",
    price: "$20",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-neck",
    title: "Neck",
    category: "Face & Beauty",
    price: "$25",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-sideburns",
    title: "Sideburns",
    category: "Face & Beauty",
    price: "$20",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-forehead",
    title: "Forehead",
    category: "Face & Beauty",
    price: "$20",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-nose",
    title: "Nose",
    category: "Face & Beauty",
    price: "$25",
    duration: "10 minutes",
    gender: "ladies",
  },


  // ---------------------------------------------------------------------------
  // BODY CARE
  // ---------------------------------------------------------------------------
    {
    id: "ladies-underarms",
    title: "Underarms",
    category: "Body Care",
    price: "$25",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-stomach",
    title: "Stomach",
    category: "Body Care",
    price: "$40",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-chest",
    title: "Chest",
    category: "Body Care",
    price: "$40",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-full-back",
    title: "Full Back",
    category: "Body Care",
    price: "$70",
    duration: "20 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-half-back",
    title: "Half Back",
    category: "Body Care",
    price: "$40",
    duration: "10 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-full-legs",
    title: "Full Legs",
    category: "Body Care",
    price: "$120",
    duration: "40 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-half-lower-legs",
    title: "Half Lower Legs",
    category: "Body Care",
    price: "$55",
    duration: "20 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-half-upper-legs",
    title: "Half Upper Legs",
    category: "Body Care",
    price: "$70",
    duration: "30 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-full-arms",
    title: "Full Arms",
    category: "Body Care",
    price: "$85",
    duration: "30 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-half-arms",
    title: "Half Arms",
    category: "Body Care",
    price: "$50",
    duration: "20 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-feet-toes",
    title: "Feet & Toes (Stand-Alone Service)",
    category: "Body Care",
    price: "$15",
    duration: "5 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-hands-fingers",
    title: "Hands & Fingers (Stand-Alone Service)",
    category: "Body Care",
    price: "$15",
    duration: "5 minutes",
    gender: "ladies",
  },

  {
    id: "ladies-full-body",
    title: "Full Body",
    category: "Body Care",
    price: "$450",
    duration: "3 hours",
    gender: "ladies",
  },

];
