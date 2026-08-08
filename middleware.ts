/**
 * -----------------------------------------------------------------------------
 * File:
 * middleware.ts
 *
 * Description:
 * Site-wide password protection for Just Wax by Kim.
 *
 * Behavior:
 * • Protects the complete public website
 * • Allows the password page
 * • Allows the authentication API
 * • Uses an HTTP-only cookie after authentication
 * • Allows the normal (studio) application after authentication
 * • Can be disabled with SITE_LOCK_ENABLED=false
 * -----------------------------------------------------------------------------
 */

import {
  NextRequest,
  NextResponse,
} from "next/server";

const ACCESS_COOKIE = "jwk_site_access";

export function middleware(request: NextRequest) {
  /*
   * ---------------------------------------------------------------------------
   * SITE LOCK SWITCH
   * ---------------------------------------------------------------------------
   */

  const lockEnabled =
    process.env.SITE_LOCK_ENABLED === "true";

  if (!lockEnabled) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  /*
   * ---------------------------------------------------------------------------
   * ALLOWED ROUTES
   * ---------------------------------------------------------------------------
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
   * ---------------------------------------------------------------------------
   * CHECK AUTHENTICATION COOKIE
   * ---------------------------------------------------------------------------
   */

  const accessCookie =
    request.cookies.get(ACCESS_COOKIE)?.value;

  const validAccessToken =
    process.env.SITE_ACCESS_TOKEN;

  /*
   * ---------------------------------------------------------------------------
   * AUTHENTICATED
   * ---------------------------------------------------------------------------
   */

  if (
    accessCookie &&
    validAccessToken &&
    accessCookie === validAccessToken
  ) {
    return NextResponse.next();
  }

  /*
   * ---------------------------------------------------------------------------
   * NOT AUTHENTICATED
   * ---------------------------------------------------------------------------
   */

  const url = request.nextUrl.clone();

  url.pathname = "/site-access";

  /*
   * Preserve the complete original URL.
   *
   * Example:
   *
   * /services/ladies
   *
   * becomes:
   *
   * /site-access?from=%2Fservices%2Fladies
   */

  url.searchParams.set(
    "from",
    `${pathname}${request.nextUrl.search}`
  );

  return NextResponse.redirect(url);
}

/*
 * -----------------------------------------------------------------------------
 * MATCHER
 * -----------------------------------------------------------------------------
 */

export const config = {
  matcher: [
    "/((?!.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml|woff|woff2|ttf|otf)$).*)",
  ],
};
