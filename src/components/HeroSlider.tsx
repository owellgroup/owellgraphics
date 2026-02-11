import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroWebDevices from "@/assets/hero-web-devices.png";
import heroGraphicDesign from "@/assets/hero-graphic-design.png";
import heroSystemDesign from "@/assets/hero-system-design.png";
import LogoCarousel from "./LogoCarousel";

const slides = [
  {
    heading: "Web & Mobile App Design",
    subtitle: "Professional web development and mobile app design services that deliver exceptional user experiences across all platforms and devices.",
    tags: ["Responsive Websites", "Mobile Apps", "E-commerce", "UI/UX Design", "Web Applications"],
    image: heroWebDevices,
    link: "/services/web-development",
  },
  {
    heading: "System Design & Engineering",
    subtitle: "Comprehensive system design and engineering solutions that transform your ideas into powerful, scalable, and efficient technological systems.",
    tags: ["System Architecture", "Database Design", "API Development", "Cloud Solutions", "IT Consulting"],
    image: heroSystemDesign,
    link: "/services/system-design",
  },
  {
    heading: "Creative Graphic Design Solutions",
    subtitle: "We create stunning visual designs including flyers, logos, business cards with QR codes, billboards, business plans, cover letters, and product packaging branding that make your business stand out.",
    tags: ["Flyers", "Logos", "Business Cards", "Billboards", "Product Branding"],
    image: heroGraphicDesign,
    link: "/services/graphic-design",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative bg-secondary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-16 md:pt-24 pb-8 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
          >
            {/* Left: Text */}
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-secondary-foreground leading-tight mb-4"
              >
                {slide.heading.split(" ").map((word, i) => (
                  <span key={i} className={i >= slide.heading.split(" ").length - 2 ? "text-primary" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-secondary-foreground/70 text-sm md:text-base leading-relaxed mb-6 max-w-lg"
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {slide.tags.map((tag) => (
                  <span key={tag} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full border border-primary/20">
                    {tag}
                  </span>
                ))}
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <Link to={slide.link} className="btn-primary inline-block rounded-full">
                  Learn More
                </Link>
              </motion.div>
            </div>

            {/* Right: Generated image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-md animate-float">
                <img
                  src={slide.image}
                  alt={slide.heading}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                {/* Glow effect behind image */}
                <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl -z-10" />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)} className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 transition-colors">
            <ChevronLeft className="w-5 h-5 text-secondary-foreground" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-secondary-foreground/30"}`}
              />
            ))}
          </div>
          <button onClick={() => setCurrent((p) => (p + 1) % slides.length)} className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary/20 transition-colors">
            <ChevronRight className="w-5 h-5 text-secondary-foreground" />
          </button>
        </div>
      </div>

      {/* Logo carousel integrated into hero */}
      <LogoCarousel />
    </section>
  );
};

export default HeroSlider;
