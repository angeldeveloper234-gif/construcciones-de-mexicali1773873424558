import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Check } from "lucide-react";
import { config } from "@/config";

const schema = z.object({
    name: z.string().min(2, "Requerido"),
    phone: z.string().min(10, "Mínimo 10 dígitos"),
    service: z.string().min(1, "Selecciona un servicio"),
    message: z.string().min(5, "Describe brevemente el trabajo"),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
    const { dynamicContent, demoUser, services } = config;
    const { city, localAnchor } = dynamicContent;

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data: FormData) => {
        console.log("Lead capturado:", data);
        await new Promise(resolve => setTimeout(resolve, 1200));
        alert("¡Mensaje enviado! Te contactaremos hoy mismo para coordinar la visita.");
        reset();
    };

    return (
        <section id="contact" className="relative py-32 bg-[#1A1A1A] border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Info */}
                    <div>
                        <p className="text-[#FFC107] font-sans text-xs tracking-[0.4em] uppercase font-black mb-4">
                            Contacto Directo
                        </p>
                        <h2 className="text-5xl md:text-6xl font-display text-white mb-10 tracking-widest leading-tight">
                            COTIZACIÓN <span className="text-[#FFC107]">SIN COMPROMISO</span>
                        </h2>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-[#FFC107] mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-sm mb-1 font-black">Ubicación</h4>
                                    <p className="text-zinc-400 text-base">{localAnchor}, {city}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-[#FFC107] mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-sm mb-1 font-black">Teléfono / WhatsApp</h4>
                                    <p className="text-zinc-400 text-base">{demoUser.whatsapp}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-[#FFC107] mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-sm mb-1 font-black">Horario de Atención</h4>
                                    <p className="text-zinc-400 text-base">Lunes a Sábado: 8:00 – 19:00</p>
                                </div>
                            </div>
                        </div>

                        {/* Differentiators */}
                        <div className="border-l-4 border-[#FFC107] p-6 bg-white/5">
                            <p className="text-[#FFC107] text-xs font-black uppercase tracking-widest mb-4">Garantía Delta</p>
                            <ul className="space-y-3">
                                {[
                                    "Presupuesto gratis y detallado",
                                    "Contrato de adhesión PROFECO",
                                    "Supervisión por Ingeniero Civil",
                                    `Más de ${dynamicContent.stats.projectsDone} obras exitosas`,
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-300 font-sans">
                                        <Check size={14} className="text-[#FFC107] flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#111] p-8 border border-white/10"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-1">
                                <label className="text-xs text-[#FFC107] uppercase font-bold tracking-widest">Nombre</label>
                                <input
                                    {...register("name")}
                                    className="w-full bg-[#1A1A1A] border border-white/10 p-4 text-white focus:outline-none focus:border-[#FFC107] transition-colors placeholder:text-zinc-700 text-sm font-sans"
                                    placeholder="Tu nombre completo"
                                />
                                {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs text-[#FFC107] uppercase font-bold tracking-widest">Teléfono</label>
                                <input
                                    {...register("phone")}
                                    className="w-full bg-[#1A1A1A] border border-white/10 p-4 text-white focus:outline-none focus:border-[#FFC107] transition-colors placeholder:text-zinc-700 text-sm font-sans"
                                    placeholder="10 dígitos"
                                />
                                {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs text-[#FFC107] uppercase font-bold tracking-widest">Servicio</label>
                                <select
                                    {...register("service")}
                                    className="w-full bg-[#1A1A1A] border border-white/10 p-4 text-zinc-300 focus:outline-none focus:border-[#FFC107] transition-colors text-sm font-sans appearance-none cursor-pointer"
                                >
                                    <option value="">Selecciona una opción</option>
                                    {services.map((s) => (
                                        <option key={s.id} value={s.title}>{s.title}</option>
                                    ))}
                                    <option value="Otro">Otro</option>
                                </select>
                                {errors.service && <span className="text-xs text-red-500">{errors.service.message}</span>}
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs text-[#FFC107] uppercase font-bold tracking-widest">Detalles</label>
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    className="w-full bg-[#1A1A1A] border border-white/10 p-4 text-white focus:outline-none focus:border-[#FFC107] transition-colors resize-none placeholder:text-zinc-700 text-sm font-sans"
                                    placeholder="¿Qué necesitas construir o remodelar?"
                                />
                                {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-[#FFC107] text-black hover:bg-white hover:text-black rounded-none py-6 uppercase tracking-[0.2em] text-sm font-black transition-all duration-300"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "ENVIANDO..." : "ENVIAR SOLICITUD"}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
