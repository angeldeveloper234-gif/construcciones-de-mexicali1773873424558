import { Hero, Gallery, Products, Roadmap, Stats, Features, Testimonials, CTA, Contact, FAQ, BentoGrid } from "@/components/sections";
import { CustomCursor } from "@/components/features/CustomCursor";
import { config } from "@/config";

export function Home() {
    const { features } = config;

    return (
        <main className="relative selection:bg-primary selection:text-black">
            <Hero />
            {features.showStats && <Stats />}
            <BentoGrid />
            <Features />
            {features.showGallery && <Gallery />}
            {features.showProducts && <Products />}
            <Roadmap />
            {features.showTestimonials && <Testimonials />}
            <CTA />
            <Contact />
            {features.showFAQ && <FAQ />}

            {/* Features */}
            <CustomCursor />
        </main>
    );
}
