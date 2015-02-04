/**
 * Controller Object to dispatch actions to view/Contact and model/Contacts.
 * @constructor
 */
var ContactsController = function() {
};

ContactsController.prototype = {
  setup: function() {
    var addContact = new AddContactForm();
    this.jsonImport();
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
        contact.value = JSON.parse(localStorage.getItem(key));
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
  },

  jsonImport: function() {
    var $importForm = new ContactImport();
  }
};

/**
 * @description Disptaches static remove methods on model and view
 * @arg {number} id - Key used to select contact from DOM and
 * localStorage.
 */
ContactsController.remove = function(id) {
  ContactModel.remove(id);
  ContactView.remove(id);
};

/**
 * @description Creates a new ContactView and attaches it to the DOM.
 * @arg {number} id - Key of the contact being rendered.
 * @arg {Object} contact - Object hash used to populate instance.
 * @arg {string} contact.firstName - First name of the contact.
 * @arg {string} contact.lastName - Last name of the contact.
 * @arg {string} contact.tel - Telephone number of the contact.
 */
ContactsController.renderContact = function(id, contact) {
  var contactView = new ContactView(id, contact);
};

/**
 * @description Method to fetch item from localStorage and then render
 * to the DOM.
 * @arg {number} id - Key used to select contact from the localStorage.
 */
ContactsController.toJSON = function(id) {
  var $fieldExport = new ContactExport(ContactModel.fetch(id));
};

/**
 * @description Method to fetch item from localStorage and then render
 * to the DOM.
 * @arg {number} json - json blob to be imported
 */
ContactsController.fromJSON = function(json) {
  json.forEach(function(currentValue) {
    var contactModel = new ContactModel(currentValue);
  });
};

module.exports = ContactsController;

// Keep requires after the exports to prevent cirular dependency issues
var ContactModel = require('../model/Contacts');
var ContactView = require('../view/Contact');
var AddContactForm = require('../view/AddContactForm');
var ContactExport = require('../view/ContactExport');
var ContactImport = require('../view/ContactImport');
