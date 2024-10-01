import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'header': '#EAF5EF',
      
      },
      backgroundImage: {
        "hero-image": "url('/backimg.jpg')"
      },
    },
  },
  plugins: [],
};
export default config;
