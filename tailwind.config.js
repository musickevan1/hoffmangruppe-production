/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'davys-gray': {
          DEFAULT: '#525455',
          100: '#101111',
          200: '#212222',
          300: '#313333',
          400: '#424445',
          500: '#525455',
          600: '#747779',
          700: '#96999b',
          800: '#b9bbbc',
          900: '#dcddde'
        },
        'night': {
          DEFAULT: '#0B0F0E',
          100: '#020303',
          200: '#040605',
          300: '#070908',
          400: '#090c0b',
          500: '#0b0f0e',
          600: '#344642',
          700: '#5d7e76',
          800: '#90ada5',
          900: '#c7d6d2'
        },
        'white': {
          DEFAULT: '#FAFCFC',
          100: '#253e3e',
          200: '#4b7d7d',
          300: '#7cb0b0',
          400: '#bad6d6',
          500: '#fafcfc',
          600: '#fafcfc',
          700: '#fbfdfd',
          800: '#fcfdfd',
          900: '#fefefe'
        },
        'silver': {
          DEFAULT: '#AFB9BD',
          100: '#212628',
          200: '#414c50',
          300: '#627177',
          400: '#86969c',
          500: '#afb9bd',
          600: '#bec6ca',
          700: '#ced5d7',
          800: '#dee3e4',
          900: '#eff1f2'
        },
        'air-blue': {
          DEFAULT: '#619DB7',
          100: '#122026',
          200: '#23404d',
          300: '#356173',
          400: '#47819a',
          500: '#619db7',
          600: '#81b1c5',
          700: '#a1c4d4',
          800: '#c0d8e2',
          900: '#e0ebf1'
        }
      }
    },
  },
  plugins: [],
};