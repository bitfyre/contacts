var $ = require('jquery');

var jQueryVersion = function() {
  $('h1').css('background-color', 'red');
  return 'jQuery v.' + $.fn.jquery;
};

module.exports = jQueryVersion;
