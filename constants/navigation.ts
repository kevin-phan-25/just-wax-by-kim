/**

* ---
* File:
* features/contact/Contact.tsx
*
* Description:
* Standalone luxury contact presentation.
*
* Navbar clearance is handled by the shared studio layout.
* This component controls only its internal section spacing.
* ---

*/

import ContactForm from "./ContactForm";
import ContactHours from "./ContactHours";
import ContactInfo from "./ContactInfo";

export default function Contact() {
return ( <section
   className="
     relative
     w-full
     overflow-hidden
     bg-[#FBF7F4]
     pb-20
     sm:pb-24
     md:pb-32
   "
 > <div
     aria-hidden
     className="
       pointer-events-none
       absolute
       inset-0
       bg-[radial-gradient(ellipse_at_30%_20%,rgba(232,200,188,0.25),transparent_50%)]
     "
   />

```
  <div
    className="
      relative
      z-10
      w-full
      px-5
      sm:px-8
      md:px-10
      lg:px-16
      xl:px-24
      pt-12
      sm:pt-16
      md:pt-20
    "
  >
    <header
      className="
        flex
        flex-col
        items-center
        text-center
        mb-16
        md:mb-24
      "
    >
      <p
        className="
          uppercase
          tracking-[0.35em]
          text-xs
          sm:text-sm
          text-[#8C5A6B]
        "
      >
        Get In Touch
      </p>

      <h1
        className="
          mt-6
          max-w-5xl
          font-serif
          text-4xl
          sm:text-5xl
          md:text-6xl
          leading-[1.1]
          tracking-[-0.035em]
          text-[#3B2A26]
        "
      >
        We'd Love To Hear From You
      </h1>

      <p
        className="
          mt-6
          max-w-3xl
          text-base
          sm:text-lg
          leading-relaxed
          text-[#8C7468]
        "
      >
        Whether you're preparing for your first appointment
        or simply have a question, we're here to make every
        interaction feel warm, welcoming, and beautifully personal.
      </p>
    </header>

    <div
      className="
        grid
        w-full
        grid-cols-1
        lg:grid-cols-[0.2fr_0.8fr_1.2fr_0.8fr_0.2fr]
        gap-10
        xl:gap-14
        items-start
      "
    >
      <div className="hidden lg:block" />

      <div
        className="
          flex
          flex-col
          items-center
          text-center
          lg:items-start
          lg:text-left
        "
      >
        <ContactInfo />
      </div>

      <div
        className="
          flex
          w-full
          flex-col
          items-center
          text-center
        "
      >
        <h2
          className="
            font-serif
            text-3xl
            md:text-4xl
            text-[#3B2A26]
          "
        >
          Send A Message
        </h2>

        <p
          className="
            mt-4
            max-w-md
            leading-relaxed
            text-[#6F5A50]
          "
        >
          We typically respond within a few hours during
          normal business hours.
        </p>

        <div className="mt-10 w-full">
          <ContactForm />
        </div>
      </div>

      <div
        className="
          flex
          flex-col
          items-center
          text-center
          lg:items-start
          lg:text-left
        "
      >
        <ContactHours />
      </div>

      <div className="hidden lg:block" />
    </div>
  </div>
</section>
```

);
}
