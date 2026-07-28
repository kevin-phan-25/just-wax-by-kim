/**
 * -----------------------------------------------------------------------------
 * File: ContactInfo.tsx
 *
 * Description:
 * Contact information display.
 *
 * Changes:
 * - July 28, 2026
 *   - Updated luxury styling
 *   - Unified colors with brand theme
 *   - Improved hierarchy
 *
 * -----------------------------------------------------------------------------
 */


import {
  CONTACT_DATA
} from "./contact.data";



export default function ContactInfo() {


  return (

    <div

      className="
        space-y-8
      "

    >



      {/* Studio Location */}

      <div>


        <h3

          className="
            font-serif
            text-xl
            text-brand-espresso
          "

        >

          Visit The Studio

        </h3>



        <p

          className="
            mt-3
            text-sm
            leading-relaxed
            text-brand-taupe
          "

        >

          {CONTACT_DATA.location}

          <br />

          {CONTACT_DATA.address}

        </p>


      </div>






      {/* Contact */}

      <div>


        <h3

          className="
            font-serif
            text-xl
            text-brand-espresso
          "

        >

          Contact

        </h3>



        <p

          className="
            mt-3
            text-sm
            leading-relaxed
            text-brand-taupe
          "

        >

          {CONTACT_DATA.phone}

          <br />

          {CONTACT_DATA.email}

        </p>


      </div>







      {/* Social */}

      <div>


        <h3

          className="
            font-serif
            text-xl
            text-brand-espresso
          "

        >

          Follow

        </h3>



        <p

          className="
            mt-3
            text-sm
            text-brand-taupe
          "

        >

          {CONTACT_DATA.instagram}

        </p>


      </div>





    </div>

  );


}
