var Contacts = require('./controller/Contacts');
var Contact = require('./model/Contacts');

document.addEventListener("DOMContentLoaded", function(event) {
  var contacts = new Contacts();
  contacts.renderAll();
});
