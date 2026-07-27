/**
 * -----------------------------------------------------------------------------
 * File: LuxuryPromise.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Luxury brand promise section.
 *
 * Establishes the emotional positioning of:
 *
 * "More Than Just A Wax"
 *
 * Focus:
 * - Comfort
 * - Confidence
 * - Premium care
 *
 * Changes:
 * - July 27, 2026
 *   - Added v1.0.2 luxury visual experience.
 *
 * -----------------------------------------------------------------------------
 */


import { Sparkles } from "lucide-react";


const promises = [
  {
    title: "Comfort First",
    description:
      "Every appointment is designed around relaxation, privacy, and your personal comfort.",
  },
  {
    title: "Confidence Always",
    description:
      "Professional care that helps you feel beautiful, confident, and refreshed.",
  },
  {
    title: "Luxury Experience",
    description:
      "Thoughtful details create an experience that goes beyond traditional waxing.",
  },
];


export default function LuxuryPromise() {


  return (

    <section className="bg-brand-cream py-24">


      <div className="mx-auto max-w-6xl px-6">


        <div className="mx-auto max-w-3xl text-center">


          <Sparkles
            className="mx-auto mb-6 h-8 w-8 text-brand-gold"
          />


          <h2 className="text-4xl font-semibold tracking-tight text-brand-dark md:text-5xl">

            More Than
            <br />
            Just a Wax

          </h2>


          <p className="mt-6 text-lg leading-relaxed text-neutral-600">

            A premium waxing experience focused on comfort,
            confidence, and elegance.

          </p>


        </div>




        <div className="mt-16 grid gap-8 md:grid-cols-3">


          {promises.map((item) => (

            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-neutral-200
                bg-white
                p-8
                text-center
                shadow-sm
              "
            >

              <h3 className="text-xl font-semibold text-brand-dark">

                {item.title}

              </h3>


              <p className="mt-4 text-neutral-600">

                {item.description}

              </p>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}
