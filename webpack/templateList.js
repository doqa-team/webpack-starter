const Path = require('path');

module.exports = [
  {
    filename: 'index.html',
    template: Path.resolve(__dirname, '../src/index.html'),
    title: 'Home page',
  },
  {
    filename: 'about.html',
    template: Path.resolve(__dirname, '../src/about.html'),
    title: 'About page',
  },
  {
    filename: 'about-hbs.html',
    template: Path.resolve(__dirname, '../src/hbs/pages/about.hbs'),
  },
];