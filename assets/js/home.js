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

    $('.specialists-slider').slick({
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 4.3,
        nextArrow: '<button class="slick-arrow next"><i class="icon-slick-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-slick-prev"></i></button>',
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4.16,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4.35,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4.4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3.92,
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2.48,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 540,
              settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
        ]
    });

    $('.specialists-slider h4').matchHeight({
        byRow: false
    }); 

    if($(window).width() >= 1024){

        $('.promotions .text h4').matchHeight({
            byRow: false
        }); 
        
        $('.reviews-item p').matchHeight({
            byRow: false
        }); 

    }

    $('.news-slider').slick({
        rows: 1,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 2.8,
        nextArrow: '<button class="slick-arrow next"><i class="icon-slick-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-slick-prev"></i></button>',
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 2.42,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2.65,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2.98,
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
                slidesToShow: 2.5,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                rows: 3,
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
