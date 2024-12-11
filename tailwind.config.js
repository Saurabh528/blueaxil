/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f7f7f8',
          100: '#eeeef1',
          200: '#d5d5db',
          300: '#b0b0bb',
          400: '#8a8a98',
          500: '#6d6d7b',
          600: '#555561',
          700: '#44444d',
          800: '#2a2a31',
          900: '#1c1c21',
          950: '#121215',
        },
        primary: {
          50: '#eef7ff',
          100: '#d9edff',
          200: '#bce0ff',
          300: '#8ecdff',
          400: '#59b0ff',
          500: '#3b8cff',
          600: '#1a5df7',
          700: '#1747e3',
          800: '#1a3bb7',
          900: '#1c368f',
          950: '#152153',
        },
        accent: {
          50: '#fff1f3',
          100: '#ffe0e4',
          200: '#ffc6ce',
          300: '#ff9da9',
          400: '#ff6477',
          500: '#ff2d47',
          600: '#ed1533',
          700: '#c80d29',
          800: '#a50f27',
          900: '#881326',
          950: '#4b0612',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, #1c1c21 1px, transparent 1px), linear-gradient(to bottom, #1c1c21 1px, transparent 1px)',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};