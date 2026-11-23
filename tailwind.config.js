/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#E3F1EE",
          100: "#C4E2DC",
          500: "#0E5A52",
          600: "#0E5A52",
          700: "#0A4540",
          900: "#072F2B",
        },
        leaf: { 50: "#E8F4E3", 500: "#4FA23F", 600: "#3F8A31" },
        harvest: { 50: "#FDF1DC", 500: "#F2A93B", 600: "#D98E1F" },
        surface: { page: "#FAF8F3", alt: "#F2EFE7", card: "#FFFFFF" },
        line: { DEFAULT: "#E4DFD2", strong: "#CFC8B6" },
        ink: { DEFAULT: "#14231F", soft: "#4A5A55", muted: "#7A8782" },
        success: "#2E9E5B",
        warning: "#E0A100",
        danger: "#D64545",
        info: "#2F7FD1",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        heading: ["Plus Jakarta Sans", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        urdu: ["Noto Sans Arabic", "Noto Nastaliq Urdu", "sans-serif"],
      },
      borderRadius: { card: "16px", xl2: "24px" },
      boxShadow: {
        card: "0 4px 24px rgba(7, 47, 43, 0.06)",
        lift: "0 12px 32px rgba(7, 47, 43, 0.12)",
      },
    },
  },
  plugins: [],
};
