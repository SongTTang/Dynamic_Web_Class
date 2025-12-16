/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        card: "var(--color-card)",
        "card-dark": "var(--color-card-dark)",
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
      },
    },
  },
  plugins: [],
};
