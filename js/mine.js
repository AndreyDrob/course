$(function() {
    $('.header__menu-burger').click(function(event) {
        $('.header__menu-burger, .header__menu',
            'body').toggleClass('active');
        $('body').toggleClass('lock');
    });
});