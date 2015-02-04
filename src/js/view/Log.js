/**
 * Log Object For rendering to the DOM.
 * @constructor
 * @arg {string} date - ISO formated dateTime string.
 * @arg {string} type - Type of log entry. Valid options are:
 * ['debug', 'info', 'warning', 'error', 'critical'].
 * @arg {string} msg - Message relating to entry.
 * @arg {string} data - Generated data related to the log entry.
 */
var LogView = function(date, type, msg, data) {
  this.init(date, type, msg, data);
};

LogView.prototype = {
  tagName: 'li',
  el: '.js-logs',


  /**
   * @description Initialize View object
   * @arg {string} date - ISO formated dateTime string.
   * @arg {string} type - Type of log entry. Valid options are:
   * ['debug', 'info', 'warning', 'error', 'critical'].
   * @arg {string} msg - Message relating to entry.
   * @arg {string} data - Generated data related to the log entry.
   */
  init: function(date, type, msg, data) {
    this.date = date;
    this.type = type;
    this.msg = msg;
    this.data = data;
    this.paint();
  },

  /**
   * @description Build out DOM object to be painted.
   */
  template: function() {
    this.$el = document.createElement(this.tagName);
    this.$el.setAttribute('id', 'log-' + this.date);
    this.$el.classList.add('Log-item');
    this.$el.classList.add('Log_' + this.type.toLowerCase() + '-item');
    this.$el.innerHTML = this.date
      + ' [' + this.type.toUpperCase() + '] '
      + this.msg + ' | '
      + this.data;

    return this.$el;
  },

  /**
   * @description Paint template to the Log.
   */
  paint: function() {
    var $parent = document.querySelector(this.el)
    $parent.appendChild(this.template());
  },
};

module.exports = LogView;
