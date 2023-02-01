// import * as $ from 'jquery';
// const $ = require('jquery');
import { validateEmail, validatePassword, validateUsername } from './utils/validation/validation';

$(document).ready(() => {
  $('body').html('<div class="container"></div>');
  $('body').css('backgroundColor', '#5F7161');
  // Form
  $('.container').html('<form class="form"></form>');

  const $form = $('<h4 class="form__title">Registration</h4>'
    + '<div class="form__username"></div>'
    + '<div class="form__email"></div>'
    + '<div class="form__password"></div>'
    + '<button class="form__btn" type="submit">Register</button>');

  const $username = $('<h6 class="form__input-title">Username:</h6>'
  + '<input class="form__input form__input-username" type="text" placeholder="Username..."/>'
  + '<span class="form__input--error username">Invalid username: min length 2 letter and max 50 letter</span>');

  const $email = $('<h6 class="form__input-title">Email:</h6>'
  + '<input class="form__input form__input-email" type="text" placeholder="Email..."/>'
  + '<span class="form__input--error email">Invalid email: e.g. example@example.com</span>');

  const $password = $('<h6 class="form__input-title">Password:</h6>'
  + '<input class="form__input form__input-password" type="password" placeholder="Password..."/>'
  + '<span class="form__input--error password">Invalid password: 8 characters long and must contain 1 number and only 1 special character (!, @, #, $, %, ^, &, *)</span>');

  $('.form').append($form);
  $('.form__username').append($username);
  $('.form__email').append($email);
  $('.form__password').append($password);

  // CSS styles
  $('.container').css({
    margin: '15px auto',
    maxWidth: '1200px',
    width: '100%',
    padding: '0 15px',
  });
  $('.form').css({
    maxWidth: '500px',
    width: '100%',
    backgroundColor: 'aliceblue',
    transform: 'translateX(70%)',
    padding: '15px',
    borderRadius: '20px',
  });
  $('.form__title').css({
    fontSize: '2.5rem',
    marginBottom: '10px',
    width: '100%',
    textAlign: 'center',
    fontWeight: '700',
  });
  $('.form__input').css({
    width: '100%',
    fontSize: '1.4rem',
    padding: '10px',
    borderRadius: '10px',
    border: '0',
    backgroundColor: '#6D8B74',
    color: '#EFEAD8',
    marginBottom: '10px',
  });
  $('.form__input-title').css({
    fontSize: '1.35rem',
    marginBottom: '5px',
    paddingLeft: '10px',
  });
  $('.form__btn').css({
    fontSize: '1.3rem',
    borderRadius: '10px',
    border: '0',
    padding: '10px',
    backgroundColor: '#6D8B74',
    color: '#EFEAD8',
    cursor: 'pointer',
  });
  $('.form__input--error').css({
    color: 'red',
    display: 'none',
    paddingBottom: '10px',
    paddingLeft: '15px',
  });

  $('.form').submit((event) => {
    event.preventDefault();
    // input values
    const nameVal = $('.form__input-username').val();
    const emailVal = $('.form__input-email').val();
    const passVal = $('.form__input-password').val();

    // check input validation
    if (!validateUsername(nameVal)) {
      $('.form__input--error.username').css({ display: 'inline-block' });
    } else {
      $('.form__input--error.username').css({ display: 'none' });
    }
    if (!validateEmail(emailVal)) {
      $('.form__input--error.email').css({ display: 'inline-block' });
    } else {
      $('.form__input--error.email').css({ display: 'none' });
    }
    if (!validatePassword(passVal)) {
      $('.form__input--error.password').css({ display: 'inline-block' });
    } else {
      $('.form__input--error.password').css({ display: 'none' });
    }

    // check if all inputs is valid
    if (validateUsername(nameVal) && validateEmail(emailVal) && validatePassword(passVal)) {
      $('.form__input-username').val('');
      $('.form__input-email').val('');
      $('.form__input-password').val('');
      alert('Form completed correctly');
    }

    // console.log(nameVal, emailVal, passVal);
  });
});
