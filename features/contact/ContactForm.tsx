/**
 * -----------------------------------------------------------------------------
 * File:
 * features/contact/ContactForm.tsx
 *
 * Description:
 * Luxury contact form.
 *
 * Changes:
 * • Optimized for standalone contact page
 * • Added stronger TypeScript typing
 * • Improved responsive spacing
 * • Preserved luxury editorial styling
 *
 * -----------------------------------------------------------------------------
 */

"use client";

import {
  useState,
} from "react";

import type {
  FormEvent,
} from "react";

import {
  ArrowRight,
  LoaderCircle,
} from "lucide-react";


type Status =
  | {
      type: "success" | "error";
      message: string;
    }
  | null;



export default function ContactForm() {


  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false);


  const [
    status,
    setStatus,
  ] = useState<Status>(null);



  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();


    setIsSubmitting(true);
    setStatus(null);



    const form =
      e.currentTarget;


    const formData =
      new FormData(form);



    try {

      const response =
        await fetch(
          "/api/contact",
          {
            method: "POST",
            body: formData,
          }
        );


      const result =
        await response
          .json()
          .catch(
            () => ({})
          );



      if (
        response.ok &&
        result.success
      ) {

        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully.",
        });


        form.reset();


      } else {

        setStatus({
          type: "error",
          message:
            result.error ??
            "Unable to send your message. Please try again.",
        });

      }



    } catch {

      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again later.",
      });


    } finally {

      setIsSubmitting(false);

    }

  }



  const inputStyle = `
    w-full
    rounded-2xl
    border
    border-[#E8DDD8]
    bg-[#FCF8F3]
    px-6
    py-4
    text-[#3B2A26]
    placeholder:text-[#8C7468]/70
    outline-none
    transition-all
    duration-300

    focus:border-[#D4A9B6]
    focus:bg-white
    focus:ring-4
    focus:ring-[#D4A9B6]/20
  `;



  return (

    <form
      onSubmit={handleSubmit}
      className="
        space-y-6
      "
    >


      {/* Name */}
      <div>

        <label
          htmlFor="name"
          className="
            mb-2
            block
            text-sm
            font-medium
            text-[#3B2A26]
          "
        >
          Full Name
        </label>


        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
          className={inputStyle}
        />

      </div>




      {/* Email */}
      <div>

        <label
          htmlFor="email"
          className="
            mb-2
            block
            text-sm
            font-medium
            text-[#3B2A26]
          "
        >
          Email Address
        </label>


        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={inputStyle}
        />

      </div>




      {/* Phone */}
      <div>

        <label
          htmlFor="phone"
          className="
            mb-2
            block
            text-sm
            font-medium
            text-[#3B2A26]
          "
        >
          Phone Number
        </label>


        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 555-5555"
          className={inputStyle}
        />

      </div>




      {/* Message */}
      <div>

        <label
          htmlFor="message"
          className="
            mb-2
            block
            text-sm
            font-medium
            text-[#3B2A26]
          "
        >
          How Can Kim Help?
        </label>


        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="
Tell us about the service you're interested in or ask any questions...
          "
          className={`${inputStyle} resize-none`}
        />

      </div>




      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="
          group
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-full
          bg-[#D4A9B6]
          px-8
          py-4
          font-medium
          uppercase
          tracking-[0.18em]
          text-white
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-[#8C5A6B]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >

        {
          isSubmitting ? (

            <>
              <LoaderCircle
                size={18}
                className="animate-spin"
              />

              Sending...
            </>

          ) : (

            <>
              Send Message

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </>

          )
        }

      </button>




      {/* Status */}
      {
        status && (

          <div
            className={`
              rounded-2xl
              border
              px-6
              py-4
              text-center
              text-sm

              ${
                status.type === "success"
                  ? 
                  "border-green-200 bg-green-50 text-green-700"
                  :
                  "border-red-200 bg-red-50 text-red-700"
              }
            `}
          >

            {status.message}

          </div>

        )
      }


    </form>

  );

}
