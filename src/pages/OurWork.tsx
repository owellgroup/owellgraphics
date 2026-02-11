import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import energyOteya from "@/assets/work-energy-oteya.jpg";
import energyWeekend from "@/assets/work-energy-weekend.jpg";
import binaryFlyer from "@/assets/work-binary-flyer.jpg";
import mlomusikCover from "@/assets/work-mlomusik-cover.png";
import yigondwaCover from "@/assets/work-yigondwa-cover.jpg";
import mousesetArt from "@/assets/work-mouseset-art.jpg";
import diceEnergy from "@/assets/work-dice-energy.jpg";
import ngomaCover from "@/assets/work-ngoma-cover.jpg";
import blackAntelope from "@/assets/work-black-antelope.jpg";

const works = [
  { src: energyOteya, title: "Energy 100 FM – Oteya Feature", category: "Flyer Design" },
  { src: energyWeekend, title: "Energy 100 FM – Weekend Shows", category: "Flyer Design" },
  { src: binaryFlyer, title: "Binary Cash Services", category: "Flyer Design" },
  { src: mlomusikCover, title: "ML0 Musik – Cover Art", category: "Cover Art" },
  { src: yigondwaCover, title: "Yigondwa – Album Cover", category: "Cover Art" },
  { src: mousesetArt, title: "MouseSet – Digital Art", category: "Illustration" },
  { src: diceEnergy, title: "Energy 100 FM – Dice Feature", category: "Flyer Design" },
  { src: ngomaCover, title: "Ngoma – Album Cover", category: "Cover Art" },
  { src: blackAntelope, title: "Black Antelopes Trading CC", category: "Logo Design" },
];

const OurWork = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground section-padding pb-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Our <span className="text-primary">Work</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-secondary-foreground/70 max-w-2xl mx-auto">
            A showcase of our graphic design portfolio — flyers, logos, cover art, illustrations, and branding projects.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {works.map((work, i) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="break-inside-avoid group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img src={work.src} alt={work.title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">{work.category}</span>
                    <h3 className="text-background font-heading font-bold text-sm mt-1">{work.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurWork;
