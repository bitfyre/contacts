/**
 * Creates a new Contact
 * @constructor
 * @arg {Object} options - Object hash used to populate instance
 * @arg {string} options.firstName - First name of the contact
 * @arg {string} options.firstName - Last name of the contact
 * @arg {string} options.tel -  name of the contact
 */
var Contact = function(options) {
  if (typeof options !=== 'object') {
    throw '`options` is not properly defined';
  }
  console.log(typeof options);
  this.init(options);
};

Contact.prototype = {
  firstName: '',
  lastName: '',
  tel: '',

  /**
   * @description Creates a new instance of Contact
   */
  init: function(options) {
    console.log('Contact.init()');
  }
};

module.exports = Contact
