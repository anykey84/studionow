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

    $('#integrated-solutions a').on('click', function() {
      scrollTo($('#magic'));
    })

    function scrollTo(element) {
        console.log("!");
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
