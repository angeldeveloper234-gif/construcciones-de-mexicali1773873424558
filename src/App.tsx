import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserProvider, useUser } from "@/context/UserContext";
import { config } from "@/config";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { MobileConversionBar } from "@/components/ui/MobileConversionBar";
import LegalBotWidget from "@/components/LegalBotWidget";

// --- AI AGENT GUIDANCE ---
// Template: Construcción (Residencial, Comercial, Industrial)
// Para personalizar:
// 1. Branding y servicios: src/config.ts
// 2. Paleta de colores: tailwind.config.ts (primary: #F59E0B)
// 3. Nuevas páginas: agregar en src/pages y registrar en <Routes>
// -------------------------

function ChatbotManager() {
    const { email, name } = useUser();
    
    // Solo inicializar si hay un ID de cliente configurado
    if (config.landingClientId === "00000000-0000-0000-0000-000000000000") {
        return null;
    }

    return (
        <LegalBotWidget 
            botId={config.landingClientId}
            metadata={{
                source: "landing_construccion",
                user_email: email || "anonymous",
                user_name: name || "anonymous",
                trade: config.branding.trade,
                city: config.dynamicContent.city
            }}
            supabaseUrl={config.supabase.url}
            supabaseKey={config.supabase.anonKey}
        />
    );
}

function App() {
    return (
        <UserProvider>
            <Router>
                <div className="relative min-h-screen bg-[#0F1115] overflow-x-hidden">
                    <div className="noise-bg" />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <Footer />
                    <MobileConversionBar />
                    <ChatbotManager />
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;
