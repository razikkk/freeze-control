import { motion } from "framer-motion";
import { Wrench, Settings, SprayCan, PackagePlus, Wind, Building2, Factory, Cpu, TowerControl, Warehouse } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import acImg from "@/assets/ac.jpg";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const serviceTypes = [
  { icon: Wrench, label: "Repair" },
  { icon: PackagePlus, label: "Installation" },
  { icon: Settings, label: "Service" },
  { icon: SprayCan, label: "Cleaning" },
];

const acTypes = [
  { icon: Wind, name: "Split AC", desc: "Wall-mounted split air conditioning systems for homes and small offices." },
  { icon: Building2, name: "Cassette AC", desc: "Ceiling-mounted cassette units ideal for commercial spaces." },
  { icon: Factory, name: "Central AC", desc: "Centralized cooling systems for large buildings and complexes." },
  { icon: Cpu, name: "VRF Systems", desc: "Variable Refrigerant Flow systems for multi-zone temperature control." },
  { icon: TowerControl, name: "Tower AC", desc: "High-capacity floor-standing units for large rooms and halls." },
  { icon: Warehouse, name: "Ductable AC", desc: "Ducted air conditioning for even distribution across multiple rooms." },
  { icon: Factory, name: "Chiller Plants", desc: "Industrial chiller systems for large-scale cooling requirements." },
  { icon: Building2, name: "HVAC Systems", desc: "Complete Heating, Ventilation, and Air Conditioning solutions." },
];

const ACServicePage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

  <section className="relative bg-primary py-20 lg:py-32 min-h-[700px] flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img src={acImg} alt="AC Service" className="w-full h-full object-cover opacity-20" />
  </div>
  
  {/* Gradient Overlay for Readability */}
  <div className="absolute inset-0" />

  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    {/* Centered the container and text */}
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={stagger} 
      className="max-w-4xl mx-auto text-center"
    >
      <motion.p 
        variants={fadeUp} 
        className="text-accent font-semibold text-base lg:text-lg uppercase tracking-[0.2em] mb-4"
      >
        Our Services
      </motion.p>
      
      {/* Large, Bold Heading */}
      <motion.h1 
        variants={fadeUp} 
        className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
      >
        AC Repair & Service
      </motion.h1>
      
      {/* Centered Description with bigger font */}
      <motion.p 
        variants={fadeUp} 
        className="text-primary-foreground/80 text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed"
      >
        Complete air conditioning solutions — from split units to industrial chiller plants. 
        Expert technicians, all major brands.
      </motion.p>
    </motion.div>
  </div>
</section>

    {/* Service Types */}
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceTypes.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 p-5 rounded-lg border border-border bg-card">
              <s.icon className="h-6 w-6 text-accent" />
              <span className="font-semibold text-foreground">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* AC Types Grid */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
          <motion.p variants={fadeUp} className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Cover</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-foreground">All AC Types & Systems</motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {acTypes.map((ac) => (
            <motion.div key={ac.name} variants={fadeUp}>
              <Card className="h-full border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <ac.icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-bold text-foreground mb-2">{ac.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ac.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ACServicePage;
