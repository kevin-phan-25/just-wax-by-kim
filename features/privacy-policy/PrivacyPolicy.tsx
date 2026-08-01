/**
 * File:
 * features/privacy-policy/PrivacyPolicy.tsx
 *
 * Description:
 * Luxury Privacy Policy presentation page.
 *
 * Updates:
 * • Responsive editorial layout
 * • Mobile / tablet / desktop optimization
 * • Removed divider accents
 * • Centered content column
 * • Left aligned policy text
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
            md:text-5xl
            xl:text-6xl
            text-[#3B2A26]
          "
        >
          Privacy Policy
        </h1>


        <p
          className="
            mt-8
            mx-auto
            max-w-2xl
            text-base
            md:text-lg
            leading-relaxed
            text-[#8C7468]
          "
        >
          Your privacy matters. Learn how Just Wax by Kim
          collects, uses, and protects your personal
          information.
        </p>

      </header>




      {/* RESPONSIVE EDITORIAL CONTENT */}
      <div
        className="
          grid

          grid-cols-1

          md:grid-cols-5

          px-6

          pb-32
        "
      >


        {/* LEFT SPACING */}
        <div
          className="
            hidden
            md:block
          "
        />



        {/* CONTENT */}
        <main
          className="
            md:col-span-3

            mx-auto

            w-full

            max-w-3xl

            xl:max-w-4xl
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
                        mb-6

                        text-base
                        md:text-[17px]

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



        {/* RIGHT SPACING */}
        <div
          className="
            hidden
            md:block
          "
        />


      </div>


    </section>
  );
}
