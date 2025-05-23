/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        button: {
          bg: 'var(--color-button-bg)',
          hover: 'var(--color-button-hover)',
          secondary: {
            bg: 'var(--color-button-secondary-bg)',
            hover: 'var(--color-button-secondary-hover)',
          },
        },
        border: 'var(--color-border)',
        surface: 'var(--color-surface)',
      }
    }
  }
}