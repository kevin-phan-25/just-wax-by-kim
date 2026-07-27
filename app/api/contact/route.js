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
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Here you can integrate with Resend, Nodemailer, etc.
    // For now, we'll log it and return success
    console.log("New Contact Form Submission:");
    console.log({ name, email, phone, message });

    // TODO: Connect to email service (Resend recommended)

    return NextResponse.json({
      success: true,
      message: "Message received successfully!",
