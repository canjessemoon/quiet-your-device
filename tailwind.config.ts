import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // QYD Brand Colors
        'mist': '#DCE8DC',    // Soft background, cards
        'sage': '#A4B2A3',    // Secondary buttons, footers  
        'fern': '#4F6F52',    // Headlines, CTA buttons
        'beige': '#F9F7F3',   // Page backgrounds
        'stone': '#5D6F77',   // Body text, icons
        'gold': '#D8C8A5',    // Highlights, accents
        
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
