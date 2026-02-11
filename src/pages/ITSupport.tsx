import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { 
  Monitor, 
  Wifi, 
  Shield, 
  Settings, 
  HardDrive, 
  Cloud, 
  Zap, 
  Check, 
  Laptop,
  Smartphone,
  Server,
  Database,
  Network,
  Lock,
  HeadphonesIcon,
  MonitorCheck
} from "lucide-react";

const itServices = [
  {
    icon: Monitor,
    title: "Desktop Support",
    description: "Hardware and software troubleshooting for desktop computers",
  },
  {
    icon: Laptop,
    title: "Laptop Repair",
    description: "Professional laptop repair and maintenance services",
  },
  {
    icon: Smartphone,
    title: "Mobile Device Support",
    description: "Setup and troubleshooting for smartphones and tablets",
  },
  {
    icon: Network,
    title: "Network Setup",
    description: "Complete network installation and configuration",
  },
  {
    icon: Wifi,
    title: "WiFi Configuration",
    description: "Wireless network setup and optimization",
  },
  {
    icon: Server,
    title: "Server Management",
    description: "Server installation, configuration, and maintenance",
  },
  {
    icon: Database,
    title: "Data Backup & Recovery",
    description: "Secure data backup solutions and recovery services",
  },
  {
    icon: Shield,
    title: "Security Solutions",
    description: "Antivirus, firewall, and security system setup",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud migration and cloud-based solutions",
  },
  {
    icon: Settings,
    title: "System Configuration",
    description: "Operating system installation and optimization",
  },
  {
    icon: HardDrive,
    title: "Hardware Upgrades",
    description: "RAM, storage, and component upgrades",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "System speed and performance improvements",
  },
];

const ITSupport = () => {
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
              Professional <span className="text-primary">IT Support</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.2 }} 
              className="text-secondary-foreground/70 max-w-2xl mx-auto mb-6"
            >
              Comprehensive IT support services to keep your technology running smoothly. We help you remotely and on-site.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full"
            >
              <MonitorCheck className="w-5 h-5" />
              <span className="font-semibold">Remote Support Available</span>
            </motion.div>
          </div>

          {/* Animated IT Icons */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                className="relative w-64 h-64 md:w-80 md:h-80"
              >
                {/* Central Monitor */}
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 border-2 border-primary/40 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                    <Monitor className="w-16 h-16 md:w-20 md:h-20 text-primary" />
                  </div>
                </motion.div>

                {/* Orbiting Icons */}
                {[
                  { icon: Shield, delay: 0 },
                  { icon: Network, delay: 0.5 },
                  { icon: Cloud, delay: 1 },
                  { icon: Zap, delay: 1.5 },
                ].map((item, i) => {
                  const angle = (i * 90) * (Math.PI / 180);
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + item.delay, type: "spring" }}
                      animate={{
                        rotate: [0, 360],
                        x: [x, x],
                        y: [y, y],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }
                      }}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 flex items-center justify-center shadow-lg backdrop-blur-sm">
                        <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-4"
          >
            Our IT Support <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-center mb-12 max-w-xl mx-auto"
          >
            Comprehensive IT solutions to keep your business technology running efficiently.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card rounded-2xl shadow-xl border border-border p-6 h-full animate-float">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote Support Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Remote <span className="text-primary">Support</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                We provide remote IT support services, allowing us to help you quickly and efficiently without needing to be on-site. Our remote support includes:
              </p>
              <div className="space-y-4">
                {[
                  "Quick problem diagnosis and resolution",
                  "Software installation and updates",
                  "System configuration and optimization",
                  "Security scans and updates",
                  "Data backup assistance",
                  "24/7 remote monitoring available",
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 border-2 border-primary/30 flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <MonitorCheck className="w-32 h-32 text-primary mx-auto mb-4" />
                    </motion.div>
                    <div className="flex gap-2 justify-center">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                          className="w-3 h-3 bg-primary rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl -z-10 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-center mb-12"
          >
            What We <span className="text-primary">Provide</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HeadphonesIcon,
                title: "24/7 Support",
                description: "Round-the-clock technical support whenever you need it",
              },
              {
                icon: Lock,
                title: "Security First",
                description: "Comprehensive security solutions to protect your data",
              },
              {
                icon: Zap,
                title: "Fast Response",
                description: "Quick response times for all your IT issues",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ITSupport;

