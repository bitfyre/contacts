var AddContactForm = require('./view/AddContactForm');
var Contact = require('./model/Contacts');

document.addEventListener("DOMContentLoaded", function(event) {
  var addContact = new AddContactForm();
  var contacts = new Contact(1);
});
