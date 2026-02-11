import ijg from "@/assets/client-ijg.png";
import mlmusik from "@/assets/client-mlmusik.png";
import heavenly from "@/assets/client-heavenly.jpg";
import titanium from "@/assets/client-titanium.png";
import efastream from "@/assets/client-efastream.png";
import cvwriters from "@/assets/client-cvwriters.png";
import media from "@/assets/client-media.png";

const logos = [
  { src: ijg, alt: "IJG" },
  { src: mlmusik, alt: "ML Musik" },
  { src: heavenly, alt: "Heavenly Touch Spa" },
  { src: titanium, alt: "Titanium Logistics" },
  { src: efastream, alt: "EFA Stream" },
  { src: cvwriters, alt: "Windhoek CV Writers" },
  { src: media, alt: "Media" },
];

const LogoCarousel = () => {
  const allLogos = [...logos, ...logos];

  return (
    <div className="py-8 overflow-hidden border-t border-secondary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <h3 className="text-center font-heading font-bold text-sm uppercase tracking-widest text-secondary-foreground/40">
          Trusted By Our Clients
        </h3>
      </div>
      <div className="relative">
        <div className="flex items-center gap-16 animate-scroll-left" style={{ width: "max-content" }}>
          {allLogos.map((logo, i) => (
            <div key={i} className="flex-shrink-0 h-14 md:h-16 w-32 md:w-40 flex items-center justify-center transition-all duration-500 hover:scale-110">
              <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
