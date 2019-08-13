let hidablesBp = 960;// 0 means no breakpoint

function setHidablesHeight() {
    $('.hidable').each(function(){

        let $wrapper = $(this).children('.hidable-wrapper');

        if ( $(this).hasClass('open') ) {
            $wrapper.css('maxHeight',$wrapper[0].scrollHeight);

        } else if ($(this).data('minheight') > 0) {
            $wrapper.css('maxHeight',$(this).data('minheight')+'px');

        } else {
            $wrapper.css('maxHeight','0');
        }

    });
}

function initHidables() {
    if ($(document).width() >= hidablesBp && hidablesBp > 0) {

        $('.hidable').each(function(){ 
            // $(this).removeClass("open");
            $(this).children('.hidable-wrapper').css('maxHeight','inherit');
        });

    } else {
        setHidablesHeight();
    }
}

$(function () {

    initHidables();

    $(window).resize(function () {
        initHidables();
    });

    $('.hidable').each(function(){
        
        $(this).children('.hidable-toggle').on('click',function() {

            $(this).parent().toggleClass('open');

            setHidablesHeight();

            $('html, body').animate({
                scrollTop: $(this).parent().offset().top
            }, 350);
            
        });
        
    });
    //hidable toggle

    $('.dot').each(function(){
        $(this).on('click',function(){
            if ( $(this).hasClass('active') ) {
                $(this).removeClass('active');
            } else {
                $('.dot.active').removeClass('active');
                $(this).addClass('active');
            }
        });
    });
    //dotgrid

});