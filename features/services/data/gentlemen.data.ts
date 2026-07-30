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

  {
    id: "gentlemen-brows",
    title: "Eyebrows",
    category: "Face & Grooming",
    description:
      "Professional eyebrow cleanup for a clean and natural appearance.",
    price: "$20",
    duration: "15 minutes",
  },


  {
    id: "gentlemen-nose",
    title: "Nose",
    category: "Face & Grooming",
    description:
      "Quick and comfortable nose waxing service.",
    price: "$25",
    duration: "10 minutes",
  },


  {
    id: "gentlemen-ears",
    title: "Ears",
    category: "Face & Grooming",
    description:
      "Precision ear waxing for a polished appearance.",
    price: "$20",
    duration: "10 minutes",
  },


  {
    id: "gentlemen-chest",
    title: "Chest",
    category: "Body Care",
    description:
      "Professional chest waxing for smooth lasting results.",
    price: "$35",
    duration: "10 minutes",
  },


  {
    id: "gentlemen-stomach",
    title: "Stomach",
    category: "Body Care",
    description:
      "Complete stomach waxing service.",
    price: "$35",
    duration: "10 minutes",
  },


  {
    id: "gentlemen-chest-stomach",
    title: "Chest + Stomach",
    category: "Body Care",
    description:
      "Combined chest and stomach waxing service.",
    price: "$65",
    duration: "20 minutes",
  },


  {
    id: "gentlemen-back",
    title: "Full Back",
    category: "Body Care",
    description:
      "Professional back waxing designed around comfort and confidence.",
    price: "$65",
    duration: "20 minutes",
  },


  {
    id: "gentlemen-full-arms",
    title: "Full Arms",
    category: "Body Care",
    description:
      "Complete arm waxing treatment.",
    price: "$83",
    duration: "30 minutes",
  },


  {
    id: "gentlemen-full-legs",
    title: "Full Legs",
    category: "Body Care",
    description:
      "Complete leg waxing service.",
    price: "$105",
    duration: "40 minutes",
  },


  {
    id: "gentlemen-full-body",
    title: "Full Body",
    category: "Body Care",
    description:
      "Complete luxury waxing experience from head to toe.",
    price: "$450",
    duration: "3 hours",
  },


];
