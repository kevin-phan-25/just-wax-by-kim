/**
 * File:
 * features/privacy-policy/PrivacyPolicy.tsx
 *
 * Description:
 * Luxury Privacy Policy presentation page.
 */

import { privacyPolicySections } from "./privacy-policy.constants";

export default function PrivacyPolicy() {
  return (
    <section
      className="
        relative
        w-full
      "
    >
      {/* Navbar clearance */}
      <div className="h-[216px]" />


      <div
        className="
          w-full
          px-6
          pb-32
        "
      >

        {/* HEADER */}
        <header
          className="
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
              mx-auto
              max-w-2xl
              text-lg
              leading-relaxed
              text-[#8C7468]
            "
          >
            Your privacy matters. Learn how Just Wax by Kim
            protects and handles your personal information.
          </p>

        </header>



        {/* CONTENT */}
        <div
          className="
            mx-auto
            max-w-5xl
          "
        >

          {privacyPolicySections.map(
            (section) => (

              <article
                key={section.title}
                className="
                  mb-14
                "
              >

                <h2
                  className="
                    font-serif
                    text-2xl
                    md:text-3xl
                    text-[#3B2A26]
                    mb-5
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
                        leading-relaxed
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

        </div>

      </div>

    </section>
  );
}
