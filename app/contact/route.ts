/**
 * -----------------------------------------------------------------------------
 * File: app/api/contact/route.ts
 * Description: Handles contact form submissions
 * -----------------------------------------------------------------------------
 */

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string || "Not provided";
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    console.log("New Contact Form Submission:");
    console.log({ name, email, phone, message });

    // TODO: Add email service here (Resend, Nodemailer, etc.)

    return NextResponse.json({
      success: true,
      message: "Message received successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
