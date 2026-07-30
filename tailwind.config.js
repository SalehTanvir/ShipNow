/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',   // Mobile
      'md': '768px',   // Tablet
      'lg': '1024px',  // Laptop/Medium Desktop
      'xl': '1440px',  // Standard Desktop
      '2xl': '1440px',
    },
    extend: {
      colors: {
        brand: {
          primary: '#6b46c1', // Purple background
          dark: '#1e293b', // Dark button
          light: '#f8fafc',
          accent: '#8b5cf6',
          gray: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
