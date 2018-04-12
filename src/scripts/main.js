// Require Node modules in the browser thanks to Browserify: http://browserify.org
const bespoke = require('bespoke');
const cube = require('bespoke-theme-cube');
const classes = require('bespoke-classes');
const nav = require('bespoke-nav');
const scale = require('bespoke-scale');
const bullets = require('bespoke-bullets');
const hash = require('bespoke-hash');
const prism = require('bespoke-prism');
const extern = require('bespoke-extern');

// Bespoke.js
//bespoke.from({ parent: 'article.deck', slides: 'section' }, [
bespoke.from('article', [
  cube(),
  classes(),
  nav(),
  scale(),
  bullets('.build, .build-items > *:not(.build-items)'),
  hash(),
  prism(),
  extern(bespoke)
]);
