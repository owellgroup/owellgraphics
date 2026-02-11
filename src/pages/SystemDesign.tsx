import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Server, Database, Code, Cloud, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pricingItems = [
  { name: "E-commerce Store", price: "N$ 35,000" },
  { name: "Payroll System", price: "N$ 100,000" },
  { name: "Clocking System", price: "N$ 58,000" },
  { name: "CRM Tool", price: "N$ 85,000" },
  { name: "HR Management", price: "N$ 200,000" },
  { name: "Inventory & Stock Management", price: "N$ 350,000" },
  { name: "Procurement & Vendor Management", price: "N$ 340,000" },
  { name: "Accounting & Bookkeeping", price: "N$ 260,000" },
  { name: "Invoicing & Billing Systems", price: "N$ 130,000" },
  { name: "Document Management", price: "N$ 250,000" },
  { name: "Contract Management", price: "N$ 90,000" },
  { name: "Loan Management", price: "N$ 300,000" },
  { name: "Delivery Management", price: "N$ 120,000" },
  { name: "Hospital Management", price: "N$ 300,000" },
  { name: "School Management", price: "N$ 70,000" },
  { name: "Analytics Dashboards", price: "N$ 85,000" },
  { name: "Recommendation Engines", price: "N$ 100,000" },
  { name: "Property Management", price: "N$ 40,000" },
  { name: "Real Estate Listing", price: "N$ 50,000" },
  { name: "Livestock Management", price: "N$ 60,000" },
  { name: "Booking & Reservation", price: "N$ 130,000" },
];

const process = [
  { icon: Settings, label: "Requirements", desc: "We analyze your business needs" },
  { icon: Server, label: "Architecture", desc: "Design scalable system architecture" },
  { icon: Database, label: "Database", desc: "Model and build your database" },
  { icon: Code, label: "Development", desc: "Build APIs and core logic" },
  { icon: Cloud, label: "Deployment", desc: "Deploy to cloud platforms" },
];

const SystemDesign = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            System Design & <span className="text-primary">Development</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-secondary-foreground/70 max-w-2xl mx-auto mb-16">
            Comprehensive system design and engineering solutions that transform your ideas into powerful, scalable systems.
          </motion.p>

          {/* Process flow */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-2">
            {process.map((step, i) => (
              <motion.div key={step.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.15 }} className="flex items-center gap-2">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-2 animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
                    <step.icon className="w-7 h-7 md:w-9 md:h-9 text-primary" />
                  </div>
                  <div className="text-xs font-bold">{step.label}</div>
                  <div className="text-[10px] text-secondary-foreground/50 max-w-[100px]">{step.desc}</div>
                </div>
                {i < process.length - 1 && <ArrowRight className="w-5 h-5 text-primary/40 hidden md:block mt-[-20px]" />}
              </motion.div>
            ))}
          </div>

          {/* Cloud logos */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-12 flex justify-center gap-6 flex-wrap">
            {["AWS", "Google Cloud", "Azure", "Oracle"].map((cloud) => (
              <div key={cloud} className="bg-secondary-foreground/5 px-5 py-2.5 rounded-lg border border-secondary-foreground/10 text-sm font-medium text-secondary-foreground/60">
                {cloud}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            System Development <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">Enterprise-grade solutions tailored to your needs.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {pricingItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.05 }}
                className="card-elevated p-5 flex items-center justify-between group"
              >
                <div>
                  <h3 className="font-heading font-semibold text-sm">{item.name}</h3>
                </div>
                <div className="text-primary font-heading font-bold text-sm whitespace-nowrap ml-4">{item.price}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/contact" className="btn-primary inline-block rounded-full">
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SystemDesign;
