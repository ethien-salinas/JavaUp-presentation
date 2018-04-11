// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke');
//var cube = require('./bespoke-theme-cube.min.js')
var cube = require('bespoke-theme-cube');
var classes = require('bespoke-classes');
var nav = require('bespoke-nav');
var scale = require('bespoke-scale');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var prism = require('bespoke-prism');
var extern = require('bespoke-extern');

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
