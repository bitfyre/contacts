var ContactModel = require('../model/Contacts');
var ContactView = require('../view/Contact');
var AddContactForm = require('../view/AddContactForm');

/**
 * Controller Object to dispatch actions to view/Contact and model/Contacts.
 * @constructor
 */
var ContactsController = function() {
  this.init();
};
t
ContactsController.remove = function(id) {
  console.log('Controller Remove');
  //ContactModel.remove(id);
  //ContactView.remove(id);
};


ContactsController.prototype = {
  init: function() {
    console.log('new controller');
  },

  setup: function() {
    var addContact = new AddContactForm();
  },

  /**
   * @description Fetches all existing contacts from LocalStorage.
   */
  fetchAll: function() {
    var contacts = [];
    var total = localStorage.length;

    for (i = 0; i < total; i++) {
      var contact = {};
      var key = localStorage.key(i);
      if (key !== 'debug') {
        contact.key = key;
        contact.value = JSON.parse(localStorage.getItem((i + 1).toString()));
        contacts.push(contact);
      }
    }

    return contacts;
  },

  /**
   * @description Adds all existing contacts to table. Intended for use
   * on startup.
   */
  renderAll: function() {
    var contacts = this.fetchAll();
    contacts.forEach(function(currentValue) {
      var contact = new ContactView(currentValue.key, currentValue.value);
    });
  }
};

module.exports = ContactsController;
