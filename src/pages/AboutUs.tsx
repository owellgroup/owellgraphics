import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Target, Users, Award, Lightbulb } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", desc: "To deliver innovative design and technology solutions that empower businesses in Namibia and beyond." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of trends, using cutting-edge tools and techniques to deliver modern solutions." },
  { icon: Users, title: "Client Focus", desc: "Your success is our success. We work closely with you to understand and exceed your expectations." },
  { icon: Award, title: "Quality", desc: "We take pride in every pixel and every line of code, delivering excellence in everything we do." },
];

const AboutUs = () => {
  return (
    <Layout>
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            About <span className="text-primary">Owell Graphics</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-secondary-foreground/70 max-w-2xl mx-auto">
            Based in Windhoek, Namibia, we are a full-service design and technology company passionate about helping businesses grow through exceptional digital experiences and stunning visual design.
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-elevated p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
