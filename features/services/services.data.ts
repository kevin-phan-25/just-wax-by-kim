/**
 * -----------------------------------------------------------------------------
 * File: services.data.ts
 *
 * Description:
 * Luxury waxing service catalog.
 *
 * -----------------------------------------------------------------------------
 */

import type {
  Service,
  ServiceCategory
} from "./services.types";


export const services: Service[] = [

  // ---------------------------------------------------------------------------
  // FACE
  // ---------------------------------------------------------------------------

  {
    id: "face",
    title: "Face",
    category: "Face & Beauty",
    description:
      "A gentle facial waxing service designed for smooth, refreshed, beautifully cared skin.",
    price: "$25",
    duration: "15 minutes",
  },

  {
    id: "brow-clean-up",
    title: "Brow Clean Up",
    category: "Face & Beauty",
    description:
      "A precise brow cleanup to maintain a polished and natural shape.",
    price: "$10",
    duration: "10 minutes",
  },

  {
    id: "brow-shaping",
    title: "Brow Shaping",
    category: "Face & Beauty",
    description:
      "Custom brow shaping designed to enhance your natural features.",
    price: "$20",
    duration: "20 minutes",
  },

  {
    id: "upper-lip",
    title: "Upper Lip",
    category: "Face & Beauty",
    description:
      "Quick and gentle upper lip waxing for smooth, clean results.",
    price: "$15",
    duration: "10 minutes",
  },

  {
    id: "full-face-without-brows",
    title: "Full Face Without Brows",
    category: "Face & Beauty",
    description:
      "Complete facial waxing service excluding brows.",
    price: "$65",
    duration: "30 minutes",
  },

  {
    id: "full-face-with-brows",
    title: "Full Face With Brows",
    category: "Face & Beauty",
    description:
      "Complete facial waxing service including detailed brow shaping.",
    price: "$80",
    duration: "30 minutes",
  },

  {
    id: "chin-jawline",
    title: "Chin | Jawlines",
    category: "Face & Beauty",
    description:
      "Targeted waxing for smooth definition along the chin and jawline.",
    price: "$20",
    duration: "10 minutes",
  },

  {
    id: "neck",
    title: "Neck - Front or Back",
    category: "Face & Beauty",
    description:
      "Smooth and comfortable waxing for front or back neck areas.",
    price: "$25",
    duration: "10 minutes",
  },

  {
    id: "sideburns-forehead",
    title: "Sideburns | Forehead",
    category: "Face & Beauty",
    description:
      "Precision waxing for a clean and polished appearance.",
    price: "$20",
    duration: "10 minutes",
  },

  {
    id: "nose",
    title: "Nose",
    category: "Face & Beauty",
    description:
      "Quick and comfortable nose waxing service.",
    price: "$25",
    duration: "10 minutes",
  },

  {
    id: "brow-wax-laminate",
    title: "Brow Wax + Laminate",
    category: "Face & Beauty",
    description:
      "Lifted, styled brows with professional shaping and lamination.",
    price: "$75",
    duration: "40 minutes",
  },

  {
    id: "brow-wax-tint",
    title: "Brow Wax + Tint",
    category: "Face & Beauty",
    description:
      "Defined brows enhanced with professional tinting.",
    price: "$65",
    duration: "30 minutes",
  },

  {
    id: "brow-wax-laminate-tint",
    title: "Brow Wax + Laminate + Tint",
    category: "Face & Beauty",
    description:
      "The complete brow transformation with shaping, lift, and tint.",
    price: "$110",
    duration: "60 minutes",
  },


  // ---------------------------------------------------------------------------
  // BIKINI
  // ---------------------------------------------------------------------------

  {
    id: "new-client-brazilian",
    title: "New Client Brazilian",
    category: "Signature Waxing",
    description:
      "A luxury first-time Brazilian experience focused on comfort and confidence.",
    price: "$70",
    duration: "30 minutes",
  },

  {
    id: "repeat-brazilian",
    title: "Repeat Brazilian",
    category: "Signature Waxing",
    description:
      "A smooth maintenance Brazilian wax for returning guests.",
    price: "$65",
    duration: "20 minutes",
  },

  {
    id: "extended-bikini",
    title: "Extended Bikini",
    category: "Signature Waxing",
    description:
      "A customized bikini service extending beyond the standard bikini line.",
    price: "$60",
    duration: "20 minutes",
  },

  {
    id: "standard-bikini",
    title: "Standard Bikini",
    category: "Signature Waxing",
    description:
      "Classic bikini line cleanup for smooth, confident results.",
    price: "$50",
    duration: "15 minutes",
  },

  {
    id: "butt-strip",
    title: "Butt Strip",
    category: "Signature Waxing",
    description:
      "Standalone service for a clean and smooth finish.",
    price: "$28",
    duration: "10 minutes",
  },

  {
    id: "inner-buttocks",
    title: "Inner Buttocks",
    category: "Signature Waxing",
    description:
      "Gentle waxing service for the inner buttocks area.",
    price: "$15",
    duration: "5 minutes",
  },

  {
    id: "buttocks",
    title: "Buttocks",
    category: "Signature Waxing",
    description:
      "Complete buttocks waxing service for smooth skin.",
    price: "$40",
    duration: "10 minutes",
  },


  // ---------------------------------------------------------------------------
  // BODY
  // ---------------------------------------------------------------------------

  {
    id: "full-body",
    title: "Full Body",
    category: "Body Care",
    description:
      "A complete luxury waxing experience from head to toe.",
    price: "$450",
    duration: "3 hours",
  },

  {
    id: "chest",
    title: "Chest",
    category: "Body Care",
    description:
      "Professional chest waxing for smooth lasting results.",
    price: "$35",
    duration: "10 minutes",
  },

  {
    id: "feet-toes",
    title: "Feet & Toes",
    category: "Body Care",
    description:
      "Detailed waxing service for feet and toes.",
    price: "$15",
    duration: "10 minutes",
  },

  {
    id: "full-arms",
    title: "Full Arms",
    category: "Body Care",
    description:
      "Complete arm waxing treatment for smooth skin.",
    price: "$83",
    duration: "30 minutes",
  },

  {
    id: "full-back",
    title: "Full Back",
    category: "Body Care",
    description:
      "Professional full back waxing service.",
    price: "$65",
    duration: "20 minutes",
  },

  {
    id: "full-legs",
    title: "Full Legs",
    category: "Body Care",
    description:
      "Complete leg waxing service for long-lasting smoothness.",
    price: "$105",
    duration: "40 minutes",
  },

  {
    id: "half-arms",
    title: "Half Arms",
    category: "Body Care",
    description:
      "Partial arm waxing tailored to your needs.",
    price: "$48",
    duration: "20 minutes",
  },

  {
    id: "half-back",
    title: "Half Back",
    category: "Body Care",
    description:
      "Targeted half-back waxing service.",
    price: "$35",
    duration: "10 minutes",
  },

  {
    id: "half-lower-legs",
    title: "Half Lower Legs",
    category: "Body Care",
    description:
      "Smooth lower leg waxing treatment.",
    price: "$53",
    duration: "20 minutes",
  },

  {
    id: "half-upper-legs",
    title: "Half Upper Legs",
    category: "Body Care",
    description:
      "Upper leg waxing service for smooth results.",
    price: "$65",
    duration: "30 minutes",
  },

  {
    id: "inner-thighs",
    title: "Inner Thighs",
    category: "Body Care",
    description:
      "Targeted inner thigh waxing service.",
    price: "$20+",
    duration: "10 minutes",
  },

  {
    id: "lower-back",
    title: "Lower Back",
    category: "Body Care",
    description:
      "Smooth lower back waxing treatment.",
    price: "$25",
    duration: "10 minutes",
  },

  {
    id: "lower-stomach",
    title: "Lower Stomach",
    category: "Body Care",
    description:
      "Clean and comfortable lower stomach waxing.",
    price: "$20",
    duration: "10 minutes",
  },

  {
    id: "nipples",
    title: "Nipples",
    category: "Body Care",
    description:
      "Precision waxing service for delicate areas.",
    price: "$10",
    duration: "10 minutes",
  },

  {
    id: "stomach",
    title: "Stomach",
    category: "Body Care",
    description:
      "Complete stomach waxing service.",
    price: "$35",
    duration: "10 minutes",
  },

  {
    id: "stomach-strip",
    title: "Stomach Strip",
    category: "Body Care",
    description:
      "Quick and precise stomach strip waxing.",
    price: "$10",
    duration: "5 minutes",
  },

];



export const serviceCategories: ServiceCategory[] = [

  {
    id: "signature-waxing",
    title: "Signature Waxing",
    description:
      "Premium intimate waxing services designed around comfort, confidence, and quality.",
    services: services.filter(
      (service) =>
        service.category === "Signature Waxing"
    ),
  },

  {
    id: "face-beauty",
    title: "Face & Beauty",
    description:
      "Detailed facial waxing and brow services with a luxury touch.",
    services: services.filter(
      (service) =>
        service.category === "Face & Beauty"
    ),
  },

  {
    id: "body-care",
    title: "Body Care",
    description:
      "Customized body waxing treatments created for smooth, beautiful skin.",
    services: services.filter(
      (service) =>
        service.category === "Body Care"
    ),
  },

];
