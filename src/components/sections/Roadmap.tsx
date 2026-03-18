import { motion } from 'framer-motion';
import { ClipboardList, Wrench, CheckCircle2, Key } from 'lucide-react';
import { config } from '@/config';

export function Roadmap() {
    const { roadmap } = config.dynamicContent;

    const icons = [
        <ClipboardList size={28} className="text-[#F59E0B]" />,
        <Wrench size={28} className="text-[#F59E0B]" />,
        <Wrench size={28} className="text-[#F59E0B]" />,
        <Key size={28} className="text-[#F59E0B]" />,
    ];

    return (
        <section id="process" className="py-24 bg-[#0D0C0C] relative overflow-hidden border-t border-white/5">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(224,123,42,0.5) 40px, rgba(224,123,42,0.5) 41px),
                    repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(224,123,42,0.5) 40px, rgba(224,123,42,0.5) 41px)`
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <p className="text-[#F59E0B] font-sans text-xs tracking-[0.4em] uppercase font-black mb-4">
                        Así Trabajamos
                    </p>
                    <h2 className="text-4xl md:text-7xl font-display text-white tracking-widest">
                        PROCESO <span className="text-[#F59E0B]">CLARO</span>
                    </h2>
                </div>

                {/* Connecting line */}
                <div className="relative">
                    <div className="absolute top-[52px] left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#F59E0B]/20 to-transparent hidden lg:block" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                        {roadmap.map((item: { step: string; title: string; desc: string }, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group relative"
                            >
                                <div className="bg-[#0F1115] border border-white/8 p-10 rounded-none hover:border-[#F59E0B]/40 transition-all duration-500 overflow-hidden">
                                    {/* Number watermark */}
                                    <div className="absolute -top-6 -right-4 text-[120px] font-display font-bold text-white/[0.02] pointer-events-none group-hover:text-[#F59E0B]/[0.04] transition-colors leading-none select-none">
                                        {item.step}
                                    </div>

                                    <div className="relative z-10">
                                        {/* Step indicator */}
                                        <div className="w-14 h-14 border border-[#F59E0B]/30 flex items-center justify-center mb-8 group-hover:border-[#F59E0B]/60 group-hover:bg-[#F59E0B]/10 transition-all">
                                            {icons[index]}
                                        </div>

                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-[#F59E0B] font-mono text-xs font-black tracking-widest uppercase">PASO {item.step}</span>
                                            <div className="h-[1px] w-6 bg-[#F59E0B]/40"></div>
                                        </div>

                                        <h3 className="text-2xl font-display text-white mb-4 group-hover:text-[#F59E0B] transition-colors tracking-wider">
                                            {item.title}
                                        </h3>

                                        <p className="text-zinc-500 font-sans font-light text-base leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
