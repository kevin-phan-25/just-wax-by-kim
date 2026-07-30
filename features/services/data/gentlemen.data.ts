/**
 * -----------------------------------------------------------------------------
 * File:
 * gentlemen.data.ts
 *
 * Description:
 * Gentlemen waxing service catalog.
 *
 * -----------------------------------------------------------------------------
 */

import type {
  Service,
} from "../services.types";


export const gentlemenServices: Service[] = [

  // ---------------------------------------------------------------------------
  // FACE
  // ---------------------------------------------------------------------------

  {
    id: "gentlemen-eyebrows",
    title: "Eyebrows",
    category: "Face & Grooming",
    description:
      "Professional eyebrow cleanup designed for a clean, natural, and polished appearance.",
    price: "$20",
    duration: "15 minutes",
  },


  {
    id: "gentlemen-nose",
    title: "Nose",
    category: "Face & Grooming",
    description:
      "Quick and comfortable nose waxing for a refined, well-groomed look.",
    price: "$25",
    duration: "10 minutes",
  },


  {
    id: "gentlemen-ears",
    title: "Ears",
    category: "Face & Grooming",
    description:
      "Precision ear waxing service for a clean and professional appearance.",
    price: "$20",
    duration: "10 minutes",
  },


  // ---------------------------------------------------------------------------
  // BODY
  // ---------------------------------------------------------------------------


  {
    id: "gentlemen-chest",
    title: "Chest",
    category: "Body Care",
    description:
      "Professional chest waxing designed for smooth, confident results.",
    price: "$35",
    duration: "10 minutes",
  },


  {
    id: "gentlemen-stomach",
    title: "Stomach",
    category: "Body Care",
    description:
      "Complete stomach waxing service for a smooth and comfortable finish.",
    price: "$35",
    duration: "10 minutes",
  },


  {
    id: "gentlemen-chest-stomach",
    title: "Chest + Stomach",
    category: "Body Care",
    description:
      "A combined chest and stomach waxing experience for long-lasting smoothness.",
    price: "$65",
    duration: "20 minutes",
  },


  {
    id: "gentlemen-back",
    title: "Full Back",
    category: "Body Care",
    description:
      "Professional back waxing service created around comfort and confidence.",
    price: "$65",
    duration: "20 minutes",
  },


  {
    id: "gentlemen-lower-back",
    title: "Lower Back",
    category: "Body Care",
    description:
      "Targeted lower back waxing for a clean and smooth finish.",
    price: "$25",
    duration: "10 minutes",
  },


  {
    id: "gentlemen-arms",
    title: "Full Arms",
    category: "Body Care",
    description:
      "Complete arm waxing treatment for smooth, refined skin.",
    price: "$83",
    duration: "30 minutes",
  },


  {
    id: "gentlemen-half-arms",
    title: "Half Arms",
    category: "Body Care",
    description:
      "Partial arm waxing customized to your preference.",
    price: "$48",
    duration: "20 minutes",
  },


  {
    id: "gentlemen-legs",
    title: "Full Legs",
    category: "Body Care",
    description:
      "Complete leg waxing service for lasting smoothness.",
    price: "$105",
    duration: "40 minutes",
  },


  {
    id: "gentlemen-half-legs",
    title: "Half Legs",
    category: "Body Care",
    description:
      "Half-leg waxing service designed for smooth and comfortable results.",
    price: "$65",
    duration: "30 minutes",
  },


  {
    id: "gentlemen-underarms",
    title: "Underarms",
    category: "Body Care",
    description:
      "Clean and comfortable underarm waxing service.",
    price: "$25",
    duration: "10 minutes",
  },


  {
    id: "gentlemen-full-body",
    title: "Full Body",
    category: "Body Care",
    description:
      "Complete full-body waxing experience designed for confidence and comfort.",
    price: "$450",
    duration: "3 hours",
  },


  // ---------------------------------------------------------------------------
  // INTIMATE
  // ---------------------------------------------------------------------------


  {
    id: "gentlemen-bikini",
    title: "Bikini Line",
    category: "Signature Waxing",
    description:
      "Professional bikini line waxing designed with comfort and discretion.",
    price: "$50",
    duration: "15 minutes",
  },


  {
    id: "gentlemen-brazilian",
    title: "Brazilian",
    category: "Signature Waxing",
    description:
      "A premium intimate waxing service focused on comfort, confidence, and precision.",
    price: "$75",
    duration: "30 minutes",
  },


];
