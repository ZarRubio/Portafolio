/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1320px',
      },
    },
    extend: {},
  },
  plugins: [],
};
