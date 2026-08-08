/**
 * -----------------------------------------------------------------------------
 * File:
 * app/site-access/page.tsx
 *
 * Description:
 * Private site access page for Just Wax by Kim.
 *
 * -----------------------------------------------------------------------------
 */

"use client";

import {
  FormEvent,
  useState,
} from "react";

import { useSearchParams } from "next/navigation";

export default function SiteAccessPage() {
  const searchParams =
    useSearchParams();

  const from =
    searchParams.get("from") || "/";

  const [
    password,
    setPassword,
  ] = useState("");

  const [
    error,
    setError,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response =
        await fetch(
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

      /*
       * The API sets the secure HTTP-only
       * access cookie.
       */

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
        min-h-screen
        w-full
        bg-[#FCF8F3]
        text-[#3B2A26]
        flex
        items-center
        justify-center
        px-6
        py-16
      "
    >
      <div
        className="
          w-full
          max-w-md
          text-center
        "
      >
        {/* BRAND */}
        <div
          className="
            mb-10
          "
        >
          <p
            className="
              uppercase
              tracking-[0.28em]
              text-[10px]
              sm:text-xs
              font-semibold
              text-[#8C5A6B]
            "
          >
            Just Wax by Kim
          </p>

          <h1
            className="
              mt-5
              font-serif
              text-4xl
              sm:text-5xl
              tracking-tight
              text-[#3B2A26]
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
            More than just a wax.
          </p>
        </div>

        {/* ACCESS CARD */}
        <div
          className="
            rounded-[32px]
            border
            border-[#E8DDD8]
            bg-white/70
            px-6
            py-8
            sm:px-8
            sm:py-10
            shadow-[0_20px_60px_rgba(59,42,38,0.06)]
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              font-semibold
              text-[#3B2A26]
            "
          >
            Private Preview
          </p>

          <p
            className="
              mt-3
              text-xs
              sm:text-sm
              leading-relaxed
              text-[#8C7468]
            "
          >
            Our website is currently
            being prepared for opening day.
            Please enter the access password
            to continue.
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
              className="
                sr-only
              "
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
              placeholder="Enter access password"
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
                sm:text-sm
                font-semibold
                text-[#8C5A6B]
                transition-all
                duration-300
                hover:bg-[#F6E7E1]
                hover:scale-[1.02]
                disabled:cursor-not-allowed
                disabled:opacity-50
                disabled:hover:scale-100
              "
            >
              {loading
                ? "Checking..."
                : "Enter Website"}
            </button>
          </form>
        </div>

        {/* FOOTER */}
        <p
          className="
            mt-8
            text-[10px]
            uppercase
            tracking-[0.16em]
            text-[#8C7468]/70
          "
        >
          Opening soon
        </p>
      </div>
    </main>
  );
}
