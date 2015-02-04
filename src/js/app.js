var ContactsController = require('./controller/Contacts');

document.addEventListener("DOMContentLoaded", function(event) {
  var contacts = new ContactsController();
  contacts.renderAll();
  contacts.setup();

  ContactsController.log();
});
