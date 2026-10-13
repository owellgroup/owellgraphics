import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/emailService";

const services = [
  "Web & Mobile Development",
  "Graphic Design",
  "System Design & Development",
  "Other",
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service || !form.message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSending(true);

    try {
      const result = await sendEmail({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
      });

      if (result.success) {
        toast({ 
          title: "Message sent successfully!", 
          description: result.message 
        });
        // Reset form
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        toast({ 
          title: "Failed to send message", 
          description: result.message,
          variant: "destructive" 
        });
      }
    } catch (error) {
      toast({ 
        title: "Error sending message", 
        description: "Please try again or contact us directly.",
        variant: "destructive" 
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Get In <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-secondary-foreground/70 max-w-xl mx-auto">
            Ready to start your project? Fill in the form below and we'll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="card-elevated p-6">
              <Mail className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold mb-1">Email</h3>
              <a href="mailto:info@owellgraphics.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@owellgraphics.com</a>
            </div>
            <div className="card-elevated p-6">
              <Phone className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold mb-1">Phone</h3>
              <a href="tel:0812320168" className="text-sm text-muted-foreground hover:text-primary transition-colors">+264 81 232 0168</a>
            </div>
            <div className="card-elevated p-6">
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-heading font-bold mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">Windhoek, Namibia</p>
            </div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 card-elevated p-6 md:p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  placeholder="081 xxx xxxx"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Service *</label>
                <select
                  value={form.service}
                  onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Message *</label>
              <textarea
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                rows={5}
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button type="submit" disabled={sending} className="btn-primary rounded-full flex items-center gap-2 mx-auto">
              <Send className="w-4 h-4" />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
