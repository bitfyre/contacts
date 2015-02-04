var Contact = require('../model/Contacts');
var ContactsController = require('../controller/Contacts');

var AddContactForm = function() {
  this.init();
};

/**
 * Adds functionality to exisiting Contact Form
 * @constructor
 * @todo add error handling
 * @todo pull input object creation out into it's own method
 */
AddContactForm.prototype = {
  el: '.js-addContact',

  init: function() {
    var addContact = this;
    var $form = document.querySelector(this.el);
    $form.addEventListener('submit', function() {
      addContact.onSubmit();
    }, false);
  },

  /**
   * Get values of form inputs
   * @returns {Objectj} Object formatted for use with Contact constructor
   * @todo determine how to move validation out to a validate method
   */
  getInputValues: function() {
    var ids = [
      ['given-name', 'firstName'],
      ['family-name', 'lastName'],
      ['tel', 'tel']
    ];

    var inputs = {};

    ids.forEach(function(currentValue) {
      var value = document.getElementById(currentValue[0]).value;
      if (value === '') {
        ContactsController.log('error', 'empty inputs',
          'Add Contact Form submission attempted with out filling out');
        throw 'empty input';
      }
      inputs[currentValue[1]] = value;
    });

    return inputs;
  },

  onSubmit: function() {
    event.preventDefault();
    var values = this.getInputValues();
    var contact = new Contact(values);

    ContactsController.log('info', 'Add Contact Form Submited',
      JSON.stringify(values));
  }
}

module.exports = AddContactForm;
