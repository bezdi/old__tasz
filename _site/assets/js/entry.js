$(document).ready(function () {
    $('div.collapsible_section').each(function () {
        var section = $(this);
        // var content = section.find('>h2~*');
        // content.hide();
        section.removeClass('open');
        section.addClass('closed');
        section.find('>h2').click(function () {
            section.toggleClass('open closed');
            section.find('.collapsible_inner').slideToggle(300, "linear");
        });
    });
});


/* slideshow */
// https://github.com/pie6k/jquery.initialize
$(document).ready(function () {
    $('.slideshow').each(function () {
        var slideCount = $('.slideshow__frame', this).length;
        $(this).data('currentSlide', 1);
        $(this).data('slideCount', slideCount);

        $('.totalSlides', this).text(slideCount);

        if (slideCount > 1) {
            $('.prev', this).removeClass('disabled');
        }

        $('.prev', this).click(function (event) {
            event.preventDefault();
            move_slide(this, -1);
        });

        $('.next', this).click(function (event) {
            event.preventDefault();
            move_slide(this, 1);
        });

        $(this).on('swiperight', function (event) {
            event.preventDefault();
            move_slide(this, -1);
        });

        $(this).on('swipeleft', function (event) {
            event.preventDefault();
            move_slide(this, 1);
        });

    })
});


function move_slide(button, direction) {
    var slideshow = $(button).closest('.slideshow');

    var currentSlide = slideshow.data('currentSlide');
    var slideCount = slideshow.data('slideCount');
    var container = $('.slideshow__slider', slideshow);
    var newSlide = currentSlide + direction;

    if (newSlide <= 1) {
        newSlide = 1;
        $('.prev', slideshow).addClass('disabled');
    } else {
        $('.prev', slideshow).removeClass('disabled');
    }

    if (newSlide >= slideCount) {
        newSlide = slideCount;
        $('.next', slideshow).addClass('disabled');
    } else {
        $('.next', slideshow).removeClass('disabled');
    }

    $('.currentSlide', slideshow).text(newSlide);

    slideshow.data('currentSlide', newSlide);
    container.css('left', (newSlide - 1) * -100 + '%');
}


/**
 * jquery.detectSwipe v2.1.3
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch, iPad and Android
 * http://github.com/marcandre/detect_swipe
 * Based on touchwipe by Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    $.detectSwipe = {
        version: '2.1.2',
        enabled: 'ontouchstart' in document.documentElement,
        preventDefault: true,
        threshold: 20
    };

    var startX,
        startY,
        isMoving = false;

    function onTouchEnd() {
        this.removeEventListener('touchmove', onTouchMove);
        this.removeEventListener('touchend', onTouchEnd);
        isMoving = false;
    }

    function onTouchMove(e) {
        if ($.detectSwipe.preventDefault) {
            e.preventDefault();
        }
        if (isMoving) {
            var x = e.touches[0].pageX;
            var y = e.touches[0].pageY;
            var dx = startX - x;
            var dy = startY - y;
            var dir;
            var ratio = window.devicePixelRatio || 1;
            if (Math.abs(dx) * ratio >= $.detectSwipe.threshold) {
                dir = dx > 0 ? 'left' : 'right'
            }
            else if (Math.abs(dy) * ratio >= $.detectSwipe.threshold) {
                dir = dy > 0 ? 'up' : 'down'
            }
            if (dir) {
                onTouchEnd.call(this);
                $(this).trigger('swipe', dir).trigger('swipe' + dir);
            }
        }
    }

    function onTouchStart(e) {
        if (e.touches.length == 1) {
            startX = e.touches[0].pageX;
            startY = e.touches[0].pageY;
            isMoving = true;
            this.addEventListener('touchmove', onTouchMove, false);
            this.addEventListener('touchend', onTouchEnd, false);
        }
    }

    function setup() {
        this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
    }

    function teardown() {
        this.removeEventListener('touchstart', onTouchStart);
    }

    $.event.special.swipe = {setup: setup};

    $.each(['left', 'up', 'down', 'right'], function () {
        $.event.special['swipe' + this] = {
            setup: function () {
                $(this).on('swipe', $.noop);
            }
        };
    });
}));
