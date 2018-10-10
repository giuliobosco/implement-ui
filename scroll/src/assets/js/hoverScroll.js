(function($){

    let slidesTops = [];

    $('.slide').each(function () {
        slidesTops.push($(this).position().top);
    });

    /* respond to the scroll event */
    $(window).scroll(function(){
        /* get the current scroll position */
        let st = $(window).scrollTop();

        /* change classes based on section positions */
        $('.slide').each(function( index ) {
            let $slide = $(this);

            if (st >= slidesTops[index]) {
                $slide.addClass('latched');
            } else {
                $slide.removeClass('latched');
            }
        });
    });

})(window.jQuery);