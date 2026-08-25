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
 * • Inclusive service language
 * • Bikini services prioritized
 * • Removed unnecessary service labels
 * • Organized by body area
 * • Added Inner Thigh service
 * • Prepared for compact editorial pricing layout
 *
 * ---
 *
 */

import type { Service } from "../services.types";



/**
 * Ladies landing page configuration
 */

export const ladiesServicePage = {

  image:
    "/images/services/ladies-view-pricing.jpg",

  title:
    "Ladies Waxing",

  description:
    "Professional waxing services designed for comfort, confidence, and exceptional care.",

};



/**
 * Ladies service catalog
 */

export const ladiesServices: Service[] = [



/**
 * ---------------------------------------------------------------------------
 * BIKINI
 * ---------------------------------------------------------------------------
 */

{
  id: "ladies-new-client-brazilian",
  title: "New Client Brazilian",
  category: "Bikini",
  price: "$85",
  duration: "30 minutes",
  gender: "ladies",
},

{
  id: "ladies-repeat-brazilian",
  title: "Repeat Brazilian",
  category: "Bikini",
  price: "$75",
  duration: "20 minutes",
  gender: "ladies",
},

{
  id: "ladies-extended-bikini",
  title: "Extended Bikini",
  category: "Bikini",
  price: "$68",
  duration: "20 minutes",
  gender: "ladies",
},

{
  id: "ladies-standard-bikini",
  title: "Standard Bikini",
  category: "Bikini",
  price: "$53",
  duration: "15 minutes",
  gender: "ladies",
},

{
  id: "ladies-buttocks",
  title: "Buttocks",
  category: "Bikini",
  price: "$40",
  duration: "10 minutes",
  gender: "ladies",
},

{
  id: "ladies-butt-strip",
  title: "Butt Strip",
  category: "Bikini",
  price: "$30",
  duration: "10 minutes",
  gender: "ladies",
},

{
  id: "ladies-inner-buttocks",
  title: "Inner Buttocks",
  category: "Bikini",
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
  price: "$28",
  duration: "10 minutes",
  gender: "ladies",
},
  
{
  id: "ladies-brow-shapeup",
  title: "Brow Shapeup",
  category: "Face",
  price: "$50",
  duration: "15 minutes",
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
  title: "Jawline",
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

// ARMS

{
  id: "ladies-full-arms",
  title: "Full Arms",
  category: "Body",
  price: "$85",
  duration: "30 minutes",
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



// BACK

{
  id: "ladies-full-back",
  title: "Full Back",
  category: "Body",
  price: "$70",
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



// CHEST

{
  id: "ladies-chest",
  title: "Chest",
  category: "Body",
  price: "$40",
  duration: "10 minutes",
  gender: "ladies",
},

{
  id: "ladies-nipples",
  title: "Nipples",
  category: "Body",
  price: "$15",
  duration: "5 minutes",
  gender: "ladies",
},
// ---------------------------------------------------------------------------
// HANDS + FEET
// ---------------------------------------------------------------------------

{
  id: "ladies-feet-toes",
  title: "Feet + Toes",
  category: "Body",
  price: "$15",
  duration: "5 minutes",
  gender: "ladies",
},

{
  id: "ladies-hands-fingers",
  title: "Hands + Fingers",
  category: "Body",
  price: "$15",
  duration: "5 minutes",
  gender: "ladies",
},



// ---------------------------------------------------------------------------
// LEGS
// ---------------------------------------------------------------------------

{
  id: "ladies-full-legs",
  title: "Full Legs",
  category: "Body",
  price: "$120",
  duration: "40 minutes",
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
  id: "ladies-half-lower-legs",
  title: "Half Lower Legs",
  category: "Body",
  price: "$55",
  duration: "20 minutes",
  gender: "ladies",
},



// ---------------------------------------------------------------------------
// INNER THIGH
// ---------------------------------------------------------------------------

{
  id: "ladies-inner-thigh",
  title: "Inner Thigh",
  category: "Body",
  price: "$20",
  duration: "10 minutes",
  gender: "ladies",
},



// ---------------------------------------------------------------------------
// STOMACH
// ---------------------------------------------------------------------------

{
  id: "ladies-stomach",
  title: "Stomach",
  category: "Body",
  price: "$40",
  duration: "10 minutes",
  gender: "ladies",
},

{
  id: "ladies-stomach-strip",
  title: "Stomach Strip",
  category: "Body",
  price: "$10",
  duration: "5 minutes",
  gender: "ladies",
},



// ---------------------------------------------------------------------------
// UNDERARMS
// ---------------------------------------------------------------------------

{
  id: "ladies-underarms",
  title: "Underarms",
  category: "Body",
  price: "$25",
  duration: "10 minutes",
  gender: "ladies",
},



// ---------------------------------------------------------------------------
// FULL BODY LAST
// ---------------------------------------------------------------------------

{
  id: "ladies-full-body",
  title: "Full Body",
  category: "Body",
  price: "$450",
  duration: "3 hours",
  gender: "ladies",
},

];

