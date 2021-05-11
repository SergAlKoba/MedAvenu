$(function(){

    $('.directions .filter li').on('click', function(){
        $('.directions .filter li').removeClass('active');
        $(this).addClass('active');
    });

    $('.medical-center-slider').slick({
        rows: 1,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 2.28,
        nextArrow: '<button class="slick-arrow next"><i class="icon-slick-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-slick-prev"></i></button>',
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 2.28,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2.6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2.6,
                }
            },
            {
              breakpoint: 1024,
              settings: {
                rows: 2,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });

});

$(window).resize(function(){


    
});
