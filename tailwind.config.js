/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-blur': 'pulseBlur 2s infinite',
      },
      keyframes: {
        pulseBlur: {
          '0%, 100%': { opacity: 0.4, filter: 'blur(10px)' },
          '50%': { opacity: 1, filter: 'blur(20px)' },
        },
      },
    },
    fontFamily: {
      signature: ['Great Vibes'],
    },
  },
  plugins: [],
}
