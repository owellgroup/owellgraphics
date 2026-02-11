# Environment Variables Setup

## Step 1: Create .env File

Create a `.env` file in the root directory of your project (same level as `package.json`) with the following content:

```env
# SMTP Email Configuration
# Google Gmail SMTP Settings

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=owellgraphics23@gmail.com
SMTP_PASS=jjww vwwk ovrg rut
SMTP_TO_EMAIL=info@owellgraphics.com
```

**Note:** The `.env` file is already added to `.gitignore` so your credentials won't be committed to git.

## Step 2: Install nodemailer

Run these commands in your terminal:

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

## How It Works

1. ✅ Contact form sends data to `/api/contact` endpoint
2. ✅ Vite dev server plugin handles the request
3. ✅ Uses nodemailer with SMTP credentials from `.env` file
4. ✅ Sends email directly to `info@owellgraphics.com`
5. ✅ **No email client opens** - emails are sent automatically!

## Email Template

The email will be beautifully formatted with:
- Contact details (name, email, phone, service)
- Message content
- Professional HTML styling
- Reply-to set to the sender's email

## Testing

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your inbox at **info@owellgraphics.com**
4. No email client should open - email sends automatically!

## Troubleshooting

- **Email not sending?** Make sure `.env` file exists in the root directory
- **Getting errors?** Check that nodemailer is installed: `npm install nodemailer`
- **SMTP errors?** Verify your Gmail app password is correct

