import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Monitor, Smartphone, ShoppingCart, Palette, Globe, Check } from "lucide-react";
import { Link } from "react-router-dom";
import laptopMockup from "@/assets/laptop-mockup.png";

const services = [
  { icon: Monitor, label: "Responsive Websites" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Globe, label: "Web Applications" },
];

const plans = [
  {
    name: "Starter Pack",
    price: "N$ 1,300",
    features: ["Own Hosting", "Responsive Web", "Full Website"],
    popular: false,
  },
  {
    name: "Professional",
    price: "N$ 3,500",
    features: ["Hosting Included", "Email Hosting", "Responsive Web", "Full Website"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Let's Talk",
    features: ["Hosting Packages", "Domain", "Custom Solutions", "Priority Support"],
    popular: false,
  },
];

const WebDevelopment = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Web & Mobile <span className="text-primary">Development</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-secondary-foreground/70 max-w-2xl mx-auto mb-12">
            We build stunning, responsive websites and mobile apps that deliver exceptional user experiences.
          </motion.p>

          {/* Laptop image */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex justify-center mb-12">
            <div className="relative max-w-lg animate-float">
              <img src={laptopMockup} alt="Web development laptop mockup" className="w-full h-auto rounded-xl shadow-2xl" />
              <div className="absolute -inset-6 bg-primary/10 rounded-3xl blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Service tags */}
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-2 bg-secondary-foreground/5 rounded-full px-4 py-2 border border-secondary-foreground/10"
              >
                <s.icon className="w-4 h-4 text-primary" />
                <span className="text-sm">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Web Development <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">Choose the plan that fits your needs.</p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`card-elevated p-6 md:p-8 text-center relative ${plan.popular ? "border-primary ring-2 ring-primary/20" : ""}`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading font-bold text-lg mb-2">{plan.name}</h3>
                <div className="text-3xl font-heading font-extrabold text-primary mb-6">{plan.price}</div>
                <ul className="space-y-3 text-sm text-left mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`block w-full py-2.5 rounded-lg font-semibold text-center transition-all ${plan.popular ? "btn-primary" : "bg-muted hover:bg-primary hover:text-primary-foreground"}`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebDevelopment;
