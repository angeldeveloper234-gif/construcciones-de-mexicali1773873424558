import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

interface HeroProps {
    dynamic_city?: string;
    project_counter?: number;
    hook_headline?: string;
}

export function Hero({ dynamic_city, project_counter, hook_headline }: HeroProps) {
    const { dynamicContent, branding } = config;
    const { specialization, city: configCity, localAnchor, stats } = dynamicContent;

    const displayCity = dynamic_city || configCity;
    const displayProjects = project_counter || stats.projectsDone;

    // Mandatory Image from Blueprint
    const HERO_IMAGE = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop";

    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#1A1A1A]">
            {/* Background Image with Industrial Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HERO_IMAGE}
                    alt="Construcción en Mexicali"
                    className="w-full h-full object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                {/* Diagonal texture overlay */}
                <div className="texture-overlay" />
            </div>

            {/* Safety Yellow accent glow */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFC107]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Trade Badge */}
                    <div className="flex items-center gap-4 mb-8 overflow-hidden">
                        <div className="h-[4px] w-12 bg-[#FFC107]"></div>
                        <p className="text-[#FFC107] font-sans text-sm tracking-[0.3em] uppercase font-black active-badge whitespace-nowrap">
                            {branding.slogan}
                        </p>
                    </div>

                    {/* Main Headline */}
                    <div className="font-display leading-none mb-10">
                        <h1 className="flex flex-col gap-2">
                            <span className="block text-white text-[56px] md:text-[110px] tracking-tighter uppercase leading-[0.9]">
                                TU VISIÓN,
                            </span>
                            <span className="block text-[#FFC107] text-[56px] md:text-[110px] tracking-tighter uppercase leading-[0.9]">
                                NUESTRA OBRA
                            </span>
                            <span className="block text-zinc-500 text-[40px] md:text-[80px] tracking-tighter uppercase leading-[0.9]">
                                EN {displayCity}
                            </span>
                        </h1>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="max-w-xl mb-12"
                >
                    <p className="text-lg md:text-xl text-zinc-300 font-sans font-normal leading-relaxed border-l-4 border-[#FFC107] pl-6">
                        Especialistas en construcción residencial y remodelaciones de alta gama. Transformamos renders en realidad con precisión milimétrica.
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-zinc-400 font-sans text-sm">
                        <MapPin size={16} className="text-[#FFC107] flex-shrink-0" />
                        <span className="uppercase tracking-wider font-bold">{localAnchor}, {displayCity}</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-6 items-start sm:items-center"
                >
                    <div className="flex flex-col gap-3">
                        <Button
                            size="lg"
                            className="bg-[#FFC107] text-black hover:bg-white hover:text-black rounded-none px-10 py-7 text-base tracking-widest uppercase font-black shadow-[0_20px_40px_-15px_rgba(255,193,7,0.3)] group transition-all duration-300"
                            onClick={() => window.location.href = '#contact'}
                        >
                            COTIZAR PROYECTO
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Button>

                        <div className="flex items-center gap-2 text-[11px] text-[#FFC107] uppercase tracking-widest font-black ml-1">
                            <ShieldCheck size={14} />
                            <span>Garantía por contrato</span>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 flex flex-wrap gap-10"
                >
                    {[
                        { val: `${displayProjects}+`, label: "Obras Entregadas" },
                        { val: `${stats.experienceYears}`, label: "Años Construyendo" },
                        { val: `${stats.happyClients}+`, label: "Clientes Felices" },
                    ].map((s, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-4xl md:text-6xl font-display text-white tracking-tight">{s.val}</span>
                            <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold max-w-[80px] leading-tight">{s.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
