import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Mail, Server, Shield, Cloud, Zap, Check, Globe, HardDrive, Users, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const emailPackages = [
  {
    name: "Basic Package",
    price: "N$ 100",
    period: "/month",
    features: [
      "1 Domain",
      "1 Email Account (1 User)",
      "5GB Storage",
      "Webmail Access",
      "Mobile & Outlook Setup Support",
      "Spam Protection",
    ],
    popular: false,
  },
  {
    name: "Starter Package",
    price: "N$ 250",
    period: "/month",
    features: [
      "1 Domain",
      "Up to 5 Email Accounts",
      "25GB Total Storage",
      "Webmail Access",
      "Mobile & Outlook Setup Support",
      "Spam Protection",
      "Basic Email Backup",
    ],
    popular: true,
  },
  {
    name: "Business Package",
    price: "N$ 450",
    period: "/month",
    features: [
      "1 Domain",
      "Up to 10 Email Accounts",
      "50GB Total Storage",
      "Webmail Access",
      "Mobile & Outlook Setup Support",
      "Advanced Spam Filtering",
      "Daily Backups",
      "Email Forwarding & Aliases",
    ],
    popular: false,
  },
  {
    name: "Premium Package",
    price: "N$ 800",
    period: "/month",
    features: [
      "1 Domain",
      "Unlimited Email Accounts",
      "100GB Storage",
      "Priority Support",
      "Advanced Security",
      "Daily Backups",
      "Email Forwarding & Aliases",
      "Custom Email Configuration Support",
    ],
    popular: false,
  },
];

const hostingFeatures = [
  { icon: Mail, title: "Email Hosting", description: "Professional email hosting with your domain name" },
  { icon: Server, title: "Web Hosting", description: "Reliable web hosting for your websites" },
  { icon: Shield, title: "Security", description: "Advanced security and spam protection" },
  { icon: Cloud, title: "Cloud Storage", description: "Scalable cloud storage solutions" },
];

const Hosting = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="text-4xl md:text-5xl font-heading font-extrabold mb-4"
            >
              Professional <span className="text-primary">Hosting Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.2 }} 
              className="text-secondary-foreground/70 max-w-2xl mx-auto"
            >
              We provide reliable email hosting and web hosting solutions to keep your business online and connected.
            </motion.p>
          </div>

          {/* Animated Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {hostingFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-secondary-foreground/10 h-full animate-float">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                  <p className="text-secondary-foreground/70 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Server Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border-2 border-primary/30 flex items-center justify-center shadow-2xl animate-float">
                <div className="relative">
                  <Server className="w-32 h-32 md:w-40 md:h-40 text-primary animate-pulse" />
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary rounded-full animate-ping" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 bg-primary/60 rounded-full animate-pulse" />
                </div>
              </div>
              <div className="absolute -inset-8 bg-primary/10 rounded-3xl blur-2xl -z-10 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Email Hosting Packages */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-4"
          >
            Email Hosting <span className="text-primary">Packages</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-center mb-12 max-w-xl mx-auto"
          >
            Choose the perfect email hosting package for your business needs.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emailPackages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`relative group ${pkg.popular ? "md:-mt-4" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold z-10">
                    Most Popular
                  </div>
                )}
                <div className={`relative bg-card rounded-2xl shadow-xl border-2 ${pkg.popular ? "border-primary" : "border-border"} p-6 h-full flex flex-col`}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-heading font-extrabold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground">{pkg.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 flex-grow mb-6">
                    {pkg.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        pkg.popular
                          ? "bg-primary text-primary-foreground hover:brightness-110"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Hosting Info */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="w-full h-64 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border-2 border-primary/30 flex items-center justify-center shadow-2xl">
                  <Globe className="w-32 h-32 text-primary animate-pulse" />
                </div>
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl -z-10 animate-pulse" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Web <span className="text-primary">Hosting</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                We provide reliable web hosting services to keep your website online 24/7. Our hosting solutions are optimized for performance, security, and scalability.
              </p>
              <div className="space-y-4">
                {[
                  "99.9% Uptime Guarantee",
                  "Fast SSD Storage",
                  "Free SSL Certificates",
                  "24/7 Technical Support",
                  "Easy Website Management",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Hosting;

