$(function(){

    $('.directions .filter li').on('click', function(){
        $('.directions .filter li').removeClass('active');
        $(this).addClass('active');
    });

    $('.medical-center-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-slick-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-slick-prev"></i></button>',
    });

});

$(window).resize(function(){


    
});
