/**
 * -----------------------------------------------------------------------------
 * File:
 * middleware.ts
 *
 * Description:
 * Site-wide password protection for Just Wax by Kim.
 *
 * Behavior:
 * • Protects the entire website before opening day
 * • Allows access to the password page
 * • Allows access to the password validation API
 * • Uses an HTTP-only cookie after successful authentication
 * • Can be disabled through Vercel environment variables
 * -----------------------------------------------------------------------------
 */

import { NextRequest, NextResponse } from "next/server";

const ACCESS_COOKIE = "jwkb_site_access";

export function middleware(request: NextRequest) {
  /*
   * ---------------------------------------------------------
   * SITE LOCK SWITCH
   * ---------------------------------------------------------
   *
   * Set:
   *
   * SITE_LOCK_ENABLED=true
   *
   * while the website is private.
   *
   * Change to:
   *
   * SITE_LOCK_ENABLED=false
   *
   * on opening day.
   */

  const lockEnabled =
    process.env.SITE_LOCK_ENABLED === "true";

  if (!lockEnabled) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  /*
   * ---------------------------------------------------------
   * ALLOWED ROUTES
   * ---------------------------------------------------------
   *
   * These must remain accessible so the password page works.
   */

  if (
    pathname === "/site-access" ||
    pathname.startsWith("/api/site-access") ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  /*
   * ---------------------------------------------------------
   * CHECK ACCESS COOKIE
   * ---------------------------------------------------------
   */

  const accessCookie =
    request.cookies.get(ACCESS_COOKIE)?.value;

  const validAccessToken =
    process.env.SITE_ACCESS_TOKEN;

  if (
    accessCookie &&
    validAccessToken &&
    accessCookie === validAccessToken
  ) {
    return NextResponse.next();
  }

  /*
   * ---------------------------------------------------------
   * REDIRECT TO PASSWORD PAGE
   * ---------------------------------------------------------
   */

  const url =
    request.nextUrl.clone();

  url.pathname = "/site-access";

  /*
   * Remember where the visitor was trying to go.
   */

  url.searchParams.set(
    "from",
    pathname
  );

  return NextResponse.redirect(url);
}

/*
 * Run middleware against pages and API routes,
 * while avoiding static files.
 */

export const config = {
  matcher: [
    "/((?!.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml|woff|woff2|ttf|otf)$).*)",
  ],
};
