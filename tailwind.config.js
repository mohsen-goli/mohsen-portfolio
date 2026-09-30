/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0A0F",
          soft: "#13131A",
          card: "#16161F",
        },
        border: {
          DEFAULT: "#1F1F2E",
          soft: "#2A2A3C",
        },
        accent: {
          DEFAULT: "#8B5CF6",
          hover: "#A78BFA",
          glow: "rgba(139, 92, 246, 0.15)",
        },
        txt: {
          primary: "#F5F5F7",
          muted: "#8B8B9E",
          dim: "#5A5A6E",
        },
      },
      fontFamily: {
        sans: ["Inter", "Vazirmatn", "system-ui", "sans-serif"],
        fa: ["Vazirmatn", "sans-serif"],
        en: ["Inter", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0.8 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
