var AddContactForm = require('./view/AddContactForm');
var Contacts = require('./controller/Contacts');
var Contact = require('./model/Contacts');

document.addEventListener("DOMContentLoaded", function(event) {
  var addContact = new AddContactForm();
  var contacts = new Contacts();
  contacts.renderAll();
});
