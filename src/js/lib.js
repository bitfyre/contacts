var $ = require('jquery');

var jQueryVersion = function() {
  return 'jQuery v.' + $.fn.jquery;
};

module.exports = jQueryVersion;
