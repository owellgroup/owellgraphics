/**
 * Simple Email Service
 * Sends emails directly via SMTP using Vite dev server endpoint
 * SMTP credentials are configured in .env file
 */

interface EmailData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

/**
 * Send email via API endpoint (handled by Vite plugin)
 * Sends emails directly via SMTP without opening email client
 */
export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Send email via API endpoint
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok && result.ok) {
      return { 
        success: true, 
        message: "Email sent successfully! We'll get back to you soon." 
      };
    } else {
      return { 
        success: false, 
        message: result.error || "Failed to send email. Please try again or contact us directly at info@owellgraphics.com" 
      };
    }
  } catch (error: any) {
    console.error("Email sending error:", error);
    
    return { 
      success: false, 
      message: "Unable to send email. Please contact us directly at info@owellgraphics.com or call 081 232 0168" 
    };
  }
};

