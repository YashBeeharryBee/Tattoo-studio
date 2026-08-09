/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          black: '#050505',
          900: '#0A0A0A',
          800: '#111111',
          700: '#1a1a1a',
          600: '#222222'
        },
        canvas: '#F5F5F5'
      },
      fontFamily: {
        marker: ['"Permanent Marker"', 'cursive'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}