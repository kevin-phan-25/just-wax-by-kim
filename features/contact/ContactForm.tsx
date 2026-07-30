"use client";

/**
 * -----------------------------------------------------------------------------
 * File: ContactForm.tsx
 *
 * Description:
 * Luxury Contact Form
 *
 * Changes:
 * - July 30, 2026
 *   • Removed fixed sizing
 *   • Matches luxury editorial theme
 *   • Responsive layout
 *   • Unified input styling
 *   • Improved accessibility
 * -----------------------------------------------------------------------------
 */

import { useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

type Status =
  | {
      type: "success" | "error";
      message: string;
    }
  | null;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
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
    border-brand-border
    bg-brand-ivory
    px-6
    py-4
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
      className="
        flex
        flex-col
        gap-6
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
            text-brand-espresso
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
            text-brand-espresso
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
            text-brand-espresso
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
            text-brand-espresso
          "
        >
          How Can Kim Help?
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about the service you're interested in or ask any questions..."
          className={`${inputStyle} resize-y`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="
          group
          inline-flex
          items-center
          justify-center
          gap-3

          rounded-full

          bg-brand-dusty-pink

          px-8
          py-4

          font-medium
          uppercase
          tracking-[0.18em]

          text-white

          transition-all
          duration-300

          hover:bg-[#7A4D5D]
          hover:-translate-y-0.5

          disabled:cursor-not-allowed
          disabled:opacity-60
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
      {status && (
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
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-red-200 bg-red-50 text-red-700"
            }
          `}
        >
          {status.message}
        </div>
      )}
    </form>
  );
}
