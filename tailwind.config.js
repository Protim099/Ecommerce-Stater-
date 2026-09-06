/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1F2421',
        paper: '#F7F5F0',
        moss: '#3E5641',
        clay: '#B5654A',
        sand: '#E4DCC8'
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
