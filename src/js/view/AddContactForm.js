var AddContactForm = function() {
  this.init();
};

AddContactForm.prototype = {
  el: '.js-addContact',

  init: function() {
    var addContact = this;
    var $form = document.querySelector(this.el);
    $form.addEventListener('submit', function() {
      addContact.onSubmit();
    }, false);
  },

  validate: function() {
    var ids = [
      'given-name',
      'family-name',
      'tel'
    ];

    ids.forEach(function(currentValue) {
      if (document.getElementById(currentValue).value === '') {
        console.error('empty input');
      }
    });
  },

  onSubmit: function() {
    this.validate();
    console.log('Form Submit');
    event.preventDefault();
  }
}

module.exports = AddContactForm;
