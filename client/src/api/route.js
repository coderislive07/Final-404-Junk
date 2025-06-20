import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const bookingData = await request.json()

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    })

    // Email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #1f2937; color: #ffffff; padding: 20px; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #10b981; margin: 0; font-size: 28px;">404-JUNK</h1>
          <h2 style="color: #ffffff; margin: 10px 0;">New Booking Request</h2>
        </div>

        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">Service Details</h3>
          <p><strong>Service Type:</strong> ${bookingData.serviceType}</p>
          <p><strong>Weight Range:</strong> ${bookingData.weightRange}</p>
          <p><strong>Estimated Price:</strong> $${bookingData.price}</p>
        </div>

        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">Customer Information</h3>
          <p><strong>Name:</strong> ${bookingData.name}</p>
          <p><strong>Email:</strong> ${bookingData.email}</p>
          <p><strong>Phone:</strong> ${bookingData.phone}</p>
          ${bookingData.emergencyContact ? `<p><strong>Emergency Contact:</strong> ${bookingData.emergencyContact}</p>` : ""}
        </div>

        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">Service Address</h3>
          <p><strong>Address:</strong> ${bookingData.address}</p>
          <p><strong>City:</strong> ${bookingData.city}</p>
          <p><strong>Postal Code:</strong> ${bookingData.postalCode}</p>
        </div>

        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">Scheduling</h3>
          <p><strong>Preferred Date:</strong> ${bookingData.date}</p>
          <p><strong>Preferred Time:</strong> ${bookingData.time}</p>
        </div>

        ${
          bookingData.notes
            ? `
        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">Items to Remove</h3>
          <p>${bookingData.notes}</p>
        </div>
        `
            : ""
        }

        ${
          bookingData.specialInstructions
            ? `
        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">Special Instructions</h3>
          <p>${bookingData.specialInstructions}</p>
        </div>
        `
            : ""
        }

        <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #065f46; border-radius: 8px;">
          <p style="margin: 0; color: #ffffff;">
            <strong>Next Steps:</strong> Please contact the customer within 24 hours to confirm the booking details and schedule the service.
          </p>
        </div>
      </div>
    `

    // Send email
    await transporter.sendMail({
      from: bookingData.email, // Customer's email as sender
      to: "coderbhai07@gmail.com", // Your email
      subject: `New 404-JUNK Booking Request - ${bookingData.name}`,
      html: emailContent,
      replyTo: bookingData.email, // Set customer email as reply-to
    })

    // Send confirmation email to customer
    const customerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #1f2937; color: #ffffff; padding: 20px; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #10b981; margin: 0; font-size: 28px;">404-JUNK</h1>
          <h2 style="color: #ffffff; margin: 10px 0;">Booking Confirmation</h2>
        </div>

        <div style="background-color: #065f46; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
          <h3 style="color: #ffffff; margin: 0;">Thank you for choosing 404-JUNK!</h3>
          <p style="margin: 10px 0; color: #ffffff;">Your booking request has been received and is being processed.</p>
        </div>

        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">Your Booking Details</h3>
          <p><strong>Service Type:</strong> ${bookingData.serviceType}</p>
          <p><strong>Weight Range:</strong> ${bookingData.weightRange}</p>
          <p><strong>Estimated Price:</strong> $${bookingData.price}</p>
          <p><strong>Preferred Date:</strong> ${bookingData.date}</p>
          <p><strong>Preferred Time:</strong> ${bookingData.time}</p>
          <p><strong>Service Address:</strong> ${bookingData.address}, ${bookingData.city}, ${bookingData.postalCode}</p>
        </div>

        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">What Happens Next?</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li>We'll contact you within 24 hours to confirm your booking</li>
            <li>Our team will arrive at your scheduled time with professional equipment</li>
            <li>We'll provide a final quote based on actual weight</li>
            <li>We'll handle all the heavy lifting and cleanup</li>
          </ul>
        </div>

        <div style="text-align: center; margin-top: 30px;">
          <p style="color: #9ca3af; margin: 0;">
            Questions? Call us at <strong style="color: #10b981;">604-505-5865</strong>
          </p>
          <p style="color: #9ca3af; margin: 5px 0;">
            Email: <strong style="color: #10b981;">info@404junk.ca</strong>
          </p>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: "coderbhai07@gmail.com",
      to: bookingData.email,
      subject: "404-JUNK Booking Confirmation",
      html: customerEmailContent,
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const bookingData = await request.json()

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    })

    // Email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #1f2937; color: #ffffff; padding: 20px; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #10b981; margin: 0; font-size: 28px;">404-JUNK</h1>
          <h2 style="color: #ffffff; margin: 10px 0;">New Booking Request</h2>
        </div>

        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">Service Details</h3>
          <p><strong>Service Type:</strong> ${bookingData.serviceType}</p>
          <p><strong>Weight Range:</strong> ${bookingData.weightRange}</p>
          <p><strong>Estimated Price:</strong> $${bookingData.price}</p>
        </div>

        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">Customer Information</h3>
          <p><strong>Name:</strong> ${bookingData.name}</p>
          <p><strong>Email:</strong> ${bookingData.email}</p>
          <p><strong>Phone:</strong> ${bookingData.phone}</p>
          ${bookingData.emergencyContact ? `<p><strong>Emergency Contact:</strong> ${bookingData.emergencyContact}</p>` : ""}
        </div>

        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">Service Address</h3>
          <p><strong>Address:</strong> ${bookingData.address}</p>
          <p><strong>City:</strong> ${bookingData.city}</p>
          <p><strong>Postal Code:</strong> ${bookingData.postalCode}</p>
        </div>

        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">Scheduling</h3>
          <p><strong>Preferred Date:</strong> ${bookingData.date}</p>
          <p><strong>Preferred Time:</strong> ${bookingData.time}</p>
        </div>

        ${
          bookingData.notes
            ? `
        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">Items to Remove</h3>
          <p>${bookingData.notes}</p>
        </div>
        `
            : ""
        }

        ${
          bookingData.specialInstructions
            ? `
        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">Special Instructions</h3>
          <p>${bookingData.specialInstructions}</p>
        </div>
        `
            : ""
        }

        <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #065f46; border-radius: 8px;">
          <p style="margin: 0; color: #ffffff;">
            <strong>Next Steps:</strong> Please contact the customer within 24 hours to confirm the booking details and schedule the service.
          </p>
        </div>
      </div>
    `

    // Send email
    await transporter.sendMail({
      from: bookingData.email, // Customer's email as sender
      to: "coderbhai07@gmail.com", // Your email
      subject: `New 404-JUNK Booking Request - ${bookingData.name}`,
      html: emailContent,
      replyTo: bookingData.email, // Set customer email as reply-to
    })

    // Send confirmation email to customer
    const customerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #1f2937; color: #ffffff; padding: 20px; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #10b981; margin: 0; font-size: 28px;">404-JUNK</h1>
          <h2 style="color: #ffffff; margin: 10px 0;">Booking Confirmation</h2>
        </div>

        <div style="background-color: #065f46; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
          <h3 style="color: #ffffff; margin: 0;">Thank you for choosing 404-JUNK!</h3>
          <p style="margin: 10px 0; color: #ffffff;">Your booking request has been received and is being processed.</p>
        </div>

        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">Your Booking Details</h3>
          <p><strong>Service Type:</strong> ${bookingData.serviceType}</p>
          <p><strong>Weight Range:</strong> ${bookingData.weightRange}</p>
          <p><strong>Estimated Price:</strong> $${bookingData.price}</p>
          <p><strong>Preferred Date:</strong> ${bookingData.date}</p>
          <p><strong>Preferred Time:</strong> ${bookingData.time}</p>
          <p><strong>Service Address:</strong> ${bookingData.address}, ${bookingData.city}, ${bookingData.postalCode}</p>
        </div>

        <div style="background-color: #374151; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #10b981; margin-top: 0;">What Happens Next?</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li>We'll contact you within 24 hours to confirm your booking</li>
            <li>Our team will arrive at your scheduled time with professional equipment</li>
            <li>We'll provide a final quote based on actual weight</li>
            <li>We'll handle all the heavy lifting and cleanup</li>
          </ul>
        </div>

        <div style="text-align: center; margin-top: 30px;">
          <p style="color: #9ca3af; margin: 0;">
            Questions? Call us at <strong style="color: #10b981;">604-505-5865</strong>
          </p>
          <p style="color: #9ca3af; margin: 5px 0;">
            Email: <strong style="color: #10b981;">info@404junk.ca</strong>
          </p>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: "coderbhai07@gmail.com",
      to: bookingData.email,
      subject: "404-JUNK Booking Confirmation",
      html: customerEmailContent,
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
