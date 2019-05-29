let removeOpenBp = 960;

function removeOpenClass() {
    if ($(document).width() >= removeOpenBp) {
        $('.peticio-body').removeClass("open");
        $('.legal-body').removeClass("open");
        // $('body').removeClass("blacko--on");
    }
}

$(function () {
    // removeOpenClass();
    console.log('works');
    $(window).resize(function () {
        removeOpenClass();
    });
    $('.peticio-show').click(function(){
        $('.peticio-body').toggleClass('open');
    });
    $('.legal-show').click(function(){
        $('.legal-body').toggleClass('open');
    });

});