/**
 * -----------------------------------------------------------------------------
 * File:
 * app/api/contact/route.ts
 *
 * Contact Form API
 *
 * Sends:
 * 1. Notification email to Kim
 * 2. Confirmation email to customer
 * -----------------------------------------------------------------------------
 */

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    console.log("----- CONTACT FORM -----");

    console.log("RESEND_API_KEY:", !!process.env.RESEND_API_KEY);
    console.log("CONTACT_EMAIL:", process.env.CONTACT_EMAIL);

    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY");
    }

    if (!process.env.CONTACT_EMAIL) {
      throw new Error("Missing CONTACT_EMAIL");
    }

    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    console.log({
      name,
      email,
      phone,
      message,
    });

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email address.",
        },
        {
          status: 400,
        }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const from = "Just Wax by Kim <contact@justwaxbykim.com>";

    //
    // EMAIL TO KIM
    //

    const notify = await resend.emails.send({
      from,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Contact Form • ${name}`,
      html: `
      <div style="font-family:Arial;padding:40px;background:#FCF8F3;">
        <h1>New Contact Form</h1>

        <p><strong>Name:</strong> ${safeName}</p>

        <p><strong>Email:</strong> ${safeEmail}</p>

        <p><strong>Phone:</strong> ${safePhone}</p>

        <hr />

        <p>${safeMessage}</p>
      </div>
      `,
    });

    console.log("Notify Response:");
    console.log(notify);

    if (notify.error) {
      throw new Error(JSON.stringify(notify.error));
    }

    //
    // EMAIL TO CUSTOMER
    //

    const confirm = await resend.emails.send({
      from,
      to: email,
      subject: "We've received your message 💕",
      html: `
      <div style="font-family:Arial;padding:40px;background:#FCF8F3;">
        <h1>Hello ${safeName},</h1>

        <p>
          Thank you for contacting
          <strong>Just Wax by Kim.</strong>
        </p>

        <p>
          We've received your message and will respond
          as soon as possible.
        </p>

        <br/>

        <p>
          Warmly,<br/>
          <strong>Kim</strong>
        </p>
      </div>
      `,
    });

    console.log("Confirmation Response:");
    console.log(confirm);

    if (confirm.error) {
      throw new Error(JSON.stringify(confirm.error));
    }

    return NextResponse.json({
      success: true,
    });

  } catch (err) {

    console.error("CONTACT API ERROR");
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error:
          err instanceof Error
            ? err.message
            : "Unknown server error",
      },
      {
        status: 500,
      }
    );
  }
}
