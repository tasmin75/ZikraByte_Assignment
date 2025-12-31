import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      
    },
    extend: {
      fontFamily: {
        chillax: ['Chillax', 'sans-serif'],
      },
      

      keyframes: {
        smartAnimate: {
          '0%': { 
            transform: 'translateY(0)',
            opacity: "1"
          },
          '50%': { 
            transform: 'translateY(-10px)',
            opacity: "0"
          },
          '51%': { 
            transform: 'translateY(10px)',
            opacity: "0"
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: "1"
          },
        },
        popInSettle: {
          '0%': { 
            opacity: '0',
            transform: 'scale(.1)',
          },
          '60%': { 
            opacity: '1',
            transform: 'scale(1)',
          },
          '80%': {
            transform: 'scale(.85)',
          },
          '100%': {
            transform: 'scale(0)',
          },
        },
      },
       animation: {
        popInSettle: 'popInSettle 1.6s ease-out forwards',
        smartAnimate: 'smartAnimate 3s ease-in-out infinite',
      },
      
    },
  },
} satisfies Config;
