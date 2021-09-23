// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'tech': "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
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
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
      bounce5: 'bounce5 1s infinite',
    },
    keyframes: {
      spin: {
        to: {
          transform: 'rotate(360deg)',
        },
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0',
        },
      },
      pulse: {
        '50%': {
          opacity: '.5',
        },
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
      bounce5: {
        '0%, 100%': {
          transform: 'translateY(-5%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
      },
    },
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