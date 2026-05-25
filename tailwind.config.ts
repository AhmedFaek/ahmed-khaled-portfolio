import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#081120",
        panel: "#0f172a",
        panelAlt: "#111c33",
        border: "rgba(148, 163, 184, 0.18)",
        accent: "#3B82F6"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(59, 130, 246, 0.2), 0 20px 50px rgba(8, 17, 32, 0.45)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
