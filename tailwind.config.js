/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../packages/ui-blocks/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9',      // Ocean blue
        secondary: '#FBBF24',    // Sandy yellow
        accent: '#10B981',       // Sea green
        background: '#F8FAFC',   // Light blue-gray
        text: '#1E293B',         // Dark blue-gray
        'coastal-blue': '#0EA5E9',
        'sandy-yellow': '#FBBF24',
        'sea-green': '#10B981',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        'coastal': '1rem',
      }
    },
  },
  plugins: [],
};