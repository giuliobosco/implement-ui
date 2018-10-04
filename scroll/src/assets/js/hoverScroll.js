(function($){
    /* Store the original positions */
    var d1 = $('.one');
    var d1orgtop = d1.position().top;
    var d2 = $('.two');
    var d2orgtop = d2.position().top;
    var d3 = $('.three');
    var d3orgtop = d3.position().top;
    var d4 = $('.four');
    var d4orgtop = d4.position().top;

    /* respond to the scroll event */
    $(window).scroll(function(){
        /* get the current scroll position */
        var st = $(window).scrollTop();

        /* change classes based on section positions */
        if (st >= d1orgtop) {
            d1.addClass('latched');
        } else {
            d1.removeClass('latched');
        }
        if (st >= d2orgtop) {
            d2.addClass('latched');
        } else {
            d2.removeClass('latched');
        }
        if (st >= d3orgtop) {
            d3.addClass('latched');
        } else {
            d3.removeClass('latched');
        }
        if (st >= d4orgtop) {
            d4.addClass('latched');
        } else {
            d4.removeClass('latched');
        }
    });

})(window.jQuery);