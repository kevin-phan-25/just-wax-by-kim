/**
 * -----------------------------------------------------------------------------
 * File:
 * features/contact/ContactInfo.tsx
 *
 * Description:
 * Luxury contact information block.
 *
 * Changes:
 * • Optimized for standalone contact page
 * • Improved editorial spacing
 * • Unified luxury typography
 *
 * -----------------------------------------------------------------------------
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
    <div>

      {/* Brand */}
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
            text-[#3B2A26]
          "
        >
          {businessName}
        </h2>


        <p
          className="
            mt-3
            uppercase
            tracking-[0.28em]
            text-sm
            text-[#D4A9B6]
          "
        >
          {tagline}
        </p>

      </header>



      <div
        className="
          mt-10
          space-y-8
        "
      >

        {/* Phone */}
        <ContactItem
          icon={<Phone size={20} />}
          label="Phone"
          value={phone}
          href={`tel:${phone}`}
        />


        {/* Email */}
        <ContactItem
          icon={<Mail size={20} />}
          label="Email"
          value={email}
          href={`mailto:${email}`}
        />


        {/* Location */}
        <ContactItem
          icon={<MapPin size={20} />}
          label="Studio"
          value={address}
        />


        {/* Instagram */}
        <ContactItem
          icon={<Instagram size={20} />}
          label="Instagram"
          value={instagram}
          href={`https://instagram.com/${instagram.replace("@", "")}`}
        />


      </div>

    </div>
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
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-2xl
          border
          border-[#E8DDD8]
          bg-[#FCF8F3]
          text-[#D4A9B6]
        "
      >
        {icon}
      </div>


      <div>

        <p
          className="
            text-xs
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
            font-medium
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
        target={href.includes("instagram") ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="
          flex
          items-start
          gap-4
          transition-opacity
          hover:opacity-70
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
        gap-4
      "
    >
      {content}
    </div>
  );

}
