var ContactView = require('../view/Contact');

var ContactsController = function() {
  this.init();
};

ContactsController.prototype = {
  contacts: [],

  init: function() {
  },

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

  renderAll: function() {
    this.fetchAll();
    this.contacts.forEach(function(currentValue) {
      var contact = new ContactView(currentValue.key, currentValue.value);
    });
  }
};

module.exports = ContactsController;
