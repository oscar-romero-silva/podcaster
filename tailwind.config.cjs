/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 0px 6px 0px rgb(0 0 0 / 0.2)',
        'custom-xl': '0px 0px 20px 0px rgb(0 0 0 / 0.2)',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp')],
};
