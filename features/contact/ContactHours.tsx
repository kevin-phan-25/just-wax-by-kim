/**
 * -----------------------------------------------------------------------------
 * File: ContactHours.tsx
 *
 * Description:
 * Studio operating hours display.
 *
 * Changes:
 * - July 28, 2026
 *   - Updated luxury styling
 *   - Unified typography/colors
 *   - Removed default gray palette
 *
 * -----------------------------------------------------------------------------
 */


const HOURS = [

  {
    day: "Monday - Friday",
    time: "9:00 AM - 6:00 PM"
  },

  {
    day: "Saturday",
    time: "9:00 AM - 3:00 PM"
  },

  {
    day: "Sunday",
    time: "Closed"
  }

];



export default function ContactHours() {


  return (

    <div>


      <h3

        className="
          font-serif
          text-xl
          text-brand-espresso
        "

      >

        Studio Hours

      </h3>




      <div

        className="
          mt-5
          space-y-4
        "

      >

        {
          HOURS.map((item) => (

            <div

              key={item.day}

              className="
                flex
                justify-between
                text-sm
                text-brand-taupe
              "

            >

              <span>

                {item.day}

              </span>



              <span

                className="
                  font-medium
                  text-brand-espresso
                "

              >

                {item.time}

              </span>


            </div>

          ))
        }


      </div>


    </div>

  );


}
