/**
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
  image:
    "/images/services/ladies-view-pricing.jpg",

  title:
    "Ladies Waxing",

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

  title:
    "New Client Brazilian",

  category:
    "Signature Waxing",

  description:
    "A first-time Brazilian experience focused on comfort, confidence, and beautifully smooth results.",

  price:
    "$75",

  duration:
    "30 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-repeat-brazilian",

  title:
    "Repeat Brazilian",

  category:
    "Signature Waxing",

  description:
    "A maintenance Brazilian wax designed for returning guests seeking consistent smooth results.",

  price:
    "$70",

  duration:
    "20 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-extended-brazilian",

  title:
    "Extended Brazilian",

  category:
    "Signature Waxing",

  description:
    "A more detailed Brazilian service customized for guests wanting additional coverage.",

  price:
    "$65",

  duration:
    "20 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-standard-brazilian",

  title:
    "Standard Brazilian",

  category:
    "Signature Waxing",

  description:
    "A classic Brazilian wax focused on clean lines and smooth, comfortable results.",

  price:
    "$55",

  duration:
    "15 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-butt-strip",

  title:
    "Butt Strip (Stand-Alone Service)",

  category:
    "Signature Waxing",

  description:
    "A quick stand-alone waxing service for a smooth, polished finish.",

  price:
    "$30",

  duration:
    "10 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-inner-buttocks",

  title:
    "Inner Buttocks (Add-On Only)",

  category:
    "Signature Waxing",

  description:
    "An additional service available with qualifying waxing appointments.",

  price:
    "$15",

  duration:
    "5 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-buttocks",

  title:
    "Buttocks",

  category:
    "Signature Waxing",

  description:
    "Complete buttocks waxing service for smooth, confident results.",

  price:
    "$40",

  duration:
    "10 minutes",

  gender:
    "ladies",
},




// ---------------------------------------------------------------------------
// FACE & BEAUTY
// ---------------------------------------------------------------------------

{
  id: "ladies-brow-clean-up",

  title:
    "Brow Clean Up",

  category:
    "Face & Beauty",

  description:
    "A precise brow cleanup to maintain a polished and natural shape.",

  price:
    "$25",

  duration:
    "10 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-full-face-brows",

  title:
    "Full Face w/ Brows",

  category:
    "Face & Beauty",

  description:
    "Complete facial waxing service including brows for a refreshed appearance.",

  price:
    "$80",

  duration:
    "30 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-full-face",

  title:
    "Full Face w/o Brows",

  category:
    "Face & Beauty",

  description:
    "Full facial waxing service designed for smooth, refreshed skin.",

  price:
    "$65",

  duration:
    "20 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-upper-lip",

  title:
    "Upper Lip",

  category:
    "Face & Beauty",

  description:
    "Quick and gentle upper lip waxing for smooth results.",

  price:
    "$15",

  duration:
    "10 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-chin",

  title:
    "Chin",

  category:
    "Face & Beauty",

  description:
    "Precision chin waxing for a clean, polished appearance.",

  price:
    "$20",

  duration:
    "10 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-jawline",

  title:
    "Jawlines",

  category:
    "Face & Beauty",

  description:
    "Defined jawline waxing for smooth, refined results.",

  price:
    "$20",

  duration:
    "10 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-neck",

  title:
    "Neck",

  category:
    "Face & Beauty",

  description:
    "Neck waxing service for a clean, smooth finish.",

  price:
    "$25",

  duration:
    "10 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-sideburns",

  title:
    "Sideburns",

  category:
    "Face & Beauty",

  description:
    "Gentle sideburn waxing for a polished look.",

  price:
    "$20",

  duration:
    "10 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-forehead",

  title:
    "Forehead",

  category:
    "Face & Beauty",

  description:
    "Smooth forehead waxing for a refreshed appearance.",

  price:
    "$20",

  duration:
    "10 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-nose",

  title:
    "Nose",

  category:
    "Face & Beauty",

  description:
    "Quick and comfortable nose waxing service.",

  price:
    "$25",

  duration:
    "10 minutes",

  gender:
    "ladies",
},




// ---------------------------------------------------------------------------
// BODY CARE
// ---------------------------------------------------------------------------

{
  id: "ladies-underarms",

  title:
    "Underarms",

  category:
    "Body Care",

  description:
    "Smooth underarm waxing designed for lasting comfort.",

  price:
    "$25",

  duration:
    "10 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-stomach",

  title:
    "Stomach",

  category:
    "Body Care",

  description:
    "Professional stomach waxing for smooth, confident skin.",

  price:
    "$40",

  duration:
    "10 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-chest",

  title:
    "Chest",

  category:
    "Body Care",

  description:
    "Chest waxing service for smooth, refined results.",

  price:
    "$40",

  duration:
    "10 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-full-back",

  title:
    "Full Back",

  category:
    "Body Care",

  description:
    "Complete back waxing service for smooth lasting results.",

  price:
    "$70",

  duration:
    "20 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-half-back",

  title:
    "Half Back",

  category:
    "Body Care",

  description:
    "Partial back waxing service designed for comfort and confidence.",

  price:
    "$40",

  duration:
    "10 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-full-legs",

  title:
    "Full Legs",

  category:
    "Body Care",

  description:
    "Complete leg waxing service for beautifully smooth results.",

  price:
    "$110",

  duration:
    "40 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-half-lower-legs",

  title:
    "Half Lower Legs",

  category:
    "Body Care",

  description:
    "Lower leg waxing service for smooth polished skin.",

  price:
    "$55",

  duration:
    "20 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-half-upper-legs",

  title:
    "Half Upper Legs",

  category:
    "Body Care",

  description:
    "Upper leg waxing service designed for comfortable results.",

  price:
    "$70",

  duration:
    "30 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-full-arms",

  title:
    "Full Arms",

  category:
    "Body Care",

  description:
    "Complete arm waxing service for soft, smooth results.",

  price:
    "$85",

  duration:
    "30 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-half-arms",

  title:
    "Half Arms",

  category:
    "Body Care",

  description:
    "Targeted arm waxing service customized for your needs.",

  price:
    "$50",

  duration:
    "20 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-feet-toes",

  title:
    "Feet & Toes (Stand-Alone Service)",

  category:
    "Body Care",

  description:
    "Detail waxing service for feet and toes.",

  price:
    "$15",

  duration:
    "5 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-hands-fingers",

  title:
    "Hands & Fingers (Stand-Alone Service)",

  category:
    "Body Care",

  description:
    "Detail waxing service for hands and fingers.",

  price:
    "$15",

  duration:
    "5 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-full-body",

  title:
    "Full Body",

  category:
    "Body Care",

  description:
    "A complete luxury waxing experience from head to toe.",

  price:
    "$450",

  duration:
    "3 hours",

  gender:
    "ladies",
},

];
