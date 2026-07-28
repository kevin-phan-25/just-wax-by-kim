"use client";

import { useState } from "react";


export default function ContactForm() {


  const [isSubmitting, setIsSubmitting] = useState(false);

  const [message, setMessage] = useState("");



  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {


    e.preventDefault();

    setIsSubmitting(true);



    const formData = new FormData(
      e.currentTarget
    );



    try {


      const response = await fetch(
        "/api/contact",
        {
          method:"POST",
          body:formData,
        }
      );



      if(response.ok){

        setMessage(
          "Thank you! Your message has been sent successfully."
        );


        e.currentTarget.reset();


      } else {


        setMessage(
          "Something went wrong. Please try again."
        );


      }



    } catch {


      setMessage(
        "Failed to send message. Please try again later."
      );



    } finally {


      setIsSubmitting(false);


    }


  };




  return (

    <form

      onSubmit={handleSubmit}

      className="
        space-y-5
      "

    >



      <input

        type="text"

        name="name"

        required

        className="
          w-full
          rounded-2xl
          border
          border-brand-border
          bg-white/70
          px-5
          py-4
          text-brand-espresso
          outline-none
          transition
          focus:border-brand-dusty-pink
        "

        placeholder="Your Name"

      />





      <input

        type="email"

        name="email"

        required

        className="
          w-full
          rounded-2xl
          border
          border-brand-border
          bg-white/70
          px-5
          py-4
          text-brand-espresso
          outline-none
          transition
          focus:border-brand-dusty-pink
        "

        placeholder="Email Address"

      />





      <input

        type="tel"

        name="phone"

        className="
          w-full
          rounded-2xl
          border
          border-brand-border
          bg-white/70
          px-5
          py-4
          text-brand-espresso
          outline-none
          transition
          focus:border-brand-dusty-pink
        "

        placeholder="Phone Number"

      />






      <textarea


        name="message"


        required


        rows={5}


        className="
          w-full
          rounded-2xl
          border
          border-brand-border
          bg-white/70
          px-5
          py-4
          text-brand-espresso
          outline-none
          transition
          focus:border-brand-dusty-pink
        "


        placeholder="How can Kim help?"


      />







      <button


        type="submit"


        disabled={isSubmitting}


        className="
          w-full
          rounded-full
          bg-brand-plum
          px-8
          py-5
          font-semibold
          tracking-wide
          text-white
          transition-all
          duration-300
          hover:bg-[#734454]
          hover:-translate-y-1
          hover:shadow-lg
          disabled:opacity-70
        "


      >

        {
          isSubmitting
          ? "Sending..."
          : "Send Message"
        }


      </button>






      {
        message && (

          <p

            className="
              text-center
              text-sm
              text-brand-taupe
            "

          >

            {message}

          </p>

        )
      }




    </form>

  );

}
