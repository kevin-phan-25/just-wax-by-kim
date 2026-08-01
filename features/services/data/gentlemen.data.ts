/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/data/gentlemen.data.ts
 *
 * Description:
 * Gentlemen waxing service catalog.
 *
 * Changes:
 * - Added Gentlemen service page metadata
 * - Added category hero image
 * - Kept service cards reusable
 *
 * -----------------------------------------------------------------------------
 */

import type {
  Service,
} from "../services.types";



/**
 * Gentlemen landing page configuration
 */
export const gentlemenServicePage = {

  image:
    "/images/services/gentlement-view-pricing.jpg",

  title:
    "Gentlemen Waxing",

  description:
    "Professional waxing services designed for men who value confidence, comfort, and care.",

};



/**
 * Gentlemen service catalog
 */
export const gentlemenServices: Service[] = [


// ---------------------------------------------------------------------------
// FACE & GROOMING
// ---------------------------------------------------------------------------

{
  id:
    "gentlemen-eyebrows",

  title:
    "Eyebrows",

  category:
    "Face & Grooming",

  description:
    "Professional eyebrow waxing designed for a clean, natural, polished appearance.",

  price:
    "$20",

  duration:
    "15 minutes",

  gender:
    "gentlemen",
},


{
  id:
    "gentlemen-nose",

  title:
    "Nose",

  category:
    "Face & Grooming",

  description:
    "Quick and comfortable nose waxing service.",

  price:
    "$25",

  duration:
    "10 minutes",

  gender:
    "gentlemen",
},


{
  id:
    "gentlemen-ears",

  title:
    "Ears",

  category:
    "Face & Grooming",

  description:
    "Precision ear waxing for a clean, groomed appearance.",

  price:
    "$20",

  duration:
    "10 minutes",

  gender:
    "gentlemen",
},



// ---------------------------------------------------------------------------
// BODY GROOMING
// ---------------------------------------------------------------------------

{
  id:
    "gentlemen-chest",

  title:
    "Chest",

  category:
    "Body Grooming",

  description:
    "Professional chest waxing for smooth lasting results.",

  price:
    "$55",

  duration:
    "20 minutes",

  gender:
    "gentlemen",
},


{
  id:
    "gentlemen-back",

  title:
    "Back",

  category:
    "Body Grooming",

  description:
    "Complete back waxing service designed for comfort and confidence.",

  price:
    "$75",

  duration:
    "30 minutes",

  gender:
    "gentlemen",
},


{
  id:
    "gentlemen-full-body",

  title:
    "Full Body",

  category:
    "Body Grooming",

  description:
    "A complete luxury waxing experience designed specifically for men.",

  price:
    "$500",

  duration:
    "3 hours",

  gender:
    "gentlemen",
},


];
