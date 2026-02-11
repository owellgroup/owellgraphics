import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
};

function buildContactEmailHtml(data: ContactPayload) {
  const { name, email, phone, service, message } = data;

  const safeMessage = message && message.trim().length
    ? message.replace(/\n/g, "<br />")
    : "No message provided.";

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>New Contact Form Inquiry</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin:0; padding:0; background-color:#f4f4f5; font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(15,23,42,0.12);">
              <tr>
                <td style="padding:24px 24px 16px 24px; background:linear-gradient(135deg,#020617,#0f172a);">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding-top:16px;">
                        <h1 style="margin:0; font-size:22px; line-height:1.3; color:#e5e7eb; font-weight:600;">
                          New Contact Form Inquiry
                        </h1>
                        <p style="margin:8px 0 0 0; font-size:14px; color:#9ca3af;">
                          A new inquiry has been submitted through your website contact form.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:24px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px; color:#111827;">
                    <tr>
                      <td style="padding-bottom:16px;">
                        <h2 style="margin:0 0 8px 0; font-size:18px; font-weight:600; color:#111827;">
                          Contact Details
                        </h2>
                        <table cellpadding="0" cellspacing="0" style="width:100%; font-size:14px; color:#111827;">
                          <tr>
                            <td style="padding:4px 0; width:160px; color:#6b7280;">Name</td>
                            <td style="padding:4px 0; font-weight:500;">${name}</td>
                          </tr>
                          <tr>
                            <td style="padding:4px 0; width:160px; color:#6b7280;">Email</td>
                            <td style="padding:4px 0;">
                              <a href="mailto:${email}" style="color:#0ea5e9; text-decoration:none;">${email}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:4px 0; width:160px; color:#6b7280;">Phone</td>
                            <td style="padding:4px 0;">${phone || "Not provided"}</td>
                          </tr>
                          <tr>
                            <td style="padding:4px 0; width:160px; color:#6b7280;">Service</td>
                            <td style="padding:4px 0; font-weight:500;">${service}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:16px 0 8px 0;">
                        <h2 style="margin:0 0 8px 0; font-size:18px; font-weight:600; color:#111827;">
                          Message
                        </h2>
                        <p style="margin:0; padding:10px 12px; border-radius:8px; background-color:#f9fafb; border:1px solid #e5e7eb; line-height:1.6;">
                          ${safeMessage}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:16px 24px 20px 24px; background-color:#f9fafb; border-top:1px solid #e5e7eb;">
                  <p style="margin:0; font-size:12px; color:#9ca3af; text-align:center;">
                    This email was generated from the contact form on your Owell Graphics website.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get environment variables from Vercel
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    let smtpUser = process.env.SMTP_USER;
    let smtpPass = process.env.SMTP_PASS;
    const smtpToEmail = process.env.SMTP_TO_EMAIL || 'info@owellgraphics.com';

    // Google App Passwords: Remove spaces if present
    if (smtpPass) {
      smtpPass = smtpPass.replace(/\s+/g, '');
    }
    
    // Ensure email is trimmed
    if (smtpUser) {
      smtpUser = smtpUser.trim();
    }

    // Validate required env vars
    if (!smtpUser || !smtpPass) {
      console.error('❌ SMTP credentials missing!');
      return response.status(500).json({ 
        error: 'Email service not configured. Please check your environment variables.' 
      });
    }

    // Parse request body
    const data = request.body as Partial<ContactPayload>;

    // Validate required fields
    if (!data.name || !data.email || !data.service || !data.message) {
      return response.status(400).json({ error: 'Missing required fields' });
    }

    // Gmail SMTP configuration
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false, // true for 465, false for other ports (587)
      requireTLS: true, // Force TLS
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    const html = buildContactEmailHtml(data as ContactPayload);

    await transporter.sendMail({
      from: `"Owell Graphics" <${smtpUser}>`,
      to: smtpToEmail,
      replyTo: data.email,
      subject: `New Contact Form Inquiry: ${data.service} - ${data.name}`,
      html,
      text: `New contact form inquiry from ${data.name} (${data.email})\n\nService: ${data.service}\nPhone: ${data.phone || "Not provided"}\n\nMessage:\n${data.message}`,
    });

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error('Error handling contact form request:', error);
    return response.status(500).json({ error: 'Failed to send email' });
  }
}

