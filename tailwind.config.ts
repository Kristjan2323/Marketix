import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        fg: "#f0ece4",
        accent: {
          DEFAULT: "#c8ff2e",
          dark: "#a8d926",
        },
        accent2: {
          DEFAULT: "#ff5c35",
          dark: "#e04820",
        },
        muted: "#6b6b6b",
        card: {
          DEFAULT: "#141414",
          hover: "#1a1a1a",
        },
        glass: "rgba(200,255,46,0.06)",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "orb-float": "orbFloat 8s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        pulse2: "pulse2 2s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        orbFloat: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(30px, -40px) scale(1.1)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
