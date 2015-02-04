/**
 * Controller Object to dispatch Log actions.
 * @constructor
 */
var LogController = function() {
  this.init();
};

LogController.prototype = {
  el: '.js-logs',

  /**
   * @description Initialize Log
   */
  init: function() {
    var date = new Date();
    date = date.toISOString();
    this.dateTime = date;
  }
};

module.exports = LogController;

// Keep requires after the exports to prevent cirular dependency issues
