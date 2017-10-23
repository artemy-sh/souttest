$('document').ready(function () {
    $('.nav-block li a, .nav-block .contacts-block a.order-call, .links-block a').click(function () {
        var id = $(this).attr('href');
        $(id).bPopup({
            speed: 650,
            transition: 'fadeIn'
        });
        return false;
    });

    $('.modal-block .modal-close a').click(function () {
        $(this).parent().parent().bPopup().close();
    });

    $('#btn-block1').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    $('.select-time').SumoSelect();
});