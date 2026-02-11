import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/owellgraphics-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" onClick={scrollToTop} className="inline-block">
              <img src={logo} alt="Owell Graphics" className="h-16 md:h-20 mb-4 brightness-0 invert cursor-pointer hover:opacity-80 transition-opacity" />
            </Link>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Design Solutions for Your Business. We create stunning digital experiences and visual designs that make your brand stand out.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-primary transition-colors">Home</Link>
              <Link to="/services/web-development" className="block hover:text-primary transition-colors">Web Development</Link>
              <Link to="/services/graphic-design" className="block hover:text-primary transition-colors">Graphic Design</Link>
              <Link to="/services/system-design" className="block hover:text-primary transition-colors">System Design</Link>
              <Link to="/services/hosting" className="block hover:text-primary transition-colors">Hosting</Link>
              <Link to="/services/it-support" className="block hover:text-primary transition-colors">IT Support</Link>
              <Link to="/contact" className="block hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@owellgraphics.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> info@owellgraphics.com
              </a>
              <a href="tel:0812320168" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> 081 232 0168
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Windhoek, Namibia
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-10 pt-6 text-center text-xs text-secondary-foreground/50">
          © {new Date().getFullYear()} Owell Graphics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
