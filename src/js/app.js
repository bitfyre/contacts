var ContactsController = require('./controller/Contacts');

document.addEventListener("DOMContentLoaded", function(event) {
  var contacts = new ContactsController();
  ContactsController.log('info', 'App Loaded', '');
  contacts.renderAll();
  contacts.setup();
});
