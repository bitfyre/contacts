var ContactsController = require('../controller/Contacts');

/**
 * Creates a new Contact.
 * @constructor
 * @arg {Object} options - Object hash used to populate instance.
 * @arg {string} options.firstName - First name of the contact.
 * @arg {string} options.lastName - Last name of the contact.
 * @arg {string} options.tel - Telephone number of the contact.
 */
var Contact = function(options) {
  if (typeof options !== 'object') {
    ContactsController.log('critical', '`options` is not properly defined',
      JSON.stringify(options));
    throw '`options` is not properly defined';
  }
  this.init(options);
};

Contact.prototype = {
  firstName: '',
  lastName: '',
  tel: '',

  /**
   * @description Creates a new instance of Contact.
   */
  init: function(options) {
    var opts = Object.keys(options);
    opts.forEach(function(currentValue){
      this[currentValue] = options[currentValue];
    }, this);


    ContactsController.log('debug', '`this` in `ContactsModel.init()`',
      JSON.stringify(this));
    this.setUUID();
    this.save();
  },

  /**
   * @description Saves new contact to localStorage, and calls
   * ContactController.renderContact() to dispatch view rendering.
   */
  save: function() {
    var key = this.uuid;
    var contact = {
      firstName: this.firstName,
      lastName: this.lastName,
      tel: this.tel
    };

    localStorage.setItem(key, JSON.stringify(contact));

    var contactView = ContactsController.renderContact(key, contact);

    var obj = {
      "key": key,
      "contact": contact
    };

    ContactsController.log('info', 'Contact Saved', JSON.stringify({
      "key": key,
      "contact": contact
    }));
  },

  /**
   * @description Set a UUID like property to use as the key. Blatanty
   * used {@link http://jsfiddle.net/briguy37/2MVFd/ | this jsFiddle}
   * as my reference.
   */
  setUUID: function() {
    var date = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    uuid = uuid.replace(/[xy]/g, function(current) {
      var num = (date + Math.random()*16)%16 | 0;
      date = Math.floor(date/16);
      return (current == 'x' ? num : (num&0x3|0x8))
        .toString(16);
    });

    this.uuid = uuid;
  }
};

/**
 * @description Static method to remove a contact from localStorage.
 * @arg {number} id - Key of the item to delete.
 */
Contact.remove = function(id) {
  localStorage.removeItem(id.toString());

  ContactsController.log('info', 'Contact Deleted', id.toString());
};

/**
 * @description Static method to remove a contact from localStorage.
 * @arg {number} id - Key of the item to delete.
 */
Contact.fetch = function(id) {
  return localStorage.getItem(id.toString());
};

module.exports = Contact;
