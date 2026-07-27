/**
 * -----------------------------------------------------------------------------
 * File: ContactForm.tsx
 *
 * Description: Contact form UI - Compact & Elegant
 * Updated: July 27, 2026
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
        setMessage("✅ Thank you! Your message has been sent.");
        e.currentTarget.reset();
      } else {
        setMessage("❌ Something went wrong. Please try again.");
      }
    } catch {
      setMessage("❌ Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="name"
        required
        className="w-full rounded-2xl border border-gray-200 p-4 text-[15px] outline-none focus:border-[#C6A15B] transition-colors"
        placeholder="Your Name"
      />

      <input
        type="email"
        name="email"
        required
        className="w-full rounded-2xl border border-gray-200 p-4 text-[15px] outline-none focus:border-[#C6A15B] transition-colors"
        placeholder="Email Address"
      />

      <input
        type="tel"
        name="phone"
        className="w-full rounded-2xl border border-gray-200 p-4 text-[15px] outline-none focus:border-[#C6A15B] transition-colors"
        placeholder="Phone Number"
      />

      <textarea
        name="message"
        required
        rows={4} 
        className="w-full rounded-2xl border border-gray-200 p-4 text-[15px] outline-none focus:border-[#C6A15B] transition-colors resize-y min-h-[100px]"
        placeholder="How can Kim help?"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-[#C6A15B] py-4 font-medium text-white text-base transition hover:brightness-110 disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {message && (
        <p className="text-center text-sm font-medium">{message}</p>
      )}
    </form>
  );
}
