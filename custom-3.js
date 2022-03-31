
$(function (){

    "use strict";

    // Header Height 

    $(".header").height ( $(window).height () );

    $(window).resize (function () {

        $(".header").height ( $(window).height () );

        $('.main').css ({

            paddingTop: ( $(".header").height() - $('.main').height () ) /2.4
    
        });
    
    });

    // Main Center 

    $('.main').css ({

        paddingTop: ( $(".header").height() - $('.main').height () ) /2.4

    });

    // Smoth Scroll To Div

    $("ul li a").click( function () {

        $("html, body").animate({

            scrollTop: $("#" + $(this).data("value") ).offset().top

        }, 1200);

    });

    $('ul li a').click (function (){

        $(this).parent().addClass("active").siblings().removeClass("active");

    });

    // Smoz Scroll Top 

    $('.fa-arrow-circle-up').click (function (){

        $('html, body').animate ({

            scrollTop: $('.header').offset().top

        },1200)

    });

    // Slider By Polits 

    $('.polit-2').click (function() {

       $('.info-1').removeClass('active').fadeOut(0, function(){

            $('.info-3').removeClass('active').fadeOut(0, function (){

                $('.info-2').addClass('active').fadeIn();

            });

       });

    });

    $('.polit-3').click (function() {

        $('.info-1').removeClass('active').fadeOut(0, function(){
 
             $('.info-2').removeClass('active').fadeOut(0, function (){
 
                 $('.info-3').addClass('active').fadeIn(0);
 
             });
 
        });
 
     });
 
     $('.polit-1').click (function() {

        $('.info-2').removeClass('active').fadeOut(0, function(){
 
             $('.info-3').removeClass('active').fadeOut(0, function (){
 
                 $('.info-1').addClass('active').fadeIn(0);
 
             });
 
        });
 
     });

     $(".polit-box div").click (function(){

        $(this).addClass("active").siblings().removeClass("active");

     });





});