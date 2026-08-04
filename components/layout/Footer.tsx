/**
 *
 * ---
 * File: Footer.tsx
 *
 * Description:
 * Minimal luxury footer section.
 *
 * Changes:
 *
 * • Force-clipped logo (cuts image top/bottom whitespace)
 * • Minimal top padding
 * • Logo pulled tight to “Tysons Corner, Virginia”
 * • Natural brand mark, tighter stack
 *
 * ---
 *
 */

import { Instagram } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#FCF8F3",
        paddingTop: "0px",
        paddingBottom: "28px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/*
          Force-cut logo whitespace:
          fixed viewport height + overflow hidden + negative pull
        */}
        <div
          style={{
            width: "100%",
            maxWidth: "320px",
            height: "90px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "0px",
            marginBottom: "0px",
            lineHeight: 0,
          }}
        >
          <div
            style={{
              transform: "scale(0.55)",
              transformOrigin: "center center",
              marginTop: "-12px",
              marginBottom: "-12px",
            }}
          >
            <Logo />
          </div>
        </div>

        {/* LOCATION — tight under logo */}
        <p
          style={{
            marginTop: "2px",
            marginBottom: "0px",
            fontSize: "12px",
            color: "#8C7468",
          }}
        >
          Tysons Corner, Virginia
        </p>

        {/* INSTAGRAM */}
        <a
          href="https://instagram.com/justwaxbykim"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Just Wax by Kim on Instagram"
          style={{
            marginTop: "8px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "12px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8C5A6B",
            textDecoration: "none",
          }}
        >
          <Instagram size={15} strokeWidth={1.8} />
          Instagram
        </a>

        {/* COPYRIGHT */}
        <p
          style={{
            marginTop: "14px",
            marginBottom: "0px",
            fontSize: "12px",
            color: "#8C7468",
          }}
        >
          © Just Wax by Kim. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
