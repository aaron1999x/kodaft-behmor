/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        dullgold:'#C06014',
        dullgray:'#536162',
        dullcream:'#ece0d1',
        headerBrown:'#634832',
        whatsapp:"#25D366"
      },
      fontFamily:{
        playfair:['var(--font-playfair)'],
      }
    },
  },
  plugins: [],
}
