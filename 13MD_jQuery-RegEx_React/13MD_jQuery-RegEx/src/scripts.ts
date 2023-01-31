// '<></>'
$(document).ready(() => {
  $('body').html('<div class="container"></div>');
  $('body').css('backgroundColor', '#5F7161');
  // Form
  $('.container').html('<form class="form"></form>');
  $('.form').append('<h4 class="form__title">Registration</h4>');
  $('.form').append('<h6 class="form__input-title">Username:</h6>');
  $('.form').append('<input class="form__input" placeholder="Username..."/>');
  $('.form').append('<h6 class="form__input-title">Email:</h6>');
  $('.form').append('<input class="form__input" placeholder="Email..."/>');
  $('.form').append('<h6 class="form__input-title">Password:</h6>');
  $('.form').append('<input class="form__input" placeholder="Password..."/>');
  $('.form').append('<button class="form__btn" type="button">Register</button>');

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
});
