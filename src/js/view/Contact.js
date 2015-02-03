/**
 * Creates new view of Contact
 * @constructor
 * @arg {Number} id - integer used as the key when saving to localStorage
 */
var ContactView = function(id, contact) {
  this.init(id, contact);
};

ContactView.prototype = {
  tagName: 'tr',
  el: '.js-contacts',
  idPrefix: 'contact-',

  /**
   * Setup view
   * @arg {Number} id - integer used as the key when saving to localStorage
   */
  init: function(id, contact) {
    this.id = this.idPrefix + id.toString();
    this.contact = contact;
    this.paint();
  },

  paint: function() {
    var $parent = document.querySelector(this.el)
    $parent.appendChild(this.template());
  },

  template: function() {
    this.$el = document.createElement(this.tagName);
    this.$el.setAttribute('id', this.id);
    this.$el.classList.add('Contact');
    this.$el.innerHTML = '<td class="Contact-givenName">' +
        this.contact.firstName +
      '</td> \n' +
      '<td class="Contact-familyName">' + this.contact.lastName + '</td> \n'+
      '<td class="Contact-tel">' + this.contact.tel + '</td> \n' +
      '<td class="Contact-actions"> \n' +
        '<button>Export</button> \n' +
        '<button>Remove</button> \n' +
      '</td> \n';
    return this.$el;
  }
};

module.exports = ContactView;
