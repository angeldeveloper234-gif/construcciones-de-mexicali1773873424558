import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#1A1A1A", // Asphalt Black
                foreground: "#fafafa",
                primary: {
                    DEFAULT: "#FFC107", // Safety Yellow
                    foreground: "#000000",
                },
                accent: {
                    amber: "#FFC107",
                    steel: "#94A3B8",
                },
                border: "rgba(255,255,255,0.08)",
            },
            fontFamily: {
                sans: ["Roboto Condensed", "Inter", "sans-serif"],
                display: ["Impact", "Bebas Neue", "sans-serif"],
                tech: ["Orbitron", "sans-serif"],
            },
        },
    },
    plugins: [],
}

export default config