var ContactView = require('../view/Contact');
var AddContactForm = require('../view/AddContactForm');

/**
 * Controller Object to dispatch actions to view/Contact and model/Contacts.
 * @constructor
 */
var ContactsController = function() {
  this.init();
};

ContactsController.prototype = {
  contacts: [],

  init: function() {
    var addContact = new AddContactForm();
  },

  /**
   * @description Fetches all existing contacts from LocalStorage.
   */
  fetchAll: function() {
    var total = localStorage.length;

    for (i = 0; i < total; i++) {
      var contact = {};
      var key = localStorage.key(i);
      if (key !== 'debug') {
        contact.key = key;
        contact.value = JSON.parse(localStorage.getItem((i + 1).toString()));
        this.contacts.push(contact);
      }
    }
  },

  /**
   * @description Adds all existing contacts to table. Intended for use on startup.
   */
  renderAll: function() {
    this.fetchAll();
    this.contacts.forEach(function(currentValue) {
      var contact = new ContactView(currentValue.key, currentValue.value);
    });
  }
};

module.exports = ContactsController;
