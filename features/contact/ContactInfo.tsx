/**
 * -----------------------------------------------------------------------------
 * File: ContactInfo.tsx
 *
 * Description:
 * Luxury contact information.
 *
 * Changes:
 * - July 30, 2026
 *   • Removed duplicate styling
 *   • Removed fixed sizing
 *   • Unified with luxury editorial theme
 * -----------------------------------------------------------------------------
 */

import {
  Phone,
  Mail,
  MapPin,
  Instagram,
} from "lucide-react";

import { CONTACT_DATA } from "./contact.data";

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
    <section>
      {/* Business */}
      <header
        className="
          mb-10
        "
      >
        <h3
          className="
            font-serif
            text-3xl
            text-brand-espresso
          "
        >
          {businessName}
        </h3>

        <p
          className="
            mt-2
            uppercase
            tracking-[0.28em]
            text-sm
            text-brand-dusty-pink
          "
        >
          {tagline}
        </p>
      </header>

      <div
        className="
          space-y-8
        "
      >
        {/* Phone */}
        <a
          href={`tel:${phone}`}
          className="
            group
            flex
            items-start
            gap-4
            transition-colors
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-brand-border
              bg-brand-ivory
              p-3
              text-brand-dusty-pink
              transition-colors
              group-hover:bg-white
            "
          >
            <Phone size={20} />
          </div>

          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.24em]
                text-brand-taupe
              "
            >
              Phone
            </p>

            <p
              className="
                mt-1
                text-brand-espresso
                font-medium
              "
            >
              {phone}
            </p>
          </div>
        </a>

        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="
            group
            flex
            items-start
            gap-4
            transition-colors
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-brand-border
              bg-brand-ivory
              p-3
              text-brand-dusty-pink
              transition-colors
              group-hover:bg-white
            "
          >
            <Mail size={20} />
          </div>

          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.24em]
                text-brand-taupe
              "
            >
              Email
            </p>

            <p
              className="
                mt-1
                text-brand-espresso
                font-medium
              "
            >
              {email}
            </p>
          </div>
        </a>

        {/* Studio */}
        <div
          className="
            flex
            items-start
            gap-4
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-brand-border
              bg-brand-ivory
              p-3
              text-brand-dusty-pink
            "
          >
            <MapPin size={20} />
          </div>

          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.24em]
                text-brand-taupe
              "
            >
              Studio
            </p>

            <p
              className="
                mt-1
                text-brand-espresso
                font-medium
              "
            >
              {address}
            </p>

            <p
              className="
                mt-1
                text-sm
                text-brand-taupe
              "
            >
              Private Studio • By Appointment Only
            </p>
          </div>
        </div>

        {/* Instagram */}
        <a
          href={`https://instagram.com/${instagram.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            flex
            items-start
            gap-4
            transition-colors
          "
        >
          <div
            className="
              rounded-2xl
              border
              border-brand-border
              bg-brand-ivory
              p-3
              text-brand-dusty-pink
              transition-colors
              group-hover:bg-white
            "
          >
            <Instagram size={20} />
          </div>

          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.24em]
                text-brand-taupe
              "
            >
              Instagram
            </p>

            <p
              className="
                mt-1
                text-brand-espresso
                font-medium
              "
            >
              {instagram}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
