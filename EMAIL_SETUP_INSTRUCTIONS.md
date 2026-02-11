# Email Setup Instructions

## Quick Setup Guide (5 Minutes)

The contact form is configured to send emails directly to **info@owellgraphics.com** using Google SMTP via EmailJS.

**SMTP Credentials (already configured in code):**
- Host: smtp.gmail.com
- Username: owellgraphics23@gmail.com
- Password: jjww vwwk ovrg rut
- Recipient: info@owellgraphics.com

### Step 1: Install EmailJS Package

Run this command in your terminal:
```bash
npm install @emailjs/browser
```

### Step 2: Create EmailJS Account (Free)

1. Go to https://www.emailjs.com
2. Sign up for a free account
3. Verify your email

### Step 3: Add Email Service

1. Go to **Email Services** → **Add New Service**
2. Select **Gmail** or **Custom SMTP**
3. Enter these SMTP settings:
   - **Host:** `smtp.gmail.com`
   - **Port:** `587`
   - **Username:** `owellgraphics23@gmail.com`
   - **Password:** `jjww vwwk ovrg rut`
   - **Secure:** No (TLS)
4. Click **Create Service**
5. Copy your **Service ID** (e.g., `service_xxxxx`)

### Step 4: Create Email Template

1. Go to **Email Templates** → **Create New Template**
2. Use the template from `email-template.html` or create a simple template with these variables:
   - `{{to_email}}` - Recipient email (info@owellgraphics.com)
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone
   - `{{service}}` - Service interested in
   - `{{message}}` - Message content
3. Set **To Email** to: `info@owellgraphics.com`
4. Set **From Name** to: `{{from_name}}`
5. Set **Reply To** to: `{{from_email}}`
6. Copy your **Template ID** (e.g., `template_xxxxx`)

### Step 5: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

### Step 6: Update Configuration

Open `src/lib/emailService.ts` and update these values:

```typescript
const EMAIL_CONFIG = {
  SERVICE_ID: "service_xxxxx",        // Your Service ID from Step 3
  TEMPLATE_ID: "template_xxxxx",      // Your Template ID from Step 4
  PUBLIC_KEY: "xxxxxxxxxxxxx",        // Your Public Key from Step 5
  RECIPIENT_EMAIL: "info@owellgraphics.com",
};
```

### Step 7: Test

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox at **info@owellgraphics.com**

## Email Template Preview

The email template is saved in `email-template.html`. You can copy its HTML content into EmailJS template editor for a beautiful formatted email.

## Troubleshooting

- **Emails not sending?** Make sure you've updated all three values in `emailService.ts`
- **Getting errors?** Check the browser console for detailed error messages
- **Fallback mode?** If EmailJS isn't configured, the form will open your email client as a fallback

## Security Note

The email credentials are stored in the code file. For production, consider using environment variables or a more secure method.

