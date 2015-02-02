var AddContactForm = require('./view/AddContactForm');
var Contact = require('./model/Contacts');

document.addEventListener("DOMContentLoaded", function(event) {
  var addContact = new AddContactForm();
  var contact = new Contact({
    firstName: 'Alex',
    lastName: 'Lemanski',
    tel: '123.456.7890'
  });
});
