/** @type {import('tailwindcss').Config} */
export default {
  // áp dụng tailwind cho các file html và các file js, ts, jsx, tsx
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

