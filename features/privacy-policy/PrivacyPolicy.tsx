/**
 *
 * ---
 * File:
 * features/privacy-policy/PrivacyPolicy.tsx
 *
 * Description:
 * Luxury Privacy Policy editorial page.
 *
 * Updates:
 * • Three column editorial layout
 * • Center content placement
 * • Left aligned text
 * • Removed restrictive document feel
 * • Improved paragraph spacing
 * • Responsive phone/tablet/desktop
 *
 * ---
 *
 */

import { privacyPolicySections } from "./privacy-policy.constants";

export default function PrivacyPolicy() {
  return (
    <section
      className="
        w-full
        bg-[#FBF7F4]
      "
    >

      {/* Navbar Clearance */}
      <div
        className="
          h-[168px]
          md:h-[190px]
        "
      />


      {/* HEADER */}
      <header
        className="
          w-full
          px-6
          text-center
          mb-24
        "
      >

        <p
          className="
            uppercase
            tracking-[0.35em]
            text-sm
            text-[#8C5A6B]
          "
        >
          Studio Exploration
        </p>


        <h1
          className="
            mt-6
            font-serif
            text-4xl
            md:text-5xl
            lg:text-6xl
            text-[#3B2A26]
          "
        >
          Privacy Policy
        </h1>


        <p
          className="
            mt-8
            mx-auto
            max-w-3xl
            text-lg
            leading-relaxed
            text-[#8C7468]
          "
        >
          Your privacy matters. This policy explains how
          Just Wax by Kim collects, uses, and protects
          your personal information.
        </p>

      </header>



      {/* THREE CELL EDITORIAL GRID */}
      <div
        className="
          grid

          grid-cols-1

          lg:grid-cols-[0.35fr_1.3fr_0.35fr]

          w-full

          px-6
          md:px-10
          lg:px-16

          pb-32
        "
      >


        {/* LEFT SPACE */}
        <div
          className="
            hidden
            lg:block
          "
        />


        {/* CENTER CONTENT */}
        <main
          className="
            w-full
          "
        >

          <div
            className="
              flex
              flex-col
              gap-20
              md:gap-24
            "
          >

            {privacyPolicySections.map((section) => (

              <article
                key={section.title}
                className="
                  w-full
                "
              >

                <h2
                  className="
                    font-serif
                    text-3xl
                    md:text-4xl
                    text-left
                    leading-tight
                    text-[#3B2A26]
                  "
                >
                  {section.title}
                </h2>


                <div
                  className="
                    mt-8
                    space-y-8
                  "
                >

                  {section.content.map((paragraph) => (

                    <p
                      key={paragraph}
                      className="
                        text-base
                        md:text-lg
                        leading-[2]
                        text-left
                        text-[#6F5A50]
                      "
                    >
                      {paragraph}
                    </p>

                  ))}

                </div>


              </article>

            ))}

          </div>


        </main>


        {/* RIGHT SPACE */}
        <div
          className="
            hidden
            lg:block
          "
        />


      </div>


    </section>
  );
}
