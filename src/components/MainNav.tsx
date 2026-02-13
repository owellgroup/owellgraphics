import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/owellgraphics-logo.png";

const MainNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesClicked, setServicesClicked] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `relative font-medium transition-colors duration-200 ${
      isActive(path) ? "text-primary" : "text-foreground hover:text-primary"
    }`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
        setServicesClicked(false);
      }
    };

    if (servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesOpen]);

  // Handle mouse enter/leave with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (!servicesClicked) {
      timeoutRef.current = setTimeout(() => {
        setServicesOpen(false);
      }, 300); // Small delay to allow moving to dropdown
    }
  };

  const handleServicesClick = () => {
    const newState = !servicesOpen;
    setServicesOpen(newState);
    setServicesClicked(newState);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    if (!servicesClicked) {
      timeoutRef.current = setTimeout(() => {
        setServicesOpen(false);
      }, 300);
    }
  };

  const handleLinkClick = () => {
    setServicesOpen(false);
    setServicesClicked(false);
  };

  return (
    <nav className="bg-card shadow-sm sticky top-0 z-50 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-16 md:h-20">
        <Link to="/" onClick={scrollToTop} className="flex-shrink-0">
          <img src={logo} alt="Owell Graphics" className="h-10 md:h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className={navLinkClass("/")}>Home</Link>
          
          <div 
            ref={dropdownRef}
            className="relative group" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              onClick={handleServicesClick}
              className={`flex items-center gap-1 font-medium transition-colors duration-200 ${
                location.pathname.startsWith("/services") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <div 
              className={`absolute top-full left-0 mt-1 bg-card rounded-lg shadow-lg border border-border py-2 min-w-[240px] z-50 transition-all duration-200 ease-in-out ${
                servicesOpen 
                  ? 'opacity-100 translate-y-0 pointer-events-auto' 
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
                <Link to="/services/web-development" className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors" onClick={handleLinkClick}>
                  Web & Mobile Development
                </Link>
                <Link to="/services/graphic-design" className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors" onClick={handleLinkClick}>
                  Graphic Design
                </Link>
                <Link to="/services/system-design" className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors" onClick={handleLinkClick}>
                  System Design & Development
                </Link>
                <Link to="/services/hosting" className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors" onClick={handleLinkClick}>
                  Hosting
                </Link>
                <Link to="/services/it-support" className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors" onClick={handleLinkClick}>
                  IT Support
                </Link>
              </div>
          </div>

          <Link to="/services/hosting" className={navLinkClass("/services/hosting")}>Email Hosting</Link>
          <Link to="/services/system-design" className={navLinkClass("/services/system-design")}>Systems</Link>
          <Link to="/services/it-support" className={navLinkClass("/services/it-support")}>IT Support</Link>
          <Link to="/services/web-development" className={navLinkClass("/services/web-development")}>Web Design</Link>
          <Link to="/services/graphic-design" className={navLinkClass("/services/graphic-design")}>Graphic Design</Link>
          <Link to="/our-work" className={navLinkClass("/our-work")}>Our Work</Link>
          <Link to="/about" className={navLinkClass("/about")}>About Us</Link>
          <Link to="/contact" className={navLinkClass("/contact")}>
            <span className="btn-primary text-sm py-2 px-5 rounded-full">Contact Us</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-4 space-y-3">
          <Link to="/" className="block py-2 font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
          <div>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1 py-2 font-medium w-full">
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`pl-4 space-y-2 transition-all duration-200 ease-in-out ${
              servicesOpen 
                ? 'opacity-100 max-h-96' 
                : 'opacity-0 max-h-0 overflow-hidden'
            }`}>
              <Link to="/services/web-development" className="block py-1.5 text-sm text-muted-foreground hover:text-primary" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>Web & Mobile Development</Link>
              <Link to="/services/graphic-design" className="block py-1.5 text-sm text-muted-foreground hover:text-primary" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>Graphic Design</Link>
              <Link to="/services/system-design" className="block py-1.5 text-sm text-muted-foreground hover:text-primary" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>System Design & Development</Link>
              <Link to="/services/hosting" className="block py-1.5 text-sm text-muted-foreground hover:text-primary" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>Hosting</Link>
              <Link to="/services/it-support" className="block py-1.5 text-sm text-muted-foreground hover:text-primary" onClick={() => { setMobileOpen(false); setServicesOpen(false); }}>IT Support</Link>
            </div>
          </div>
          <Link to="/services/hosting" className="block py-2 font-medium" onClick={() => setMobileOpen(false)}>Email Hosting</Link>
          <Link to="/services/system-design" className="block py-2 font-medium" onClick={() => setMobileOpen(false)}>Systems</Link>
          <Link to="/services/it-support" className="block py-2 font-medium" onClick={() => setMobileOpen(false)}>IT Support</Link>
          <Link to="/services/web-development" className="block py-2 font-medium" onClick={() => setMobileOpen(false)}>Web Design</Link>
          <Link to="/services/graphic-design" className="block py-2 font-medium" onClick={() => setMobileOpen(false)}>Graphic Design</Link>
          <Link to="/our-work" className="block py-2 font-medium" onClick={() => setMobileOpen(false)}>Our Work</Link>
          <Link to="/about" className="block py-2 font-medium" onClick={() => setMobileOpen(false)}>About Us</Link>
          <Link to="/contact" className="block py-2 font-medium text-primary" onClick={() => setMobileOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default MainNav;
