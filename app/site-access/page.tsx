/**
 * -----------------------------------------------------------------------------
 * File:
 * app/site-access/page.tsx
 *
 * Description:
 * Private access page shown before the public website is launched.
 *
 * Behavior:
 * • Completely independent from the public site layout
 * • No Navbar
 * • No Footer
 * • Password authentication
 * • Redirects to the requested page after authentication
 * -----------------------------------------------------------------------------
 */

"use client";

import {
  type FormEvent,
  useState,
} from "react";

import { useSearchParams } from "next/navigation";

export default function SiteAccessPage() {
  const searchParams = useSearchParams();

  const from =
    searchParams.get("from") || "/";

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "/api/site-access",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            password,
            from,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        setError(
          data?.error ||
            "Incorrect password."
        );

        setPassword("");
        setLoading(false);

        return;
      }

      window.location.href =
        data.redirect || "/";
    } catch {
      setError(
        "Something went wrong. Please try again."
      );

      setLoading(false);
    }
  };

  return (
    <main
      className="
        flex
        min-h-screen
        w-full
        items-center
        justify-center

        bg-[#FCF8F3]

        px-5
        py-12

        sm:px-8
        sm:py-16

        md:px-10
        md:py-20
      "
    >
      <div
        className="
          w-full
          max-w-md
          text-center
        "
      >
        {/* HEADER */}

        <div className="mb-10">
          <h1
            className="
              font-serif
              text-4xl
              tracking-tight
              text-[#3B2A26]

              sm:text-5xl
            "
          >
            Coming Soon
          </h1>

          <p
            className="
              mt-4
              text-sm
              leading-relaxed
              text-[#8C7468]
            "
          >
            This site is under construction.
          </p>
        </div>

        {/* PASSWORD CARD */}

        <div
          className="
            rounded-[32px]

            border
            border-[#E8DDD8]

            bg-white/70

            px-6
            py-8

            shadow-[0_20px_60px_rgba(59,42,38,0.06)]

            sm:px-8
            sm:py-10
          "
        >
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#3B2A26]
            "
          >
            Private Access
          </p>

          <p
            className="
              mt-3
              text-xs
              leading-relaxed
              text-[#8C7468]

              sm:text-sm
            "
          >
            Enter the password to preview
            the website.
          </p>

          <form
            onSubmit={handleSubmit}
            className="
              mt-7
              flex
              flex-col
              gap-4
            "
          >
            <label
              htmlFor="site-password"
              className="sr-only"
            >
              Access password
            </label>

            <input
              id="site-password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(
                  event.target.value
                )
              }
              placeholder="Enter password"
              autoComplete="current-password"
              autoFocus
              disabled={loading}
              className="
                h-14
                w-full
                rounded-full

                border
                border-[#E8DDD8]

                bg-[#FCF8F3]

                px-5

                text-center
                text-sm
                text-[#3B2A26]

                outline-none
                transition

                placeholder:text-[#8C7468]/60

                focus:border-[#8C5A6B]

                focus:ring-2
                focus:ring-[#8C5A6B]/10

                disabled:opacity-60
              "
            />

            {error && (
              <p
                role="alert"
                className="
                  text-xs
                  text-[#8C5A6B]
                "
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={
                loading ||
                !password.trim()
              }
              className="
                flex
                min-h-[58px]
                w-full
                items-center
                justify-center

                rounded-full

                border-2
                border-[#8C5A6B]

                uppercase
                tracking-[0.22em]

                text-xs
                font-semibold
                text-[#8C5A6B]

                transition-all
                duration-300

                hover:bg-[#F6E7E1]
                hover:scale-[1.02]

                disabled:cursor-not-allowed
                disabled:opacity-50
                disabled:hover:scale-100

                sm:text-sm
              "
            >
              {loading
                ? "Checking..."
                : "Enter Website"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
