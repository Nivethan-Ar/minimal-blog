/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['var(--font-montserrat)'],
        sub: ['var(--font-inter)'],
        lex: ['var(--font-lexend)']
      },
    },
    plugins: [],
  }
}
