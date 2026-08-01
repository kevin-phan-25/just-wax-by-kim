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
        min-h-screen
        overflow-hidden
        bg-[#FCF8F3]
      "
    >

      {/* Navbar clearance */}
      <div className="h-[216px]" />


      <div
        className="
          relative
          z-10
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


          <div
            className="
              mx-auto
              mt-8
              h-px
              w-24
              bg-[#D8B4A0]
            "
          />


          <p
            className="
              mt-8
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

              ))}

            </article>

          ))}

        </div>

      </div>


      <div
        aria-hidden
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-[#E8DDD8]
        "
      />

    </section>
  );
}
