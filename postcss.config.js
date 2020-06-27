// postcss.config.js

const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  purge: [
    './src/components/Category.vue',
    './src/components/Nav.vue',
    './src/components/SideNavBar.vue',
    './src/views/About.vue',
    './src/views/Home.vue',
    './src/views/Hymn.vue',
    './public/index.html'
  ],
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};
