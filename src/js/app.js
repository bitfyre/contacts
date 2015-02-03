var ContactsController = require('./controller/Contacts');
var Contact = require('./model/Contacts');

document.addEventListener("DOMContentLoaded", function(event) {
  var contacts = new ContactsController();
  contacts.renderAll();
  contacts.setup();
});
