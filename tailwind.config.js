/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '450px',
      ss: '580px',
      sm: '768px',
      md: '1024px',
      lg: '1250px',
      xl: '1700px',
    },
  },
  plugins: [],
}
