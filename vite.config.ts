import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { readFileSync } from "fs";

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

// Load .env file manually for server-side use
function loadEnvFile() {
  const env: Record<string, string> = {};
  
  // Try multiple env file names
  const envFiles = [".env", ".env.local", "env.local", ".env.development"];
  
  for (const fileName of envFiles) {
    try {
      const envFile = readFileSync(fileName, "utf-8");
      console.log(`✓ Loaded environment variables from ${fileName}`);
      envFile.split("\n").forEach((line) => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith("#")) {
          const equalIndex = trimmed.indexOf("=");
          if (equalIndex > 0) {
            const key = trimmed.substring(0, equalIndex).trim();
            let value = trimmed.substring(equalIndex + 1).trim();
            
            // Remove quotes if present (both single and double quotes)
            if ((value.startsWith('"') && value.endsWith('"')) || 
                (value.startsWith("'") && value.endsWith("'"))) {
              value = value.slice(1, -1);
            }
            
            if (key && value) {
              env[key] = value;
              // Also set process.env immediately
              process.env[key] = value;
            }
          }
        }
      });
      break; // Stop after first successful file read
    } catch (e) {
      // File doesn't exist, try next one
      continue;
    }
  }
  
  return env;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env vars for both client and server
  const viteEnv = loadEnv(mode, process.cwd(), "");
  const dotEnv = loadEnvFile();
  
  // Merge env vars (dotEnv takes precedence, then viteEnv, then process.env)
  const env = { ...viteEnv, ...dotEnv };
  
  // Also set process.env for server-side code (CRITICAL for server-side access)
  Object.keys(dotEnv).forEach((key) => {
    process.env[key] = dotEnv[key];
  });
  
  // Log loaded env vars in development (without showing passwords)
  if (mode === "development") {
    console.log("\n🔧 Environment Variables Loaded:");
    console.log("  SMTP_HOST:", env.SMTP_HOST || "Not set");
    console.log("  SMTP_PORT:", env.SMTP_PORT || "Not set");
    console.log("  SMTP_USER:", env.SMTP_USER || "Not set");
    console.log("  SMTP_PASS:", env.SMTP_PASS ? "***" : "Not set");
    console.log("  SMTP_TO_EMAIL:", env.SMTP_TO_EMAIL || "Not set");
    console.log("");
  }

  const contactEmailPlugin: Plugin = {
    name: "contact-email-endpoint",
    configureServer(server) {
      server.middlewares.use("/api/contact", (req, res, next) => {
        if (req.method !== "POST") {
          return next();
        }

        let body = "";
        req.on("data", (chunk) => {
          body += chunk.toString();
        });

        req.on("end", async () => {
          try {
            // Dynamically import nodemailer only when needed (inside async function)
            let nodemailer: any;
            try {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore - nodemailer runs only in the Node (dev server) environment
              nodemailer = await import("nodemailer");
            } catch (e) {
              console.error("Failed to import nodemailer:", e);
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              return res.end(JSON.stringify({ error: "Email service not configured. Please install nodemailer: npm install nodemailer" }));
            }

            // Use process.env for server-side env vars (loadEnv + process.env for compatibility)
            // Check process.env first (set by loadEnvFile), then env object, then defaults
            const smtpHost = process.env.SMTP_HOST || env.SMTP_HOST || "smtp.gmail.com";
            const smtpPort = Number(process.env.SMTP_PORT || env.SMTP_PORT || 587);
            let smtpUser = process.env.SMTP_USER || env.SMTP_USER;
            let smtpPass = process.env.SMTP_PASS || env.SMTP_PASS;
            const smtpToEmail = process.env.SMTP_TO_EMAIL || env.SMTP_TO_EMAIL || "info@owellgraphics.com";

            // Google App Passwords: Remove spaces if present (App Passwords are often provided with spaces but should be used without)
            if (smtpPass) {
              smtpPass = smtpPass.replace(/\s+/g, "");
            }
            
            // Ensure email is trimmed
            if (smtpUser) {
              smtpUser = smtpUser.trim();
            }

            // Debug logging (only in development)
            if (mode === "development") {
              console.log("📧 Email Configuration Check:");
              console.log("  SMTP_HOST:", smtpHost);
              console.log("  SMTP_PORT:", smtpPort);
              console.log("  SMTP_USER:", smtpUser ? `✓ ${smtpUser}` : "✗ Missing");
              console.log("  SMTP_PASS:", smtpPass ? `✓ ${smtpPass.substring(0, 4)}****` : "✗ Missing");
              console.log("  SMTP_TO_EMAIL:", smtpToEmail);
            }

            // Validate required env vars
            if (!smtpUser || !smtpPass) {
              console.error("❌ SMTP credentials missing!");
              console.error("  SMTP_USER:", smtpUser ? "✓" : "✗ Missing");
              console.error("  SMTP_PASS:", smtpPass ? "✓" : "✗ Missing");
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              return res.end(JSON.stringify({ error: "Email service not configured. Please check your .env or env.local file has SMTP_USER and SMTP_PASS set." }));
            }

            // Gmail SMTP configuration
            const transporter = nodemailer.default.createTransport({
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

            const data = JSON.parse(body || "{}") as Partial<ContactPayload>;

            if (!data.name || !data.email || !data.service || !data.message) {
              res.statusCode = 400;
              res.setHeader("Content-Type", "application/json");
              return res.end(JSON.stringify({ error: "Missing required fields" }));
            }

            const html = buildContactEmailHtml(data as ContactPayload);

            await transporter.sendMail({
              from: `"Owell Graphics" <${smtpUser}>`,
              to: smtpToEmail,
              replyTo: data.email,
              subject: `New Contact Form Inquiry: ${data.service} - ${data.name}`,
              html,
              text: `New contact form inquiry from ${data.name} (${data.email})\n\nService: ${data.service}\nPhone: ${data.phone || "Not provided"}\n\nMessage:\n${data.message}`,
            });

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ ok: true }));
          } catch (error) {
            console.error("Error handling contact form request:", error);
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Failed to send email" }));
          }
        });
      });
    },
  };

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      contactEmailPlugin,
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
