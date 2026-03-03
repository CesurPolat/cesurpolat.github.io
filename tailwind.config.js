/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#FF006E',
        'neon-blue': '#00F0FF',
        'neon-yellow': '#FFE600',
        'dark-bg': '#0A0E27',
        'dark-purple': '#1a0033',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
