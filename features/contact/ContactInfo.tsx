"use client";

import { useState } from "react";

import {
  ArrowRight,
  LoaderCircle,
} from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setIsSubmitting(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage(
          "Thank you for reaching out. Your message has been sent successfully."
        );

        e.currentTarget.reset();
      } else {
        setMessage(
          "We couldn't send your message. Please try again."
        );
      }
    } catch {
      setMessage(
        "Something went wrong. Please try again in a few moments."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputStyle = `
    w-full
    rounded-2xl
    border
    border-brand-border
    bg-brand-cream/50
    px-6
    py-5
    text-[15px]
    text-brand-espresso
    placeholder:text-brand-taupe/70
    outline-none
    transition-all
    duration-300
    focus:border-brand-dusty-pink
    focus:bg-white
    focus:ring-4
    focus:ring-brand-dusty-pink/10
  `;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-7"
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
            text-brand-espresso
          "
        >
          Full Name
        </label>

        <input
          id="name"
          name="name"
          required
          placeholder="Jane Smith"
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
            text-brand-espresso
          "
        >
          Email Address
        </label>

        <input
          id="email"
          type="email"
          name="email"
          required
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
            text-brand-espresso
          "
        >
          Phone Number
        </label>

        <input
          id="phone"
          type="tel"
          name="phone"
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
            text-brand-espresso
          "
        >
          How Can Kim Help?
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={7}
          placeholder="Tell us a little about the services you're interested in or ask us any questions..."
          className={`${inputStyle} resize-none`}
        />
      </div>

      {/* Button */}

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
          bg-brand-plum
          px-8
          py-5
          font-medium
          tracking-[0.18em]
          uppercase
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#734454]
          hover:shadow-xl
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
      >
        {isSubmitting ? (
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
        )}
      </button>

      {/* Status */}

      {message && (
        <div
          className="
            rounded-2xl
            border
            border-brand-border
            bg-brand-cream/60
            px-5
            py-4
          "
        >
          <p
            className="
              text-center
              text-sm
              leading-7
              text-brand-taupe
            "
          >
            {message}
          </p>
        </div>
      )}
    </form>
  );
}
