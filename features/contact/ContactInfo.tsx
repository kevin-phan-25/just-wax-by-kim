/**
 * ---
 * File:
 * features/contact/ContactInfo.tsx
 *
 * Description:
 * Luxury contact information block.
 *
 * Updates:
 * • Optimized for standalone contact page
 * • Responsive phone / iPad / desktop
 * • Improved editorial spacing
 * • Unified luxury typography
 * • Enhanced contact touch targets
 *
 * ---
 */

import {
  Phone,
  Mail,
  MapPin,
  Instagram,
} from "lucide-react";

import {
  CONTACT_DATA,
} from "./contact.data";


export default function ContactInfo() {


  const {
    businessName,
    tagline,
    phone,
    email,
    address,
    instagram,
  } = CONTACT_DATA;



  return (

    <section
      className="
        w-full
      "
    >



      {/* BRAND HEADER */}
      <header
        className="
          text-center

          lg:text-left
        "
      >

        <h2
          className="
            font-serif

            text-3xl

            md:text-4xl

            leading-tight

            text-[#3B2A26]
          "
        >
          {businessName}
        </h2>



        <p
          className="
            mt-4

            uppercase

            tracking-[0.28em]

            text-xs

            md:text-sm

            text-[#D4A9B6]
          "
        >
          {tagline}
        </p>


      </header>







      {/* CONTACT DETAILS */}
      <div
        className="
          mt-10

          space-y-7

          w-full

          max-w-md

          mx-auto

          lg:mx-0
        "
      >



        <ContactItem
          icon={<Phone size={20} />}
          label="Phone"
          value={phone}
          href={`tel:${phone}`}
        />



        <ContactItem
          icon={<Mail size={20} />}
          label="Email"
          value={email}
          href={`mailto:${email}`}
        />



        <ContactItem
          icon={<MapPin size={20} />}
          label="Studio"
          value={address}
        />



        <ContactItem
          icon={<Instagram size={20} />}
          label="Instagram"
          value={instagram}
          href={`https://instagram.com/${instagram.replace(
            "@",
            ""
          )}`}
        />



      </div>


    </section>

  );

}







function ContactItem({

  icon,

  label,

  value,

  href,

}: {

  icon: React.ReactNode;

  label: string;

  value: string;

  href?: string;

}) {



  const content = (

    <>

      {/* ICON */}
      <span
        className="
          flex

          h-11

          w-11

          shrink-0

          items-center

          justify-center

          rounded-full

          bg-[#F6E7E1]

          text-[#8C5A6B]
        "
      >
        {icon}
      </span>





      {/* TEXT */}
      <div
        className="
          text-left
        "
      >

        <p
          className="
            text-[11px]

            uppercase

            tracking-[0.24em]

            text-[#8C7468]
          "
        >
          {label}
        </p>



        <p
          className="
            mt-2

            text-sm

            sm:text-base

            font-medium

            leading-relaxed

            text-[#3B2A26]
          "
        >
          {value}
        </p>


      </div>


    </>

  );




  if (href) {


    return (

      <a
        href={href}

        target={
          href.includes("instagram")
            ? "_blank"
            : undefined
        }

        rel="noopener noreferrer"

        className="
          group

          flex

          items-start

          justify-center

          gap-4

          transition-opacity

          duration-300

          hover:opacity-70

          lg:justify-start
        "
      >

        {content}

      </a>

    );


  }




  return (

    <div
      className="
        flex

        items-start

        justify-center

        gap-4

        lg:justify-start
      "
    >

      {content}

    </div>

  );

}
