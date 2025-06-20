const express = require("express")
const { body, validationResult } = require("express-validator")
const nodemailer = require("nodemailer")
const router = express.Router()

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
    tls: {
      rejectUnauthorized: false,
    },
  })
}

// Validation rules
const bookingValidation = [
  body("name").trim().isLength({ min: 2, max: 100 }).withMessage("Name must be between 2 and 100 characters"),
  body("email").isEmail().normalizeEmail().withMessage("Please provide a valid email address"),
  body("phone").isMobilePhone().withMessage("Please provide a valid phone number"),
  body("address").trim().isLength({ min: 5, max: 200 }).withMessage("Address must be between 5 and 200 characters"),
  body("city").trim().isLength({ min: 2, max: 50 }).withMessage("City must be between 2 and 50 characters"),
  body("postalCode")
    .trim()
    .isLength({ min: 3, max: 10 })
    .withMessage("Postal code must be between 3 and 10 characters"),
  body("date").isISO8601().withMessage("Please provide a valid date"),
  body("time").trim().isLength({ min: 1 }).withMessage("Please select a time slot"),
  body("serviceType")
    .trim()
    .isIn(["pullup", "outside", "inside", "apartment"])
    .withMessage("Please select a valid service type"),
  body("weightRange").trim().isLength({ min: 1 }).withMessage("Please select a weight range"),
  body("price").isNumeric().withMessage("Price must be a number"),
  body("notes").optional().trim().isLength({ max: 1000 }).withMessage("Notes must be less than 1000 characters"),
  body("emergencyContact")
    .optional()
    .trim()
    .isLength({ max: 20 })
    .withMessage("Emergency contact must be less than 20 characters"),
  body("specialInstructions")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Special instructions must be less than 1000 characters"),
]

// Helper function to format service type name
const formatServiceType = (serviceType) => {
  const serviceNames = {
    pullup: "Pull Up",
    outside: "Outside + House",
    inside: "Inside + House",
    apartment: "Apartment",
  }
  return serviceNames[serviceType] || serviceType
}

