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
        background: "#101113",
        foreground: "#E8E9EB",
        accent: "#7DA5C9",
        border: "rgba(148, 163, 184, 0.18)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(125, 165, 201, 0.18), 0 20px 50px rgba(16, 17, 19, 0.5)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
