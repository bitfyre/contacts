var AddContactForm = require('./view/AddContactForm');
var Contact = require('./model/Contacts');
var ContactView = require('./view/Contact');

document.addEventListener("DOMContentLoaded", function(event) {
  var addContact = new AddContactForm();
  var contactView = new ContactView(2);
});
