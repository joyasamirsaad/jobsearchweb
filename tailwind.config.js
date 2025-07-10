/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/app/**/*.{html,js,jsx,ts,tsx}',    
  './components/**/*.{html,js,jsx,ts,tsx}'  
],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        teal: 'var(--teal)',
        gray: 'var(--gray)',
        charcoal: 'var(--charcoal)',
        white: 'var(--white)',
        black: 'var(--black)',
      },
      fontFamily: {
        poppins: ['var(--font-poppins-sans)', 'sans-serif'],
        inter: ['var(--font-inter-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
