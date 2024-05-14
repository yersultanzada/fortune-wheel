$(document).ready(function () {
    setTimeout(function() {
        $('.widget-activator').css({
            'display':'block'
        })
    }, 5000);
    var widget = $('.widget');
    $('.widget-activator').click(function () {
        widget.addClass('active');
        widget.removeClass('slide-out');
        widget.addClass('slide-in');
    })
    $('.widget-close').click(function () {
        widget.removeClass('slide-in');
        widget.addClass('slide-out');
        setTimeout(function() {
            widget.removeClass('active');
        }, 500);
    })
})