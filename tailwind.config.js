/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        udemy: {
          purple: '#A435F0',
          'purple-hover': '#8710D8',
          'purple-light': '#F6EEFE',
          dark: '#1C1D1F',
          muted: '#6A6F73',
          bg: '#FFFFFF',
          card: '#F7F9FA',
          border: '#D1D7DC',
          disabled: '#E8E8E8',
          'disabled-text': '#9E9E9E',
          destructive: '#B60000',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
