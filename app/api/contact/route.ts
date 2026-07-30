/**
 * -----------------------------------------------------------------------------
 * File: app/api/contact/route.ts
 *
 * Description:
 * Contact form email handler.
 *
 * Features:
 * - Sends new inquiry notification to Kim
 * - Sends confirmation email to customer
 * - Uses verified Resend domain
 *
 * -----------------------------------------------------------------------------
 */

import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(
  process.env.RESEND_API_KEY
);



export async function POST(
  request: Request
) {

  try {

    const formData =
      await request.formData();


    const name =
      String(formData.get("name") ?? "")
        .trim();

    const email =
      String(formData.get("email") ?? "")
        .trim();

    const phone =
      String(formData.get("phone") ?? "")
        .trim();

    const message =
      String(formData.get("message") ?? "")
        .trim();



    if (
      !name ||
      !email ||
      !message
    ) {

      return NextResponse.json(
        {
          success: false,
          error:
            "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );

    }



    /*
    |--------------------------------------------------------------------------
    | Email #1
    | Send notification to Kim
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

        <h1
          style="
            margin-top:0;
            color:#3B2A26;
          "
        >
          New Contact Form Submission
        </h1>


        <div
          style="
            margin-top:30px;
            line-height:1.8;
          "
        >

          <p>
            <strong>Name:</strong>
            ${name}
          </p>


          <p>
            <strong>Email:</strong>
            ${email}
          </p>


          <p>
            <strong>Phone:</strong>
            ${phone || "Not provided"}
          </p>

        </div>


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


        <p
          style="
            line-height:1.8;
          "
        >
          ${message.replace(/\n/g, "<br />")}
        </p>


      </div>
      `,

    });





    /*
    |--------------------------------------------------------------------------
    | Email #2
    | Confirmation email to customer
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


        <h1
          style="
            font-size:32px;
            margin-top:0;
            color:#3B2A26;
          "
        >
          Hi ${name},
        </h1>



        <p
          style="
            font-size:16px;
            line-height:1.8;
          "
        >
          Thank you for contacting
          <strong>
            Just Wax by Kim
          </strong>.
        </p>



        <p
          style="
            font-size:16px;
            line-height:1.8;
          "
        >
          We've received your message and will get back to you
          as soon as possible, usually within a few business hours.
        </p>



        <p
          style="
            font-size:16px;
            line-height:1.8;
          "
        >
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

          <p>
            Warmly,
          </p>


          <p>
            <strong>
              Kim
            </strong>
            <br />
            Just Wax by Kim
          </p>

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
