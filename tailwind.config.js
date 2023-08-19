/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    function ({addUtilities}) {
      const newUtilities = {};
      Array.from({length: 5}).forEach((_, i) => {
        const lines = i + 1;
        newUtilities[`.truncate-${lines}-lines`] = {
          display: '-webkit-box',
          '-webkit-line-clamp': `${lines}`,
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        };
      });

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
