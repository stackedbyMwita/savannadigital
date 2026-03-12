import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:  'var(--color-primary)',
        accent:   'var(--color-accent)',
        dark:     'var(--color-dark)',
        surface:  'var(--color-surface)',
        text:     'var(--color-text)',
        muted:    'var(--color-muted)',
        border:   'var(--color-border)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body:    'var(--font-body)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
