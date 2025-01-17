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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        clamp: "clamp(1rem, 5vw, 2.8rem)",
        clampSm: "clamp(0.8rem, 3vw, 1.3rem)",
        clampMd: "clamp(0.9rem, 4vw, 2rem)",
        clampXs: "clamp(0.8rem, 1.5vw, 1.8rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
