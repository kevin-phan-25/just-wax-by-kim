/**
 * -----------------------------------------------------------------------------
 * File:
 * app/api/site-access/route.ts
 *
 * Description:
 * Server-side validation for the private website password.
 *
 * -----------------------------------------------------------------------------
 */

import {
  NextRequest,
  NextResponse,
} from "next/server";

const ACCESS_COOKIE =
  "jwkb_site_access";

export async function POST(
  request: NextRequest
) {
  try {
    const body =
      await request.json();

    const password =
      typeof body?.password === "string"
        ? body.password
        : "";

    const from =
      typeof body?.from === "string" &&
      body.from.startsWith("/")
        ? body.from
        : "/";

    const expectedPassword =
      process.env.SITE_PASSWORD;

    const accessToken =
      process.env.SITE_ACCESS_TOKEN;

    /*
     * Make sure the required environment
     * variables exist.
     */

    if (
      !expectedPassword ||
      !accessToken
    ) {
      console.error(
        "SITE_PASSWORD or SITE_ACCESS_TOKEN is missing."
      );

      return NextResponse.json(
        {
          error:
            "Site access is not configured correctly.",
        },
        {
          status: 500,
        }
      );
    }

    /*
     * Validate password.
     */

    if (
      password !==
      expectedPassword
    ) {
      return NextResponse.json(
        {
          error:
            "Incorrect password. Please try again.",
        },
        {
          status: 401,
        }
      );
    }

    /*
     * Successful authentication.
     */

    const response =
      NextResponse.json({
        success: true,
        redirect: from,
      });

    /*
     * HTTP-only cookie:
     *
     * • JavaScript cannot read it
     * • Sent automatically with requests
     * • Secure in production
     * • SameSite prevents cross-site abuse
     */

    response.cookies.set({
      name: ACCESS_COOKIE,

      value: accessToken,

      httpOnly: true,

      secure:
        process.env.NODE_ENV ===
        "production",

      sameSite: "lax",

      path: "/",

      /*
       * Keep the visitor authenticated
       * for 7 days.
       */

      maxAge:
        60 *
        60 *
        24 *
        7,
    });

    return response;
  } catch {
    return NextResponse.json(
      {
        error:
          "Unable to process the request.",
      },
      {
        status: 400,
      }
    );
  }
}
