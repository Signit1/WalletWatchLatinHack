import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ww: {
          bg: "#0B0F14",
          primary: "#00F5FF",
          secondary: "#9D4EDD",
          green: "#22C55E",
          yellow: "#EAB308",
          red: "#EF4444",
          text: "#E6F1FF",
          muted: "#94A3B8",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        blob: "blob 7s infinite",
        scan: "scan 3s linear infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
        "float-1": "float1 8s ease-in-out infinite",
        "float-2": "float2 10s ease-in-out infinite",
        "float-3": "float3 12s ease-in-out infinite",
        "float-4": "float4 9s ease-in-out infinite",
        "float-5": "float5 11s ease-in-out infinite",
        "float-6": "float6 7s ease-in-out infinite",
        "float-7": "float7 13s ease-in-out infinite",
        "float-8": "float8 8.5s ease-in-out infinite",
        "float-9": "float9 10.5s ease-in-out infinite",
        "float-10": "float10 9.5s ease-in-out infinite",
        "float-slow-1": "floatSlow1 15s ease-in-out infinite",
        "float-slow-2": "floatSlow2 18s ease-in-out infinite",
        "float-slow-3": "floatSlow3 16s ease-in-out infinite",
        "float-slow-4": "floatSlow4 20s ease-in-out infinite",
        "float-slow-5": "floatSlow5 17s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        scan: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 5px rgba(0, 245, 255, 0.5), 0 0 10px rgba(0, 245, 255, 0.3), 0 0 15px rgba(0, 245, 255, 0.1)",
          },
          "100%": {
            boxShadow: "0 0 10px rgba(0, 245, 255, 0.8), 0 0 20px rgba(0, 245, 255, 0.5), 0 0 30px rgba(0, 245, 255, 0.2)",
          },
        },
        float1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.6" },
          "25%": { transform: "translate(20px, -15px) scale(1.2)", opacity: "0.8" },
          "50%": { transform: "translate(-10px, -25px) scale(0.8)", opacity: "0.4" },
          "75%": { transform: "translate(-20px, 10px) scale(1.1)", opacity: "0.7" },
        },
        float2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.6" },
          "33%": { transform: "translate(-15px, 20px) scale(0.9)", opacity: "0.8" },
          "66%": { transform: "translate(25px, -10px) scale(1.3)", opacity: "0.3" },
        },
        float3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.6" },
          "20%": { transform: "translate(30px, 15px) scale(1.1)", opacity: "0.9" },
          "40%": { transform: "translate(-20px, -20px) scale(0.7)", opacity: "0.2" },
          "60%": { transform: "translate(10px, 25px) scale(1.4)", opacity: "0.8" },
          "80%": { transform: "translate(-25px, 5px) scale(0.9)", opacity: "0.5" },
        },
        float4: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.4" },
          "50%": { transform: "translate(-30px, -15px) scale(1.2)", opacity: "0.7" },
        },
        float5: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.4" },
          "25%": { transform: "translate(15px, 30px) scale(0.8)", opacity: "0.6" },
          "75%": { transform: "translate(-25px, -10px) scale(1.3)", opacity: "0.3" },
        },
        float6: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.4" },
          "33%": { transform: "translate(20px, -20px) scale(1.1)", opacity: "0.8" },
          "66%": { transform: "translate(-15px, 15px) scale(0.9)", opacity: "0.2" },
        },
        float7: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.5" },
          "14%": { transform: "translate(25px, 10px) scale(1.2)", opacity: "0.8" },
          "28%": { transform: "translate(-10px, 20px) scale(0.8)", opacity: "0.3" },
          "42%": { transform: "translate(-20px, -15px) scale(1.4)", opacity: "0.9" },
          "57%": { transform: "translate(15px, -25px) scale(0.7)", opacity: "0.4" },
          "71%": { transform: "translate(30px, 5px) scale(1.1)", opacity: "0.7" },
          "85%": { transform: "translate(-5px, -30px) scale(0.9)", opacity: "0.6" },
        },
        float8: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.5" },
          "50%": { transform: "translate(20px, -25px) scale(1.3)", opacity: "0.8" },
        },
        float9: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.5" },
          "25%": { transform: "translate(-25px, 20px) scale(0.8)", opacity: "0.7" },
          "75%": { transform: "translate(15px, -20px) scale(1.2)", opacity: "0.3" },
        },
        float10: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.3" },
          "50%": { transform: "translate(-20px, 25px) scale(1.1)", opacity: "0.6" },
        },
        floatSlow1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.3" },
          "25%": { transform: "translate(40px, -30px) scale(1.2)", opacity: "0.5" },
          "50%": { transform: "translate(-20px, -40px) scale(0.8)", opacity: "0.2" },
          "75%": { transform: "translate(-40px, 20px) scale(1.1)", opacity: "0.4" },
        },
        floatSlow2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.3" },
          "33%": { transform: "translate(-30px, 40px) scale(0.9)", opacity: "0.5" },
          "66%": { transform: "translate(50px, -20px) scale(1.3)", opacity: "0.1" },
        },
        floatSlow3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.3" },
          "20%": { transform: "translate(60px, 20px) scale(1.1)", opacity: "0.6" },
          "40%": { transform: "translate(-30px, -30px) scale(0.7)", opacity: "0.1" },
          "60%": { transform: "translate(20px, 50px) scale(1.4)", opacity: "0.5" },
          "80%": { transform: "translate(-50px, 10px) scale(0.9)", opacity: "0.3" },
        },
        floatSlow4: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.2" },
          "50%": { transform: "translate(-50px, -20px) scale(1.2)", opacity: "0.4" },
        },
        floatSlow5: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.2" },
          "25%": { transform: "translate(25px, 60px) scale(0.8)", opacity: "0.4" },
          "75%": { transform: "translate(-40px, -15px) scale(1.3)", opacity: "0.1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
