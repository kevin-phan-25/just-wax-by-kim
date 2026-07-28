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

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Just Wax by Kim <contact@justwaxbykim.com>", // Update after domain verification
      to: [process.env.CONTACT_TO_EMAIL || "justwaxbykim@gmail.com"],
      replyTo: email,
      subject: `New Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: system-ui, -apple-system, sans-serif; background: #f9f5f1; padding: 40px 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
            .header { background: #4a2c1f; color: white; padding: 35px 40px; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 500; }
            .content { padding: 40px; line-height: 1.7; color: #3f2a1e; }
            .label { font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #9c7c6a; margin-bottom: 4px; }
            .value { font-size: 17px; margin-bottom: 20px; }
            .message-box { background: #f9f5f1; padding: 20px; border-radius: 12px; white-space: pre-wrap; }
            .footer { text-align: center; padding: 25px; color: #9c7c6a; font-size: 14px; border-top: 1px solid #f0e9e0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Just Wax by Kim</h1>
              <p style="margin: 8px 0 0; opacity: 0.9;">New Contact Inquiry</p>
            </div>
            
            <div class="content">
              <div class="label">Name</div>
              <div class="value">${name}</div>
              
              <div class="label">Email</div>
              <div class="value">${email}</div>
              
              <div class="label">Phone</div>
              <div class="value">${phone}</div>
              
              <div class="label">Message</div>
              <div class="message-box">${message}</div>
            </div>
            
            <div class="footer">
              Received on ${new Date().toLocaleDateString("en-US", { 
                weekday: "long", 
                month: "long", 
                day: "numeric", 
                year: "numeric" 
              })}
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
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
