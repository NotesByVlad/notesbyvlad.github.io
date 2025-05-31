/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        themeShadow: '4px 8px 8px var(--color-primary)',
        themeShadowInset: '0 0 20px var(--color-primary) inset',
      },
      colors: {
        backgroundColor: 'var(--color-background)',
        textColor: 'var(--color-text)',
        surface: 'var(--color-surface)',
        primaryColor: 'var(--color-primary)',
        secondaryColor: 'var(--color-secondary)',
        // link: {
        //   active: 'var(--color-link-active)',
        //   hover: 'var(--color-link-hover)'
        // },
        // button: {
        //   bg: 'var(--color-button-bg)',
        //   hover: 'var(--color-button-hover)',
        //   secondary: {
        //     bg: 'var(--color-button-secondary-bg)',
        //     hover: 'var(--color-button-secondary-hover)',
        //   },
        // },
        // border: 'var(--color-border)',
        
      }
    }
  }
}