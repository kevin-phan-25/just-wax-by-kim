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
 * • Updated complete pricing catalog
 * • Renamed Signature Waxing to Brazilian
 * • Removed waxer tier pricing
 * • Added complete body services
 * • Maintained reusable service structure
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
    "Premium waxing services created with precision, comfort, and confidence.",

};



/**
 * Ladies service catalog
 */
export const ladiesServices: Service[] = [



// ---------------------------------------------------------------------------
// FACE & BEAUTY
// ---------------------------------------------------------------------------

{
  id: "ladies-face",

  title:
    "Face",

  category:
    "Face & Beauty",

  description:
    "A gentle facial waxing service designed for smooth, refreshed, beautifully cared-for skin.",

  price:
    "$25",

  duration:
    "15 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-brow-clean-up",

  title:
    "Brow Clean Up",

  category:
    "Face & Beauty",

  description:
    "A precise brow cleanup to maintain a polished and natural shape.",

  price:
    "$10",

  duration:
    "10 minutes",

  gender:
    "ladies",
},


{
  id: "ladies-brow-shaping",

  title:
    "Brow Shaping",

  category:
    "Face & Beauty",

  description:
    "Custom brow shaping designed to enhance your natural features.",

  price:
    "$20",

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
    "Quick and gentle upper lip waxing for smooth, clean results.",

  price:
    "$15",

  duration:
    "10 minutes",

  gender:
    "ladies",
},



// ---------------------------------------------------------------------------
// BRAZILIAN
// ---------------------------------------------------------------------------

{
  id: "ladies-new-client-brazilian",

  title:
    "New Client Brazilian",

  category:
    "Brazilian",

  description:
    "A luxury first-time Brazilian experience focused on comfort, confidence, and smooth results.",

  price:
    "$70",

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
    "Brazilian",

  description:
    "A smooth maintenance Brazilian wax for returning guests.",

  price:
    "$65",

  duration:
    "20 minutes",

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
    "Smooth underarm waxing designed for lasting comfort and confidence.",

  price:
    "$35",

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
    "$180",

  duration:
    "1 hour",

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
    "Lower leg waxing service for smooth, polished skin.",

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
    "Upper leg waxing service designed for comfortable, smooth results.",

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
