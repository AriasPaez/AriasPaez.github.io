module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: {
        1: '#99c24d',
        2: '#f18f01',
      },
      secondary: {
        1: '#f4f5f6',
        2: '#EDF7F6',
        3: '#333533',
        4: '#242423',
      },
      tertiary: {
        1: '#9e0001',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
