import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { PenTool, FileText, CreditCard, Image, Palette, Check } from "lucide-react";
import businessCard1 from "@/assets/graphic design/Design 1.jpg";
import businessCard2 from "@/assets/graphic design/Design3.jpg";
import logoImage1 from "@/assets/graphic design/logo.png";
import logoImage2 from "@/assets/graphic design/Dream team logo 1.jpg";
import flyerImage1 from "@/assets/graphic design/Blackbox tech flyer2.png";
import flyerImage2 from "@/assets/graphic design/IJG Presentation Invite Final version (1).jpg";
import mockupImage from "@/assets/graphic design/Van_Mockup_5.png";
import wanyamaImage from "@/assets/graphic design/Wanyama.jpg";

const pricing = [
  { service: "Logos", price: "N$ 250", icon: PenTool },
  { service: "Flyers", price: "N$ 150", icon: FileText },
  { service: "Banner Design", price: "N$ 200", icon: Image },
  { service: "Business Cards", price: "N$ 150", icon: CreditCard },
];

const GraphicDesign = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Creative <span className="text-primary">Graphic Design</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-secondary-foreground/70 max-w-2xl mx-auto mb-12">
            We create stunning visual designs that make your business stand out from the crowd.
          </motion.p>

          {/* All Design Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {/* Business Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -15 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ 
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                rotate: 0,
                scale: 1.08,
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="relative group col-span-1"
            >
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-full h-64 rounded-2xl shadow-2xl overflow-hidden animate-float bg-background/50 backdrop-blur-sm p-4 flex items-center justify-center">
                <img 
                  src={businessCard1} 
                  alt="Business Card Design 1" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Business Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 15 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ 
                delay: 0.25,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                rotate: 0,
                scale: 1.08,
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="relative group col-span-1"
            >
              <div className="absolute -inset-3 bg-gradient-to-l from-primary/20 via-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-full h-64 rounded-2xl shadow-2xl overflow-hidden animate-float bg-background/50 backdrop-blur-sm p-4 flex items-center justify-center" style={{ animationDelay: "0.1s" }}>
                <img 
                  src={businessCard2} 
                  alt="Business Card Design 2" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Logo 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.3,
                type: "spring",
                stiffness: 150,
                damping: 12
              }}
              whileHover={{ 
                scale: 1.12,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
              className="relative group col-span-1"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              <div className="relative w-full h-64 rounded-3xl bg-gradient-to-br from-background via-muted/30 to-background border-2 border-primary/30 shadow-2xl overflow-hidden animate-float p-6 flex items-center justify-center backdrop-blur-sm">
                <img 
                  src={logoImage1} 
                  alt="Logo Design 1" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Logo 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.35,
                type: "spring",
                stiffness: 150,
                damping: 12
              }}
              whileHover={{ 
                scale: 1.12,
                rotate: -5,
                transition: { duration: 0.3 }
              }}
              className="relative group col-span-1"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              <div className="relative w-full h-64 rounded-3xl bg-gradient-to-br from-background via-muted/30 to-background border-2 border-primary/30 shadow-2xl overflow-hidden animate-float p-6 flex items-center justify-center backdrop-blur-sm" style={{ animationDelay: "0.2s" }}>
                <img 
                  src={logoImage2} 
                  alt="Logo Design 2" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Flyer 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -12 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ 
                delay: 0.4,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                rotate: 0,
                scale: 1.1,
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="relative group col-span-1"
            >
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-full h-80 rounded-2xl shadow-2xl overflow-hidden animate-float bg-background/50 backdrop-blur-sm p-4 flex items-center justify-center">
                <img 
                  src={flyerImage1} 
                  alt="Flyer Design 1" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 w-3 h-3 bg-primary/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </div>
            </motion.div>

            {/* Flyer 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 12 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ 
                delay: 0.45,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                rotate: 0,
                scale: 1.1,
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="relative group col-span-1"
            >
              <div className="absolute -inset-3 bg-gradient-to-bl from-primary/20 via-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-full h-80 rounded-2xl shadow-2xl overflow-hidden animate-float bg-background/50 backdrop-blur-sm p-4 flex items-center justify-center" style={{ animationDelay: "0.3s" }}>
                <img 
                  src={flyerImage2} 
                  alt="Flyer Design 2" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 w-3 h-3 bg-primary/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </div>
            </motion.div>

            {/* Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -2 }}
              transition={{ 
                delay: 0.5,
                type: "spring",
                stiffness: 120,
                damping: 14
              }}
              whileHover={{ 
                rotate: 0,
                scale: 1.1,
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="relative group col-span-1 sm:col-span-2"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/25 via-primary/15 to-primary/25 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-full h-80 rounded-2xl shadow-2xl overflow-hidden animate-float bg-background/50 backdrop-blur-sm p-4 flex items-center justify-center">
                <img 
                  src={mockupImage} 
                  alt="Van Mockup Design" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Wanyama Design */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 2 }}
              transition={{ 
                delay: 0.55,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                rotate: 0,
                scale: 1.08,
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="relative group col-span-1 sm:col-span-2"
            >
              <div className="absolute -inset-3 bg-gradient-to-l from-primary/20 via-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-full h-80 rounded-2xl shadow-2xl overflow-hidden animate-float bg-background/50 backdrop-blur-sm p-4 flex items-center justify-center" style={{ animationDelay: "0.4s" }}>
                <img 
                  src={wanyamaImage} 
                  alt="Wanyama Design" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Pricing */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
            Graphic Design <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">Affordable design solutions for every business.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {pricing.map((item, i) => (
              <motion.div
                key={item.service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-elevated p-6 text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold mb-2">{item.service}</h3>
                <div className="text-2xl font-heading font-extrabold text-primary">{item.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GraphicDesign;
