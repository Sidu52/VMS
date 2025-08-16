/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pramaBlue: "var(--color-prama-blue)",
        pramaOrange: "var(--color-prama-orange)",
        pramaGreen: "var(--color-prama-green)",
        pramaWhite: "var(--color-prama-white)",
        pramaDark: "var(--color-prama-dark)",
      },
      zIndex: {
        navbar: "var(--z-navbar)",
        sidebar: "var(--z-sidebar)",
        modal: "var(--z-modal)",
        overlay: "var(--z-overlay)",
        dropdown: "var(--z-dropdown)",
      },
      borderRadius: {
        base: "var(--radius-base)",
        lg: "var(--radius-lg)",
      },
      spacing: {
        base: "var(--space-base)",
        lg: "var(--space-lg)",
      },
      boxShadow: {
        base: "var(--shadow-base)",
        card: "var(--shadow-card)",
      }
    },
  },
  plugins: [],
}

