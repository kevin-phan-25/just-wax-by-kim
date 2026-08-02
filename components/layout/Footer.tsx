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
 * • Uses official brand logo
 * • Hardcoded top spacing (inline styles)
 * • Logo position forced with margin
 * • Tight location / social / copyright stack
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
        paddingTop: "8px",
        paddingBottom: "32px",
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
        {/* LOGO */}
        <div
          style={{
            marginTop: "48px", // 0.5in down
            marginBottom: "4px",
            lineHeight: 0,
          }}
        >
          <Logo />
        </div>

        {/* LOCATION */}
        <p
          style={{
            marginTop: "4px",
            marginBottom: 0,
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
            marginTop: "16px",
            marginBottom: 0,
            fontSize: "12px",
            color: "#8C7468",
          }}
        >
          © 2026 Just Wax by Kim. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
