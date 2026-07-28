"use client";
import { useState } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      let result;
      try {
        result = await response.json();
      } catch {
        result = {};
      }

      console.log("API Response:", { ok: response.ok, status: response.status, result });

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          message: "✅ Thank you! Your message has been sent successfully.",
        });
        e.currentTarget.reset();
      } else {
        setStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = `
    w-full rounded-2xl border border-brand-border 
    bg-brand-cream/70 px-7 py-5 
    text-[15px] text-brand-espresso 
    placeholder:text-brand-taupe/70 
    outline-none transition-all duration-300
    focus:border-brand-dusty-pink focus:bg-white 
    focus:ring-4 focus:ring-brand-dusty-pink/10
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-brand-espresso">
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

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-brand-espresso">
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

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-brand-espresso">
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

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-brand-espresso">
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
        className="group flex w-full items-center justify-center gap-3 rounded-full bg-brand-plum px-10 py-5 font-medium tracking-widest uppercase text-white transition-all hover:bg-[#6a3f4e] disabled:opacity-70"
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
          role="status" 
          aria-live="polite"
          className={`rounded-2xl border px-6 py-5 text-center text-sm leading-relaxed ${
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
