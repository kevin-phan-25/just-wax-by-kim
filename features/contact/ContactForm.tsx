"use client";

import { useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", { method: "POST", body: formData });
      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setStatus({ type: "success", message: "Thank you! Your message has been sent successfully." });
        form.reset();
      } else {
        setStatus({ type: "error", message: result.error || "Failed to send message. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = `
    w-full rounded-2xl border border-[#E8DDD8] bg-[#FCF8F3]
    px-6 py-5 text-base text-[#3B2A26] placeholder:text-[#8C7468]/70
    outline-none transition-all duration-300
    focus:border-[#8C5A6B] focus:bg-white focus:ring-4 focus:ring-[#D4A9B6]/10
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#3B2A26]">
          Full Name
        </label>
        <input id="name" name="name" required placeholder="Jane Smith" className={inputStyle} />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#3B2A26]">
          Email Address
        </label>
        <input id="email" type="email" name="email" required placeholder="you@example.com" className={inputStyle} />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#3B2A26]">
          Phone Number
        </label>
        <input id="phone" type="tel" name="phone" placeholder="(555) 555-5555" className={inputStyle} />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#3B2A26]">
          How Can Kim Help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us about the services you're interested in..."
          className={`${inputStyle} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#8C5A6B] px-10 py-5 font-medium uppercase tracking-widest text-white transition-all hover:bg-[#6E4A55] disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <LoaderCircle size={20} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      {status && (
        <div
          className={`rounded-2xl border px-6 py-5 text-center text-sm ${
            status.type === "success"
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )}
    </form>
  );
}