// Helper function to create email HTML template
const createEmailTemplate = (bookingData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>New 404-JUNK Booking Request</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #16a34a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .section { margin-bottom: 20px; }
            .section h3 { color: #16a34a; border-bottom: 2px solid #16a34a; padding-bottom: 5px; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
            .info-item { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #16a34a; }
            .price-highlight { background: #16a34a; color: white; padding: 15px; text-align: center; border-radius: 8px; font-size: 18px; font-weight: bold; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚛 New 404-JUNK Booking Request</h1>
                <p>Customer: ${bookingData.name}</p>
            </div>
            
            <div class="content">
                <div class="price-highlight">
                    Service: ${formatServiceType(bookingData.serviceType)} | Weight: ${bookingData.weightRange} | Price: $${bookingData.price}
                </div>
                
                <div class="section">
                    <h3>📋 Customer Information</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <strong>Name:</strong><br>${bookingData.name}
                        </div>
                        <div class="info-item">
                            <strong>Email:</strong><br><a href="mailto:${bookingData.email}">${bookingData.email}</a>
                        </div>
                        <div class="info-item">
                            <strong>Phone:</strong><br><a href="tel:${bookingData.phone}">${bookingData.phone}</a>
                        </div>
                        ${
                          bookingData.emergencyContact
                            ? `
                        <div class="info-item">
                            <strong>Emergency Contact:</strong><br>${bookingData.emergencyContact}
                        </div>
                        `
                            : ""
                        }
                    </div>
                </div>
                
                <div class="section">
                    <h3>📍 Service Address</h3>
                    <div class="info-item">
                        <strong>Address:</strong><br>
                        ${bookingData.address}<br>
                        ${bookingData.city}, ${bookingData.postalCode}
                    </div>
                </div>
                
                <div class="section">
                    <h3>📅 Scheduling</h3>
                    <div class="info-grid">
                        <div class="info-item">
                            <strong>Preferred Date:</strong><br>${new Date(bookingData.date).toLocaleDateString("en-CA", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                        </div>
                        <div class="info-item">
                            <strong>Preferred Time:</strong><br>${bookingData.time}
                        </div>
                    </div>
                </div>
                
                ${
                  bookingData.notes
                    ? `
                <div class="section">
                    <h3>📝 Items to Remove</h3>
                    <div class="info-item">
                        ${bookingData.notes.replace(/\n/g, "<br>")}
                    </div>
                </div>
                `
                    : ""
                }
                
                ${
                  bookingData.specialInstructions
                    ? `
                <div class="section">
                    <h3>⚠️ Special Instructions</h3>
                    <div class="info-item">
                        ${bookingData.specialInstructions.replace(/\n/g, "<br>")}
                    </div>
                </div>
                `
                    : ""
                }
                
                <div class="section">
                    <h3>🎯 Next Steps</h3>
                    <div class="info-item">
                        <ul>
                            <li>Contact customer within 24 hours to confirm booking</li>
                            <li>Verify service address and access details</li>
                            <li>Confirm final pricing based on actual weight</li>
                            <li>Schedule pickup team and equipment</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="footer">
                <p>This booking request was submitted on ${new Date().toLocaleString("en-CA")}</p>
                <p>404-JUNK Booking System | Pay by Weight, Not by Chance</p>
            </div>
        </div>
    </body>
    </html>
  `
}

// POST /api/booking/submit
router.post("/submit", bookingValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      })
    }

    const bookingData = req.body

    // Validate date is not in the past
    const selectedDate = new Date(bookingData.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (selectedDate < today) {
      return res.status(400).json({
        success: false,
        message: "Selected date cannot be in the past",
      })
    }

    // Create transporter
    const transporter = createTransporter()

    // Verify transporter configuration
    await transporter.verify()

    // Email options
    const mailOptions = {
      from: {
        name: "404-JUNK Booking System",
        address: process.env.EMAIL_USER,
      },
      to: process.env.EMAIL_USER,
      replyTo: bookingData.email,
      subject: `🚛 New Booking Request - ${bookingData.name} - ${formatServiceType(bookingData.serviceType)}`,
      html: createEmailTemplate(bookingData),
      text: `
New 404-JUNK Booking Request

SERVICE DETAILS:
- Service Type: ${formatServiceType(bookingData.serviceType)}
- Weight Range: ${bookingData.weightRange}
- Estimated Price: $${bookingData.price}

CUSTOMER INFORMATION:
- Name: ${bookingData.name}
- Email: ${bookingData.email}
- Phone: ${bookingData.phone}
${bookingData.emergencyContact ? `- Emergency Contact: ${bookingData.emergencyContact}` : ""}

SERVICE ADDRESS:
- Address: ${bookingData.address}
- City: ${bookingData.city}
- Postal Code: ${bookingData.postalCode}

SCHEDULING:
- Preferred Date: ${bookingData.date}
- Preferred Time: ${bookingData.time}

${bookingData.notes ? `ITEMS TO REMOVE:\n${bookingData.notes}` : ""}

${bookingData.specialInstructions ? `SPECIAL INSTRUCTIONS:\n${bookingData.specialInstructions}` : ""}

Please contact the customer within 24 hours to confirm the booking.

Submitted on: ${new Date().toLocaleString("en-CA")}
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    console.log("Booking email sent successfully:", {
      messageId: info.messageId,
      customer: bookingData.name,
      email: bookingData.email,
      service: formatServiceType(bookingData.serviceType),
      timestamp: new Date().toISOString(),
    })

    // Send confirmation email to customer
    const customerMailOptions = {
      from: {
        name: "404-JUNK",
        address: process.env.EMAIL_USER,
      },
      to: bookingData.email,
      subject: "✅ Booking Confirmation - 404-JUNK",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Booking Confirmation</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #16a34a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
                .highlight { background: #16a34a; color: white; padding: 15px; text-align: center; border-radius: 8px; margin: 20px 0; }
                .info-box { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #16a34a; margin: 10px 0; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>✅ Booking Confirmed!</h1>
                    <p>Thank you for choosing 404-JUNK</p>
                </div>
                
                <div class="content">
                    <p>Hi ${bookingData.name},</p>
                    
                    <p>We've received your booking request and will contact you within 24 hours to confirm all details.</p>
                    
                    <div class="highlight">
                        <strong>${formatServiceType(bookingData.serviceType)} - ${bookingData.weightRange}</strong><br>
                        Estimated Price: <strong>$${bookingData.price}</strong>
                    </div>
                    
                    <div class="info-box">
                        <strong>📅 Scheduled For:</strong><br>
                        ${new Date(bookingData.date).toLocaleDateString("en-CA", { weekday: "long", year: "numeric", month: "long", day: "numeric" })} at ${bookingData.time}
                    </div>
                    
                    <div class="info-box">
                        <strong>📍 Service Address:</strong><br>
                        ${bookingData.address}<br>
                        ${bookingData.city}, ${bookingData.postalCode}
                    </div>
                    
                    <h3>What happens next?</h3>
                    <ul>
                        <li>We'll call you within 24 hours to confirm your booking</li>
                        <li>We'll verify the service address and access details</li>
                        <li>Our team will arrive at your scheduled time</li>
                        <li>We'll weigh your items and charge based on actual weight</li>
                    </ul>
                    
                    <p><strong>Questions?</strong> Call us at <a href="tel:6045055865">604-505-5865</a></p>
                    
                    <p>Thank you for choosing 404-JUNK - Pay by Weight, Not by Chance!</p>
                </div>
            </div>
        </body>
        </html>
      `,
      text: `
Hi ${bookingData.name},

Thank you for your 404-JUNK booking request!

SERVICE DETAILS:
- Service: ${formatServiceType(bookingData.serviceType)}
- Weight Range: ${bookingData.weightRange}
- Estimated Price: $${bookingData.price}
- Date: ${bookingData.date}
- Time: ${bookingData.time}
- Address: ${bookingData.address}, ${bookingData.city}, ${bookingData.postalCode}

We'll contact you within 24 hours to confirm all details.

Questions? Call us at 604-505-5865

Thank you for choosing 404-JUNK!
      `,
    }

    await transporter.sendMail(customerMailOptions)

    res.status(200).json({
      success: true,
      message: "Booking request submitted successfully! We will contact you within 24 hours.",
      bookingId: info.messageId,
    })
  } catch (error) {
    console.error("Error processing booking:", error)

    // Handle specific nodemailer errors
    if (error.code === "EAUTH") {
      return res.status(500).json({
        success: false,
        message: "Email authentication failed. Please try again later.",
      })
    }

    if (error.code === "ECONNECTION") {
      return res.status(500).json({
        success: false,
        message: "Unable to connect to email service. Please try again later.",
      })
    }

    res.status(500).json({
      success: false,
      message: "Failed to process booking request. Please try again or call us at 604-505-5865.",
    })
  }
})

// GET /api/booking/test
router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Booking API is working",
    timestamp: new Date().toISOString(),
  })
})

module.exports = router
