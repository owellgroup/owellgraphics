// Type declarations for EmailJS loaded via CDN
declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void;
      send: (
        serviceId: string,
        templateId: string,
        templateParams: Record<string, string>
      ) => Promise<{ text: string; status: number }>;
    };
  }
}

export {};

