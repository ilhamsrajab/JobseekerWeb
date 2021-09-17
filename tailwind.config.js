// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,

      primary: '#3A3379',
      accent: '#FFBEB2',
      hijau: '#C2F784',
      hijauDark: '#5E7840',
      orange: '#FFBF86',
      orangeDark: '#806043',
      merah: '#F6A9A9',
      merahDark: '#755151',
      kuning: '#FFF47E',
      kuningDark: '#807A3F',
    },

    borderRadius: {
      '40': '40px',
      '20': '20px',
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '16px',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      'primary': '0px 16px 40px rgba(58, 51, 121, 0.5)',
      'btn': '0px 16px 40px rgba(58, 51, 121, 0.2)',
      'soft': '0px 16px 40px rgba(0, 0, 0, 0.2)',
      'btnhover': '0px 16px 40px rgba(58, 51, 121, 0.4)',
      'bagianKanan': '-16px 0px 40px rgba(0, 0, 0, 0.2)',
      'bagianKananHover': '-16px 0px 40px rgba(0, 0, 0, 0.3)',
      'glow': '0px 0px 40px rgba(255, 190, 178, 0.7)',
      'glowUngu': '0px 0px 40px #3A3379;',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'bursakerja': {
          'primary': '#3A3379',
          'primary-focus': '#3A3379',
          'primary-content': '#ffffff',
          'secondary': '#2b2268',
          'secondary-focus': '#2b2268',
          'secondary-content': '#ffffff',
          'accent': '#FFBEB2',
          'accent-focus': '#FFBEB2',
          'accent-content': '#ffffff',
          'neutral': '#444444',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#FFF47E',
          'success': '#C2F784',
          'warning': '#FFBF86',
          'error': '#F6A9A9',
          'white': '#ffffff',
        },
      },
      'dark',
    ],
  },
}