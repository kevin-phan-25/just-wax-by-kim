/**
 * -----------------------------------------------------------------------------
 * File:
 * app/api/contact/route.ts
 *
 * Description:
 * Contact form email handler.
 *
 * Features:
 * • Sends inquiry notification to Kim
 * • Sends confirmation email to customer
 * • Uses Resend verified domain
 * • Added validation and sanitization
 *
 * -----------------------------------------------------------------------------
 */

import {
  NextResponse,
} from "next/server";

import {
  Resend,
} from "resend";



const resend =
  new Resend(
    process.env.RESEND_API_KEY
  );



function escapeHtml(
  value: string
) {

  return value
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );

}



function isValidEmail(
  email: string
) {

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(email);

}




export async function POST(
  request: Request
) {

  try {


    if (!process.env.RESEND_API_KEY) {

      throw new Error(
        "Missing RESEND_API_KEY"
      );

    }



    const formData =
      await request.formData();



    const name =
      String(
        formData.get("name") ?? ""
      )
      .trim();



    const email =
      String(
        formData.get("email") ?? ""
      )
      .trim();



    const phone =
      String(
        formData.get("phone") ?? ""
      )
      .trim();



    const message =
      String(
        formData.get("message") ?? ""
      )
      .trim();




    if (
      !name ||
      !email ||
      !message
    ) {

      return NextResponse.json(
        {
          success:false,
          error:
            "Please complete all required fields.",
        },
        {
          status:400,
        }
      );

    }




    if (
      !isValidEmail(email)
    ) {

      return NextResponse.json(
        {
          success:false,
          error:
            "Please enter a valid email address.",
        },
        {
          status:400,
        }
      );

    }




    const safeName =
      escapeHtml(name);


    const safeEmail =
      escapeHtml(email);


    const safePhone =
      escapeHtml(
        phone || "Not provided"
      );


    const safeMessage =
      escapeHtml(message)
        .replace(
          /\n/g,
          "<br />"
        );





    /*
    |--------------------------------------------------------------------------
    | Email #1
    | Notification to Kim
    |--------------------------------------------------------------------------
    */

    await resend.emails.send({

      from:
        "Just Wax by Kim <justwaxbykim@justwaxbykim.com>",


      to:
        process.env.CONTACT_EMAIL!,


      replyTo:
        email,


      subject:
        `New Contact Form • ${name}`,


      html:

      `
      <div
        style="
          max-width:650px;
          margin:auto;
          padding:40px;
          font-family:Arial,sans-serif;
          color:#3B2A26;
          background:#FCF8F3;
          border-radius:24px;
        "
      >

        <h1>
          New Contact Form Submission
        </h1>


        <p>
          <strong>Name:</strong>
          ${safeName}
        </p>


        <p>
          <strong>Email:</strong>
          ${safeEmail}
        </p>


        <p>
          <strong>Phone:</strong>
          ${safePhone}
        </p>


        <hr
          style="
            margin:30px 0;
            border:none;
            border-top:1px solid #E8DDD8;
          "
        />


        <h3>
          Message
        </h3>


        <p>
          ${safeMessage}
        </p>


      </div>
      `,

    });






    /*
    |--------------------------------------------------------------------------
    | Email #2
    | Confirmation to customer
    |--------------------------------------------------------------------------
    */

    await resend.emails.send({

      from:
        "Just Wax by Kim <justwaxbykim@justwaxbykim.com>",


      to:
        email,


      subject:
        "We've received your message 💕",


      html:

      `
      <div
        style="
          max-width:650px;
          margin:auto;
          padding:48px;
          font-family:Arial,sans-serif;
          color:#3B2A26;
          background:#FCF8F3;
          border-radius:28px;
        "
      >

        <h1>
          Hi ${safeName},
        </h1>


        <p>
          Thank you for contacting
          <strong>
            Just Wax by Kim
          </strong>.
        </p>


        <p>
          We've received your message and will respond
          as soon as possible, usually within a few
          business hours.
        </p>


        <p>
          We look forward to helping you feel
          <strong>
            confident, comfortable, and beautifully cared.
          </strong>
        </p>


        <div
          style="
            margin-top:40px;
            padding-top:30px;
            border-top:1px solid #E8DDD8;
          "
        >

          Warmly,

          <br />

          <strong>
            Kim
          </strong>

          <br />

          Just Wax by Kim

        </div>


      </div>
      `,

    });





    return NextResponse.json(
      {
        success:true,
        message:
          "Contact form submitted successfully.",
      },
      {
        status:200,
      }
    );



  } catch(error) {


    console.error(
      "Contact API Error:",
      error
    );



    return NextResponse.json(
      {
        success:false,
        error:
          "Unable to process contact request.",
      },
      {
        status:500,
      }
    );

  }

}
