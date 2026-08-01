/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/data/ladies.data.ts
 *
 * Description:
 * Ladies waxing service catalog.
 *
 * Changes:
 * - Added Ladies service page metadata
 * - Added category hero image
 * - Kept service cards reusable
 *
 * -----------------------------------------------------------------------------
 */

import type {
  Service,
} from "../services.types";



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
  id: "face",

  title:
    "Face",

  category:
    "Face & Beauty",

  description:
    "A gentle facial waxing service designed for smooth, refreshed, beautifully cared skin.",

  price:
    "$25",

  duration:
    "15 minutes",

  gender:
    "ladies",
},


{
  id: "brow-clean-up",

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
  id: "brow-shaping",

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
  id: "upper-lip",

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
// SIGNATURE WAXING
// ---------------------------------------------------------------------------

{
  id: "new-client-brazilian",

  title:
    "New Client Brazilian",

  category:
    "Signature Waxing",

  description:
    "A luxury first-time Brazilian experience focused on comfort and confidence.",

  price:
    "$70",

  duration:
    "30 minutes",

  gender:
    "ladies",
},


{
  id: "repeat-brazilian",

  title:
    "Repeat Brazilian",

  category:
    "Signature Waxing",

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
  id: "full-body",

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
