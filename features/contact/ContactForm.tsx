/**
 * -----------------------------------------------------------------------------
 * File: ContactForm.tsx
 * Updated: Compact Version
 * -----------------------------------------------------------------------------
 */

"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("✅ Message sent successfully!");
        e.currentTarget.reset();
      } else {
        setMessage("❌ Please try again.");
      }
    } catch {
      setMessage("❌ Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        required
        className="w-full rounded-xl border border-gray-200 px-5 py-3 text-sm outline-none focus:border-[#C6A15B]"
        placeholder="Your Name"
      />

      <input
        type="email"
        name="email"
        required
        className="w-full rounded-xl border border-gray-200 px-5 py-3 text-sm outline-none focus:border-[#C6A15B]"
        placeholder="Email Address"
      />

      <input
        type="tel"
        name="phone"
        className="w-full rounded-xl border border-gray-200 px-5 py-3 text-sm outline-none focus:border-[#C6A15B]"
        placeholder="Phone Number (optional)"
      />

      <textarea
        name="message"
        required
        rows={3}
        className="w-full rounded-xl border border-gray-200 px-5 py-3 text-sm outline-none focus:border-[#C6A15B] resize-y"
        placeholder="How can Kim help?"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-[#C6A15B] py-3.5 font-medium text-white transition hover:brightness-110 disabled:opacity-70 mt-2"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {message && <p className="text-center text-sm">{message}</p>}
    </form>
  );
}
