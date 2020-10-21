$( document ).ready(function() {


    // Feature carousel
    $('.hero').carousel({
        interval: 5000
    })

    $('.carousel1 .carousel-item1').each(function(){
        var minPerSlide = 3;
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i=0;i<minPerSlide;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });


    //Scrll Top
    totop_myhide();

    jQuery(window).on('scroll',function(){
        //e.preventDefault();
        totop_myhide();
    });


    $(".totop").on('click', function() {	
        //                    e.preventDefault();
        $("html, body").animate({ scrollTop: 0 });
        return false;
    });

    function totop_myhide(){

        "use strict";

        var toTop		=$(".totop");
        if(toTop.length){
            var topOffSet 	=toTop.offset().top;

            if(topOffSet > 1000){
                toTop.addClass('opened');	
            }else{
                toTop.removeClass('opened');
            }
        }
    }


});