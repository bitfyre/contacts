var ContactsController = require('../controller/Contacts');

/**
 * Renders selected item to the DOM.
 * @constructor
 * @arg {Object} json - JSON object to be rendered to DOM.
 */
var ContactExport = function(json) {
  this.init(json);
};

ContactExport.prototype = {
  el: '.js-exportField',

  /**
   * @description Initializes rendering of export data.
   * @arg {Object} json - JSON object to be rendered to DOM.
   */
  init: function(json) {
    this.paint(json);
  },

  /**
   * @description Renders the actual data to the DOM.
   * @arg {Object} json - JSON object to be rendered to DOM.
   */
  paint: function(json) {
    var $el = document.querySelector(this.el);
    $el.value = json;
  }
};

module.exports = ContactExport;
