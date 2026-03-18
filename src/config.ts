import { GalleryItem, ProductItem, ServiceItem, TestimonialItem } from './types';

// Defining types locally to ensure zero-dependency errors if types file is missing in context
export interface Config {
    branding: {
        name: string;
        slogan: string;
        logo: string;
        trade: string;
    };
    landingClientId: string;
    supabase: {
        url: string;
        anonKey: string;
    };
    analytics: {
        webhookUrl: string;
    };
    bookingUrl: string;
    paymentLink: string;
    googleMapsReviewUrl: string;
    dynamicContent: {
        city: string;
        localAnchor: string;
        stats: {
            projectsDone: number;
            experienceYears: number;
            happyClients: number;
            m2Built?: string;
        };
        specialization: {
            title: string;
            pain: string;
            ego: string;
            hook: string;
        };
        roadmap: Array<{
            step: string;
            title: string;
            desc: string;
        }>;
        pricing: {
            basic: string;
            comprehensive: string;
            retainer: string;
        };
    };
    services: ServiceItem[];
    testimonials: TestimonialItem[];
    demoUser: {
        name: string;
        email: string;
        whatsapp: string;
    };
    features: {
        showGallery: boolean;
        showProducts: boolean;
        showTestimonials: boolean;
        showFAQ: boolean;
        showStats: boolean;
    };
    gallery: GalleryItem[];
    products: ProductItem[];
}

export const config: Config = {
    branding: {
        name: "Construcciones de Mexicali",
        slogan: "TU VISIÓN, NUESTRA OBRA",
        logo: "CMX",
        trade: "Construcción y Remodelación",
    },

    landingClientId: "7ae2bbc4-d599-4b22-8d60-66f9688b4ca1",

    supabase: {
        url: import.meta.env.VITE_SUPABASE_URL || "",
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || "",
    },
    analytics: {
        webhookUrl: import.meta.env.VITE_SPEED_WEBHOOK || "",
    },

    bookingUrl: "#contact",
    paymentLink: "#",
    googleMapsReviewUrl: "#",

    dynamicContent: {
        city: "Mexicali",
        localAnchor: "Calz Independencia 1192, Benito Juárez",
        stats: {
            projectsDone: 200,
            experienceYears: 15,
            happyClients: 180,
            m2Built: "85,000+"
        },
        specialization: {
            title: "NUESTRA OBRA",
            pain: "retrasos y presupuestos inflados",
            ego: "TU VISIÓN",
            hook: "CONSTRUIMOS"
        },
        roadmap: [
            {
                step: "01",
                title: "DIAGNÓSTICO TÉCNICO",
                desc: "Evaluamos el terreno y tus necesidades. Sin letras chiquitas, definimos alcances y costos reales desde el día uno."
            },
            {
                step: "02",
                title: "ESTRATEGIA Y PLANOS",
                desc: "Desarrollamos la ingeniería y arquitectura necesaria. Gestionamos permisos en Mexicali para que no te preocupes por trámites."
            },
            {
                step: "03",
                title: "RESOLUCIÓN Y OBRA",
                desc: "Ejecución con precisión milimétrica. Supervisión constante y reportes de avance semanales hasta la entrega de llaves."
            }
        ],
        pricing: {
            basic: "Remodelaciones desde $25,000 MXN",
            comprehensive: "Construcción desde $14,000 MXN/m²",
            retainer: "Proyectos Industriales: Cotización a medida"
        }
    },

    services: [
        {
            id: "01",
            icon: "🏗️",
            title: "Construcción Residencial",
            problem: "¿Temes que tu obra quede inconclusa?",
            agitation: "La informalidad en Mexicali causa pérdidas millonarias. No arriesgues tu patrimonio con contratistas sin garantías.",
            solve: "Obra nueva con contrato notariado, fianza de cumplimiento y materiales certificados.",
            price: "pricing.comprehensive"
        },
        {
            id: "02",
            icon: "🏢",
            title: "Naves y Locales",
            problem: "¿Tu negocio necesita expandirse ya?",
            agitation: "Cada día de retraso en la obra es un día sin facturar. Entendemos la urgencia comercial.",
            solve: "Construcción rápida de estructuras metálicas, locales comerciales y oficinas.",
            price: "pricing.retainer"
        },
        {
            id: "03",
            icon: "🔨",
            title: "Remodelación High-End",
            problem: "¿Espacios anticuados o mal distribuidos?",
            agitation: "Vivir en una casa que no te inspira afecta tu calidad de vida y devalúa la propiedad.",
            solve: "Transformación total de interiores, fachadas y ampliaciones con acabados premium.",
            price: "pricing.basic"
        }
    ],

    testimonials: [
        {
            name: "Arq. Roberto Méndez",
            role: "Desarrollador Inmobiliario",
            text: "En Mexicali es difícil encontrar seriedad. Con Construcciones CMX logramos terminar los departamentos 2 semanas antes de lo pactado.",
            tags: ["Puntualidad", "Calidad"]
        },
        {
            name: "Dra. Sofía Alarcón",
            role: "Clínica Dental Alarcón",
            text: "La remodelación de mi consultorio fue impecable. Trabajaron en horario nocturno para no afectar mis consultas. Recomendados.",
            tags: ["Limpieza", "Compromiso"]
        },
        {
            name: "Ing. Carlos Durán",
            role: "Gerente de Planta",
            text: "La ampliación de la nave industrial cumplió con todas las normas de seguridad STPS. Un equipo verdaderamente industrial.",
            tags: ["Seguridad", "Normativa"]
        }
    ],

    demoUser: {
        name: "Atención a Clientes",
        email: "eduardo0766@gmail.com",
        whatsapp: "+526862211308"
    },

    features: {
        showGallery: true,
        showProducts: false,
        showTestimonials: true,
        showFAQ: true,
        showStats: true
    },

    gallery: [
        {
            title: "Residencia San Pedro",
            category: "Residencial",
            image: "https://images.unsplash.com/photo-1600596542815-27b88e39e140?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Plaza Comercial Centro",
            category: "Comercial",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Remodelación Loft",
            category: "Interiorismo",
            image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Estructura Industrial",
            category: "Acero",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop"
        }
    ],

    products: []
};
