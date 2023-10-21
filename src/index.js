import './images/index.js';
import './styles/_index.scss';
import $ from 'jquery';

/* eslint prefer-arrow-callback: "off" */
$(function () {
  $('.newsletter-signup__signup-form').on('submit', function (e) {
    e.preventDefault();
    const formElement = $(e.target);
    const formData = Object.fromEntries(new FormData(e.target));
    const formProp = Object.keys(formData);

    formProp.forEach(prop => {
      if (prop === 'email') {
        const formFieldElement = formElement.find(
          `.form-field:has(.form-control[name="${prop}"])`
        );
        const errorMsgElement = formFieldElement.find('.form-field__error-msg');

        const emailValidationRegex =
          /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
        const isEmailAddressEmpty = formData[prop].trim() === '';
        const isEmailAddressValid = emailValidationRegex.test(formData[prop]);

        if (isEmailAddressEmpty) {
          errorMsgElement.attr('aria-hidden', 'false');
          errorMsgElement.text('Email can not be empty');
          errorMsgElement.removeClass('form-field__error-msg_is-hidden');
        } else if (!isEmailAddressValid) {
          errorMsgElement.attr('aria-hidden', 'false');
          errorMsgElement.text('Please provide valid email address');
          errorMsgElement.removeClass('form-field__error-msg_is-hidden');
        } else {
          errorMsgElement.attr('aria-hidden', 'true');
          errorMsgElement.addClass('form-field__error-msg_is-hidden');
        }
      }
    });
  });
});
