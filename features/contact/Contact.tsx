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
        setMessage("Thank you! Your message has been sent successfully.");
        e.currentTarget.reset();
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Failed to send message. Please try again later.");
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
        className="w-full rounded-xl border p-4 outline-none focus:border-brand-gold"
        placeholder="Your Name"
      />

      <input
        type="email"
        name="email"
        required
        className="w-full rounded-xl border p-4 outline-none focus:border-brand-gold"
        placeholder="Email Address"
      />

      <input
        type="tel"
        name="phone"
        className="w-full rounded-xl border p-4 outline-none focus:border-brand-gold"
        placeholder="Phone Number"
      />

      <textarea
        name="message"
        required
        rows={5}
        className="h-32 w-full rounded-xl border p-4 outline-none focus:border-brand-gold"
        placeholder="How can Kim help?"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl bg-brand-gold px-6 py-4 font-medium text-white transition hover:opacity-90 disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {message && (
        <p className="text-center text-sm text-gray-600">{message}</p>
      )}
    </form>
  );
}
