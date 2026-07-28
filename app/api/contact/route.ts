import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim() || "Not provided";
    const message = (formData.get("message") as string)?.trim();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Check API Key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json(
        { error: "Server configuration error. Please contact support." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Just Wax by Kim <contact@justwaxbykim.com>",
      to: [process.env.CONTACT_TO_EMAIL || "justwaxbykim@gmail.com"],
      replyTo: email,
      subject: `New Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: system-ui, sans-serif; padding: 30px; background: #f9f5f1; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; }
            .header { background: #4a2c1f; color: white; padding: 30px; text-align: center; }
            .content { padding: 35px; line-height: 1.65; color: #3f2a1e; }
            .label { font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #9c7c6a; margin-bottom: 5px; }
            .value { font-size: 16.5px; margin-bottom: 18px; }
            .message { background: #f9f5f1; padding: 20px; border-radius: 10px; white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Just Wax by Kim</h1>
              <p>New Contact Form Submission</p>
            </div>
            <div class="content">
              <div class="label">Name</div>
              <div class="value">${name}</div>
              
              <div class="label">Email</div>
              <div class="value">${email}</div>
              
              <div class="label">Phone</div>
              <div class="value">${phone}</div>
              
              <div class="label">Message</div>
              <div class="message">${message}</div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (err: any) {
    console.error("Contact API Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
