/**
 * Creates new view of Contact
 * @constructor
 * @arg {Number} id - integer used as the key when saving to localStorage
 */
var ContactView = function(id) {
  this.init(id);
};

ContactView.prototype = {
  tagName: 'tr',
  el: '.js-contacts',
  idPrefix: 'contact-',

  /**
   * Setup view
   * @arg {Number} id - integer used as the key when saving to localStorage
   */
  init: function(id) {
    this.id = this.idPrefix + id.toString();
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
    this.$el.innerHTML = '<td class="Contact-givenName">Bob</td> \n' +
      '<td class="Contact-familyName">Jones</td> \n'+
      '<td class="Contact-tel">(123) 456-7890</td> \n' +
      '<td class="Contact-actions"> \n' +
        '<button>Export</button> \n' +
        '<button>Remove</button> \n' +
      '</td> \n';
    return this.$el;
  }
};

module.exports = ContactView;
