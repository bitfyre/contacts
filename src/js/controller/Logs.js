/**
 * Controller Object to dispatch Log actions.
 * @constructor
 * @arg {string} type - Type of log entry. Valid options are:
 * ['debug', 'info', 'warning', 'error', 'critical'].
 * @arg {string} msg - Message relating to entry.
 * @arg {string} data - Generated data related to the log entry.
 */
var LogController = function(type, msg, data) {
  this.init(type, msg, data);
};

LogController.prototype = {
  /**
   * @description Initialize Log Entry.
   * @arg {string} type - Type of log entry, passed in from constructor.
   * @arg {string} msg - Message relating to entry.
   * @arg {string} data - Generated data related to the log entry.
   */
  init: function(type, msg, data) {
    var date = new Date();
    date = date.toISOString();
    this.dateTime = date;
    this.type = type;
    this.msg = msg;
    this.data = data;
    this.render();
  },

  render: function() {
    console.log(this.dateTime, this.type, this.msg, this.data);
  }
};

module.exports = LogController;

// Keep requires after the exports to prevent cirular dependency issues
