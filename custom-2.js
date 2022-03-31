
$(function (){

    "use strict";

    // Header Height 

    $(".header").height ( $(window).height () );

    $(window).resize (function () {

        $(".header").height ( $(window).height () );
    
    });

    // smoz Scroll Chevron-bootom

    $(".header i").click ( function (){

        $("html, body").animate ({

            scrollTop: $(".features").offset().top

        }, 1200);

    });

    // Smoz Scroll Top

    $(".fa-arrow-circle-up").click ( function (){

        $("html, body").animate ({

            scrollTop: $(".header").offset().top

        }, 1500);

    });



    // Smoz Scroll Our Team

    $(".team").click ( function (){

        $("html, body").animate ({

            scrollTop: $(".our-team").offset().top

        }, 1200);

    });

    // Smoz Scroll Our Work

    $(".work").click ( function (){

        $("html, body").animate ({

            scrollTop: $(".our-work").offset().top

        }, 1200);

    });


    // Smoz Scroll Hire Us

    $(".hire").click ( function (){

        $("html, body").animate ({

            scrollTop: $(".contact").offset().top

        }, 1200);

    });


    // Show Button 

    $(".show").click ( function (){

        $(".item-box .hidden").fadeIn(1000);

        $(this).fadeOut();

    });
    
    // Chick Clients

    var leftArrow = $(".tistem .fa-chevron-left"),

        rightArrow = $(".tistem .fa-chevron-right");

    function chickClients() {

        $(".client:first").hasClass("active") ? leftArrow.fadeOut() : leftArrow.fadeIn();

        $(".client:last").hasClass("active") ? rightArrow.fadeOut() : rightArrow.fadeIn();

    }

    chickClients();

    // Slider By Chevron

    $(".tistem i").click (function () {

        if ( $(this).hasClass("fa-chevron-right") ) {

            $(".tistem .active").fadeOut (200, function (){

                $(this).removeClass("active").next(".client").addClass("active").fadeIn(200);

                chickClients();

            });

        } else {

            $(".tistem .active").fadeOut (200, function (){

                $(this).removeClass("active").prev(".client").addClass("active").fadeIn(200);

                chickClients();

            });

        }

    });

    $(".footer").width ( $(window).width () );

});

