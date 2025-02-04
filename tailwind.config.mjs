/** @type {import('tailwindcss').Config} */
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
        'gray-900': '#111827',
        'gray-800': '#1F2937',
        'gray-700': '#374151',
        'gray-600': '#4B5563'
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"), // Add this line

  ],
};
