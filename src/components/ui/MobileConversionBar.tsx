import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { config } from '@/config';

export const MobileConversionBar: React.FC = () => {
    const phone = config.demoUser.whatsapp;
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 sm:hidden grid grid-cols-2 h-16 bg-[#1A1A1A] border-t border-[#FFC107]/20 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]"
        >
            <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 text-white border-r border-white/10 active:bg-[#FFC107] active:text-black transition-colors"
            >
                <Phone size={20} className="text-[#FFC107]" />
                <span className="text-xs font-black uppercase tracking-widest">Llamar</span>
            </a>
            <a
                href={`https://wa.me/${phone.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white active:bg-[#FFC107] active:text-black transition-colors"
            >
                <MessageSquare size={20} className="text-[#FFC107]" />
                <span className="text-xs font-black uppercase tracking-widest">WhatsApp</span>
            </a>
        </motion.div>
    );
};
