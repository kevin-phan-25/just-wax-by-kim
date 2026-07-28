"use client";

import { useState } from "react";


export default function ContactForm() {


  const [isSubmitting,setIsSubmitting] = useState(false);

  const [message,setMessage] = useState("");



  const handleSubmit = async (
    e:React.FormEvent<HTMLFormElement>
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
          body:formData
        }
      );



      if(response.ok){

        setMessage(
          "✓ Message sent successfully!"
        );

        e.currentTarget.reset();


      } else {


        setMessage(
          "Please try again."
        );


      }



    } catch {


      setMessage(
        "Something went wrong."
      );


    } finally {


      setIsSubmitting(false);


    }


  };




  const inputStyle = `

    w-full
    rounded-2xl
    border
    border-brand-border
    bg-brand-cream/50
    px-5
    py-3.5
    text-sm
    text-brand-espresso
    outline-none
    transition
    focus:border-brand-dusty-pink

  `;



  return (

    <form

      onSubmit={handleSubmit}

      className="
        space-y-4
      "

    >


      <input

        name="name"

        required

        className={inputStyle}

        placeholder="Your Name"

      />



      <input

        name="email"

        type="email"

        required

        className={inputStyle}

        placeholder="Email Address"

      />



      <input

        name="phone"

        type="tel"

        className={inputStyle}

        placeholder="Phone Number"

      />



      <textarea

        name="message"

        required

        rows={4}

        className={`${inputStyle} resize-none`}

        placeholder="How can Kim help?"

      />





      <button

        type="submit"

        disabled={isSubmitting}

        className="

          mt-3

          w-full

          rounded-full

          bg-brand-plum

          py-4

          font-semibold

          tracking-wide

          text-white

          transition-all

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
