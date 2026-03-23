import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#d4af37',
        secondary: '#f4e6e7',
      }
    }
  },
  plugins: []
};
export default config;