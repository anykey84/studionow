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

    AOS.init();

    $('#integrated-solutions a, #video-gallery-button a').on('click', function() {
        scrollTo($(this).attr('href'));
    });

    $('#watch-highlight-reel').on('click', function() {
        $('#video-modal').modal();
        $('#video-modal').css('display', 'flex');
        videojs("my-video").play();
        $('#video-modal').on('hide.bs.modal', function(e) {
            videojs("my-video").pause();
        });
    });

    $('#top .navbar-toggle').on('click', function(){
      $('#top-menu').toggleClass('hidden-xs');
    });

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

    $('.tabs form').on('submit', function(e) {
      e.preventDefault();
      var form = $(this);
      form.css('opacity', '.5').parent().append('<div class="overlay" style="display: flex"><div class="thanks"><p>Thanks!</p><button class="btn btn-default btn-block">Ok</button></div></div>')
      $('.tabs .thanks button').on('click', function() {
        $('.tabs .overlay').hide();
        form.css('opacity', '1');
      })
    })

});
