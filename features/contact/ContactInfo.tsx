/**
 * -----------------------------------------------------------------------------
 * File: ContactInfo.tsx
 *
 * Description:
 * Luxury contact information panel.
 *
 * Redesigned:
 * - Elegant icon layout
 * - Premium spacing
 * - Boutique spa aesthetic
 * - Better visual hierarchy
 *
 * -----------------------------------------------------------------------------
 */

import {
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { CONTACT_DATA } from "./contact.data";

export default function ContactInfo() {
  return (
    <div>
      {/* Section Heading */}

      <div>
        <p
          className="
            text-xs
            uppercase
            tracking-[0.30em]
            text-brand-dusty-pink
          "
        >
          Visit Us
        </p>

        <h3
          className="
            mt-3
            font-serif
            text-3xl
            text-brand-espresso
          "
        >
          Boutique Studio
        </h3>

        <p
          className="
            mt-5
            max-w-md
            leading-8
            text-brand-taupe
          "
        >
          A calm, welcoming studio designed to help you feel relaxed,
          comfortable, and confident from the moment you arrive.
        </p>
      </div>

      {/* Contact Items */}

      <div className="mt-12 space-y-8">

        {/* Location */}

        <div
          className="
            flex
            items-start
            gap-5
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-brand-dusty-pink/10
            "
          >
            <MapPin
              size={20}
              className="text-brand-dusty-pink"
            />
          </div>

          <div>
            <h4
              className="
                font-medium
                text-brand-espresso
              "
            >
              Studio Location
            </h4>

            <p
              className="
                mt-2
                leading-7
                text-brand-taupe
              "
            >
              {CONTACT_DATA.location}
              <br />
              {CONTACT_DATA.address}
            </p>
          </div>
        </div>

        <div className="border-t border-brand-border/60" />

        {/* Phone */}

        <div
          className="
            flex
            items-start
            gap-5
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-brand-dusty-pink/10
            "
          >
            <Phone
              size={20}
              className="text-brand-dusty-pink"
            />
          </div>

          <div>
            <h4
              className="
                font-medium
                text-brand-espresso
              "
            >
              Phone
            </h4>

            <p
              className="
                mt-2
                text-brand-taupe
              "
            >
              {CONTACT_DATA.phone}
            </p>
          </div>
        </div>

        <div className="border-t border-brand-border/60" />

        {/* Email */}

        <div
          className="
            flex
            items-start
            gap-5
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-brand-dusty-pink/10
            "
          >
            <Mail
              size={20}
              className="text-brand-dusty-pink"
            />
          </div>

          <div>
            <h4
              className="
                font-medium
                text-brand-espresso
              "
            >
              Email
            </h4>

            <p
              className="
                mt-2
                break-all
                text-brand-taupe
              "
            >
              {CONTACT_DATA.email}
            </p>
          </div>
        </div>

        <div className="border-t border-brand-border/60" />

        {/* Instagram */}

        <div
          className="
            flex
            items-start
            gap-5
          "
        >
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-brand-dusty-pink/10
            "
          >
            <Instagram
              size={20}
              className="text-brand-dusty-pink"
            />
          </div>

          <div>
            <h4
              className="
                font-medium
                text-brand-espresso
              "
            >
              Instagram
            </h4>

            <p
              className="
                mt-2
                text-brand-taupe
              "
            >
              {CONTACT_DATA.instagram}
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Note */}

      <div
        className="
          mt-12
          rounded-2xl
          border
          border-brand-border
          bg-brand-cream/60
          px-6
          py-5
        "
      >
        <p
          className="
            text-sm
            leading-7
            text-brand-taupe
          "
        >
          We recommend scheduling your appointment in advance to ensure
          your preferred date and time. If you have questions before
          booking, we're always happy to help.
        </p>
      </div>
    </div>
  );
}
