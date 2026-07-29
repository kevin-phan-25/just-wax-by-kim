import { NextResponse } from "next/server";


export async function POST(
  request: Request
) {

  try {

    const formData = await request.formData();


    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");


    console.log(
      "New Contact Form Submission:",
      {
        name,
        email,
        phone,
        message,
      }
    );


    /*
      TODO:
      Add email sending here.

      Options:
      - Resend
      - SendGrid
      - AWS SES
      - SMTP
    */


    return NextResponse.json(
      {
        success: true,
        message:
          "Contact form submitted successfully",
      },
      {
        status: 200,
      }
    );


  } catch (error) {


    console.error(
      "Contact API Error:",
      error
    );


    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to process contact request",
      },
      {
        status: 500,
      }
    );

  }

}
