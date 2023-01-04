console.log('ready')
$(function () {
    $('.header__burger-btn').on('click', function () {
        $('.header__navigation-menu').removeClass('navigation-menu--close')
    });
    $('.header__burger-btn').on('click', function () {
        $('.header__navigation-menu').addClass('navigation-menu--close')
    });
})
