```tsx
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

const ACCESS_COOKIE =
  "jwk_site_access";

export function middleware(
  request: NextRequest
) {
  /*
   * ---------------------------------------------------------------------------
   * SITE LOCK SWITCH
   * ---------------------------------------------------------------------------
   *
   * Vercel:
   *
   * SITE_LOCK_ENABLED=true
   *
   * Website remains private.
   *
   * Opening day:
   *
   * SITE_LOCK_ENABLED=false
   *
   * Website becomes public.
   */

  const lockEnabled =
    process.env.SITE_LOCK_ENABLED ===
    "true";

  if (!lockEnabled) {
    return NextResponse.next();
  }


  const { pathname } =
    request.nextUrl;


  /*
   * ---------------------------------------------------------------------------
   * ALLOWED ROUTES
   * ---------------------------------------------------------------------------
   *
   * These routes must remain accessible while the website is locked.
   */

  if (
    pathname === "/site-access" ||
    pathname.startsWith(
      "/api/site-access"
    ) ||
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
    request.cookies.get(
      ACCESS_COOKIE
    )?.value;

  const validAccessToken =
    process.env.SITE_ACCESS_TOKEN;


  /*
   * ---------------------------------------------------------------------------
   * AUTHENTICATED
   * ---------------------------------------------------------------------------
   *
   * The visitor has successfully entered
   * the password.
   *
   * Allow the request through.
   *
   * If the request is "/" this means:
   *
   * middleware
   *     ↓
   * (studio)/page.tsx
   *     ↓
   * (studio)/layout.tsx
   *     ↓
   * Navbar
   *     ↓
   * MobileMenu
   *     ↓
   * Hero
   *     ↓
   * About
   *     ↓
   * Services
   *     ↓
   * Booking
   *     ↓
   * Footer
   */

  if (
    accessCookie &&
    validAccessToken &&
    accessCookie ===
      validAccessToken
  ) {
    return NextResponse.next();
  }


  /*
   * ---------------------------------------------------------------------------
   * NOT AUTHENTICATED
   * ---------------------------------------------------------------------------
   */

  const url =
    request.nextUrl.clone();

  url.pathname =
    "/site-access";

  /*
   * Remember where the visitor
   * originally attempted to go.
   */

  url.searchParams.set(
    "from",
    pathname
  );

  return NextResponse.redirect(
    url
  );
}


/*
 * -----------------------------------------------------------------------------
 * MATCHER
 * -----------------------------------------------------------------------------
 *
 * Run middleware against application routes while avoiding common static files.
 * -----------------------------------------------------------------------------
 */

export const config = {
  matcher: [
    "/((?!.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml|woff|woff2|ttf|otf)$).*)",
  ],
};
```

