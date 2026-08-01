/**
 * ---
 * File:
 * features/services/Services.tsx
 *
 * Description:
 * Luxury services introduction section.
 *
 * Updates:
 * • Removed Ladies/Gentlemen text overlays
 * • Removed View Pricing labels
 * • Increased image presentation size
 * • Improved luxury editorial spacing
 * • Prevents image text cropping
 * ---
 */


import Link from "next/link";


export default function Services() {

return (

<section
  className="
    w-full
  "
>


  {/* HEADER */}

  <div
    className="
      w-full

      text-center
    "
  >

    <span
      className="
        uppercase

        tracking-[0.4em]

        text-sm

        text-[#8C5A6B]
      "
    >
      Our Services
    </span>



    <h2
      className="
        mt-6

        font-serif

        text-4xl

        md:text-5xl

        text-[#3B2A26]
      "
    >
      Luxury Waxing For Everyone
    </h2>



    <p
      className="
        mt-6

        mx-auto

        max-w-3xl

        text-base

        md:text-lg

        leading-relaxed

        text-[#8C7468]
      "
    >
      Thoughtfully curated waxing experiences that blend
      comfort, precision, and refined care for beautifully
      confident skin.
    </p>


  </div>





  {/* SERVICE IMAGES */}

  <div
    className="
      mt-16

      grid

      gap-10

      md:grid-cols-2

      justify-items-center

      w-full
    "
  >




    {/* LADIES IMAGE */}

    <Link
      href="/services/ladies"

      className="
        group

        relative

        overflow-hidden

        rounded-[36px]

        w-full

        max-w-[560px]

      "
    >

      <img
        src="/images/services/ladies-view-pricing.jpg"

        alt="Ladies waxing services"

        className="
          w-full

          aspect-[4/5]

          object-cover

          scale-[1.03]

          transition

          duration-700

          group-hover:scale-[1.08]
        "
      />

    </Link>






    {/* GENTLEMEN IMAGE */}

    <Link
      href="/services/gentlemen"

      className="
        group

        relative

        overflow-hidden

        rounded-[36px]

        w-full

        max-w-[560px]

      "
    >

      <img
        src="/images/services/gentlement-view-pricing.jpg"

        alt="Gentlemen waxing services"

        className="
          w-full

          aspect-[4/5]

          object-cover

          scale-[1.03]

          transition

          duration-700

          group-hover:scale-[1.08]
        "
      />

    </Link>



  </div>



</section>

);

}
