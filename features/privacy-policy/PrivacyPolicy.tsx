/**
 * File:
 * features/privacy-policy/PrivacyPolicy.tsx
 *
 * Description:
 * Luxury Privacy Policy presentation page.
 *
 * Updates:
 * • Removed divider accents
 * • Added 3-column editorial layout
 * • Centered content column
 * • Left aligned policy text
 * • Improved luxury spacing
 */

import { privacyPolicySections } from "./privacy-policy.constants";

export default function PrivacyPolicy() {
  return (
    <section className="w-full">

      {/* Navbar clearance */}
      <div className="h-[216px]" />


      {/* HEADER */}
      <header
        className="
          mx-auto
          max-w-4xl
          px-6
          text-center
          mb-20
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
            md:text-6xl
            text-[#3B2A26]
          "
        >
          Privacy Policy
        </h1>


        <p
          className="
            mt-8
            text-lg
            leading-relaxed
            text-[#8C7468]
          "
        >
          Your privacy matters. Learn how Just Wax by Kim
          collects, uses, and protects your personal
          information.
        </p>

      </header>



      {/* THREE COLUMN EDITORIAL LAYOUT */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-3
          px-6
          pb-32
        "
      >

        {/* LEFT EMPTY COLUMN */}
        <div />



        {/* CENTER CONTENT COLUMN */}
        <main
          className="
            mx-auto
            w-full
            max-w-3xl
          "
        >

          {privacyPolicySections.map(
            (section) => (

              <article
                key={section.title}
                className="
                  mb-16
                  text-left
                "
              >

                <h2
                  className="
                    mb-6
                    font-serif
                    text-2xl
                    md:text-3xl
                    text-[#3B2A26]
                  "
                >
                  {section.title}
                </h2>



                {section.content.map(
                  (paragraph) => (

                    <p
                      key={paragraph}
                      className="
                        mb-5
                        text-base
                        leading-[1.9]
                        text-[#6F5A50]
                      "
                    >
                      {paragraph}
                    </p>

                  )
                )}

              </article>

            )
          )}

        </main>



        {/* RIGHT EMPTY COLUMN */}
        <div />

      </div>


    </section>
  );
}
