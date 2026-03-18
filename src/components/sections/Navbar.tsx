import { motion } from "framer-motion";
import { Menu, X, HardHat } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { branding } = config;

    const links = [
        { href: "#services", label: "SERVICIOS" },
        { href: "#process", label: "CÓMO TRABAJAMOS" },
        { href: "#testimonials", label: "CLIENTES" },
        { href: "#contact", label: "CONTACTO" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0F1115]/90 backdrop-blur-sm border-b border-white/5">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#F59E0B] flex items-center justify-center">
                        <HardHat size={18} className="text-black" />
                    </div>
                    <span className="text-xl font-display font-bold tracking-widest text-white uppercase">
                        {branding.logo}
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-xs font-sans tracking-[0.2em] text-zinc-400 hover:text-[#F59E0B] transition-colors uppercase font-bold"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button
                        variant="outline"
                        className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white rounded-none px-8 tracking-widest text-xs"
                        onClick={() => window.location.href = '#contact'}
                    >
                        PRESUPUESTO GRATIS
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-[#0F1115] border-b border-white/10"
                >
                    <div className="flex flex-col p-6 gap-6">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-sans tracking-widest text-zinc-400 hover:text-[#F59E0B] uppercase font-bold"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button
                            variant="default"
                            className="bg-[#F59E0B] text-white rounded-none tracking-widest text-xs"
                            onClick={() => { window.location.href = '#contact'; setIsOpen(false); }}
                        >
                            PRESUPUESTO GRATIS
                        </Button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
