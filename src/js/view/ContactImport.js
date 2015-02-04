var ContactsController = require('../controller/Contacts');

/**
 * Setups form handling to import data into localStorage DOM.
 * @constructor
 */
var ContactImport = function() {
  this.init();
};

ContactImport.prototype = {
  el: '.js-import',
  elField: '.js-importField',

  /**
   * @description Initializes rendering of export data.
   * @arg {Object} json - JSON object to be rendered to DOM.
   */
  init: function() {
    this.events();
  },

  events: function() {
    var contactImport = this;
    var $form = document.querySelector(this.el);
    $form.addEventListener('submit', function() {
      var value = this.querySelector(contactImport.elField).value;
      var json;
      event.preventDefault();
      try {
        json = JSON.parse(value);
      }
      catch (e) {
        return ContactsController.log('error', 'Invalid JSON',
          JSON.stringify(e.message));
      }
      ContactsController.fromJSON(json);
    }, false);
  }
};

module.exports = ContactImport;
