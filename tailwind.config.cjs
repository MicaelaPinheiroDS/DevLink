/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'stroke':{
        'drak': 'rgba(255, 255, 255, 0.1)',
        'light': 'rgba(0, 0, 0, 0.5)',
      },
      'white': 'white'
    },
    extend: {},
    backgroundImage: {
      'bg-img-mobile-drak-mode' : 'url(./src/assets/background-mobile-drak-mode.jpg)',
      'bg-img-destop-drak-mode' : 'url(./src/assets/background-mobile-drak-mode.jpg)',
      'icon-moon-star' : 'url(./src/assets/img/moonStars.svg)',
      'icon-sun': 'url(./src/assets/img/sun.svg)',

    }
  },
  plugins: [],
}
