import { Mail, Phone, MapPin } from "lucide-react";

const TopNav = () => {
  return (
    <div className="bg-secondary text-secondary-foreground py-2 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between gap-2 text-xs md:text-sm">
        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <a href="mailto:info@owellgraphics.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5 text-primary" />
            <span>info@owellgraphics.com</span>
          </a>
          <a href="tel:0812320168" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>+264 81 232 0168</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          <span>Windhoek, Namibia</span>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
