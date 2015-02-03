var ContactsController = function() {
  this.init();
};

ContactsController.prototype = {
  contacts: [],

  init: function() {
    console.log('Contacts Controller');
  },

  fetchAll: function() {
    var total = localStorage.length;
    for (i = 0; i < total; i++) {
      if (localStorage.key(i) !== 'debug') {
        this.contacts.push(JSON.parse(
          localStorage.getItem((i + 1).toString())));
      }
    }
    console.log(this.contacts);
  }
};

module.exports = ContactsController;
