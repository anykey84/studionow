$(function() {
    console.log('start');

    // var videobackground = new $.backgroundVideo($('#top'), {
    //     "align": "centerXY",
    //     "width": '100%',
    //     "path": "video/",
    //     "filename": "LightStreaksDeepBlue",
    //     "types": ["mp4"],
    //     "preload": true,
    //     "autoplay": true,
    //     "loop": true
    //   });

    $('#integrated-solutions a, #video-gallery-button a').on('click', function() {
        scrollTo($(this).attr('href'));
    })

    function scrollTo(element) {

        var offset = 0;
        // скорость скролла
        var speed = 1000;

        // место скролла
        var top = $(element).offset().top + offset;

        $('html, body').animate({
            scrollTop: top
        }, speed);
    }


})
