/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.{html,js,jsx,ts,tsx}',
    './frontend/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-background-image': "url('/path/to/your/background-image.jpg')",
      },
      fontFamily: {
        satoshiR: ['Satoshi Light', 'sans-serif'],
        satoshiM: ['Satoshi Medium', 'sans-serif'],
        satoshiB: ['Satoshi Bold', 'sans-serif'],
        satoshiBlack: ['Satoshi Black', 'sans-serif'],
      },
      screens: {
        xs: '325px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1280px',
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        blue: {
          main: '#0066FF',
        },
      },
    },
  },
  plugins: [],
};
