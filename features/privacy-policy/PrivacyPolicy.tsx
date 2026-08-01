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
 * • Full width luxury layout
 * • Centered editorial presentation
 * • Improved paragraph spacing
 * • Removed boxed card styling
 * • Better mobile/tablet/desktop rhythm
 * • Unified Just Wax by Kim theme
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
            tracking-[0.4em]
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
            mx-auto
            mt-8
            max-w-4xl
            text-base
            md:text-lg
            leading-[1.9]
            text-[#8C7468]
          "
        >
          Your privacy matters. This policy explains how
          Just Wax by Kim collects, uses, and protects
          your personal information.
        </p>

      </header>



      {/* CONTENT */}
      <div
        className="
          w-full
          px-6
          md:px-10
          lg:px-16
          pb-32
        "
      >

        <div
          className="
            mx-auto
            w-full
            max-w-6xl
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
                text-center
              "
            >

              {/* TITLE */}
              <h2
                className="
                  font-serif
                  text-3xl
                  md:text-4xl
                  leading-tight
                  text-[#3B2A26]
                "
              >
                {section.title}
              </h2>



              {/* PARAGRAPHS */}
              <div
                className="
                  mx-auto
                  mt-10
                  max-w-4xl
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
                      tracking-[0.01em]
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

      </div>


    </section>
  );
}
