/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/**/*.{html,js,jsx}"],
  mode:'jit',
  darkMode: 'class',
  theme: {
    colors: {
      'primary-light-100': '#FEFEFE',
      'primary-light-200': '#F6F8FF',
      'primary-light-400': '#0079FF',
      'primary-light-500': '#697C9A',
      'primary-light-600': '#4B6A9B',
      'primary-light-800': '#2B3442',
      'primary-dark-100': '#FFFFFF',
      'primary-dark-400': '#0079FF',
      'primary-dark-600': '#1E2A47',
      'primary-dark-800': '#141D2F'
    },
    fontFamily:{
      fontPrimary: ['Space Mono', 'monospace']
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')

  ],
}

