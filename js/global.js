var _functions = {};
$(function () {
    "use strict";
    /*================*/
    /* 01 - VARIABLES */
    /*================*/
    
    var winW, winH, headerH, winScr, footerTop, _isresponsive, responsivePoint = 991,
        _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i),
        _isPhone;

    /*========================*/
    /* 02 - page calculations */
    /*========================*/
    _functions.pageCalculations = function () {
        winW = $(window).width();
        winH = $(window).height();
        $('.tt-slide').css({
            'height': winH
        });
    };

    /*==============================*/
    /* 03 - function on page scroll */
    /*==============================*/
    $(window).scroll(function () {
        _functions.scrollCall();
    });

    _functions.scrollCall = function () {
        winScr = $(window).scrollTop();
        if (winScr > 1) $('header').addClass("shadow-head");
        else $('header').removeClass("shadow-head");
    };

    /*=================================*/
    /* 04 - function on document ready */
    /*=================================*/
    if (_ismobile) $('body').addClass('mobile');
    _functions.pageCalculations();
    _functions.scrollCall();


    setTimeout(function () {
        $('body').addClass('loaded');
        _functions.initSwiper();
        $('#loader-wrapper').fadeOut();
    }, 300);

    /*============================*/
    /* 05 - function on page load */
    /*============================*/
    $(window).load(function () {

    });

    /*==============================*/
    /* 06 - function on page resize */
    /*==============================*/
    _functions.resizeCall = function () {
        _functions.pageCalculations();
    };
    if (!_ismobile) {
        $(window).resize(function () {
            _functions.resizeCall();
        });
    } else {
        window.addEventListener("orientationchange", function () {
            _functions.resizeCall();
        }, false);
    }

    //swipper
    _functions.initSwiper = function () {
        var swiper = new Swiper('.swiper-container', {
            speed: 600,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' +
                        '<span class="fraction-of">of</span>' +
                        '<span class="' + totalClass + '"></span>';
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    };
    //swipper


    //lang-dropdown
    $('.lang-dropdown span').on('click', function () {
        $(this).closest('.lang-dropdown').find('ul').slideToggle();
    });

    $('.lang-dropdown li').on('click', function () {
        var text = $(this).text();
        $(this).closest('.lang-dropdown').find('span').html(text);
        $(this).closest('.lang-dropdown').find('ul').slideUp();
    });
    //lang-dropdown

    //open and close popup
    $(document).on('click', '.open-popup', function () {
        $('.popup-content').removeClass('active');
        $('.popup-wrapper, .popup-content[data-rel="' + $(this).data('rel') + '"]').addClass('active');
        $('html').addClass('overflow-hidden');
        return false;
    });

    $(document).on('click', '.popup-wrapper .button-close, .popup-wrapper .layer-close', function () {
        $('.popup-wrapper, .popup-content').removeClass('active');
        $('html').removeClass('overflow-hidden');
        setTimeout(function () {
            $('.ajax-popup').remove();
        }, 300);
        return false;
    });

    //mouse-icon scrolltop
    var blockHeight = 0,
        myBlockOffset = 0;
    $('.mouse-icon').on('click', function () {
        blockHeight = $(this).closest('header').outerHeight();
        myBlockOffset = $(this).closest('header').offset().top;
        $('html, body').animate({
            scrollTop: blockHeight + myBlockOffset
        }, 666);
    });
    //mouse-icon scrolltop

    $('.nav-toggle').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('header').find('.head-line').toggleClass('active');
        $(this).closest('header').find('.head-line').find('.head-line-cn').toggleClass('active');
    });


    //AnimatedNumber 
    var stopValue = 0;
        $(window).on('scroll', function () {
            var scrollTop = $(window).scrollTop();
            var elementOffset = $('.counter-section').offset().top;
            var currentElementOffset = (elementOffset - scrollTop);
            if (stopValue == 0 && currentElementOffset < 700) {
                $('.count').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });  
                stopValue = 1;
            };
        });
  
    //AnimatedNumber   



});