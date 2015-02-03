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
   * @description Setup view
   * @arg {Number} id - integer used as the key when saving to localStorage
   */
  init: function(id, contact) {
    this.id = id;
    this.contact = contact;
    this.paint();
  },

  /**
   * @description Attaches the view to the DOM
   */
  paint: function() {
    var $parent = document.querySelector(this.el)
    $parent.appendChild(this.template());
  },

  /**
   * @description Builds a DOM based object
   * @returns {DOM} this.$el DOM object ready to attach to the DOM
   */
  template: function() {
    var contactView = this;
    this.$el = document.createElement(this.tagName);
    this.$el.setAttribute('id', this.idPrefix + this.id.toString());
    this.$el.classList.add('Contact');
    this.$el.innerHTML = '<td class="Contact-givenName">' +
        this.contact.firstName +
      '</td> \n' +
      '<td class="Contact-familyName">' + this.contact.lastName + '</td> \n'+
      '<td class="Contact-tel">' + this.contact.tel + '</td> \n' +
      '<td class="Contact-actions"> \n' +
        '<button class="js-export">Export</button> \n' +
        '<button class="js-remove">Remove</button> \n' +
      '</td> \n';
    this.$el.querySelector('.js-remove').addEventListener('click', function() {
      contactView.onRemove(contactView.id);
    }, false);
    return this.$el;
  },

  onRemove: function(id) {
    console.log('Remove:', id.toString());
  }
};

module.exports = ContactView;
