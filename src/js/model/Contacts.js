var ContactView = require('../view/Contact');

/**
 * Creates a new Contact.
 * @constructor
 * @arg {Object} options - Object hash used to populate instance.
 * @arg {string} options.firstName - First name of the contact.
 * @arg {string} options.firstName - Last name of the contact.
 * @arg {string} options.tel - Telephone number of the contact.
 */
var Contact = function(options) {
  if (typeof options !== 'object') {
    throw console.error('`options` is not properly defined');
  }
  this.init(options);

  ContactView.remove(1);
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

    console.log(this);
    this.save();
  },

  save: function() {
    var key = localStorage.length;
    var contact = {
      firstName: this.firstName,
      lastName: this.lastName,
      tel: this.tel
    };

    localStorage.setItem(key, JSON.stringify(contact));
    var contactView = new ContactView(key, contact);
  }
};

/**
 * @description Static method to remove a contact from localStorage.
 * @arg {number} id - Key of the item to delete.
 */
Contact.remove = function(id) {
  console.log(id.toString(), 'removed from localStorage');
  //localStorage.removeItem(id);
};

module.exports = Contact;
