var AddContactForm = function() {
  this.init();
};

AddContactForm.prototype = {
  el: '.js-addContact',

  init: function() {
    var $form = document.querySelector(this.el);
    $form.addEventListener('submit', this.onSubmit, false);
  },

  onSubmit: function() {
    console.log('Form Submit');
    event.preventDefault();
  }
}

module.exports = AddContactForm;
