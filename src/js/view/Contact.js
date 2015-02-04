var ContactsController = require('../controller/Contacts');

/**
 * Creates new view of Contact
 * @constructor
 * @arg {Number} id - integer used as the key when saving to localStorage
 */
var ContactView = function(id, contact) {
  this.init(id, contact);
};

var CONST = {
  EL: '.js-contacts',
  ID_PREFIX: 'contact-'
};


ContactView.prototype = {
  tagName: 'tr',
  el: CONST.EL,
  idPrefix: CONST.ID_PREFIX,

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
    this.$el.querySelector('.js-export').addEventListener('click', function() {
      contactView.onExport(contactView.id);
    }, false);
    return this.$el;
  },

  /**
   * @description Method to be used as an event handler on Remove button
   * @arg {number} id - Key of item to be exported
   */
  onExport: function(id) {
    console.log('Export:', id.toString());
  },

  /**
   * @description Method to be used as an event handler on Remove button
   * @arg {number} id - Key of item to be deleted
   */
  onRemove: function(id) {
    ContactsController.remove(id);
  }
};


/**
 * @description Delete element from the DOM.
 * @arg {number} id - Key of the item to delete that will be converted to a
 * DOM id.
 */
ContactView.remove = function(id) {
  var $parent = document.querySelector(CONST.EL);
  var $contact = document.getElementById(CONST.ID_PREFIX
    + id.toString());

  $parent.removeChild($contact);
};

module.exports = ContactView;
