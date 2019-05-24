var mn = $("body > header");
var mns = "scrolled";
var hdr = mn.height();

$(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
        mn.addClass(mns);
    } else {
        mn.removeClass(mns);
    }
});

/* popup promo */
    if (document.cookie.replace(/(?:(?:^|.*;\s*)taszPopupDismissed\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
        $('.popupPromo').show();
        $('.popupPromo .close').click(function(event) {
            event.preventDefault();
            document.cookie = "taszPopupDismissed=true; max-age=604800";
            $('.popupPromo').remove();
        });
        $('.popupPromo .button').click(function(event) {
            document.cookie = "taszPopupDismissed=true; max-age=604800";
        });
    }


/* cookie consent */
window.addEventListener("load", function(){
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#eb6c44",
                "text": "#ffffff"
            },
            "button": {
                "background": "#f5d948"
            }
        },
        "content": {
            "message": "Ez az oldal sütiket használ.",
            "dismiss": "Rendben",
            "link": "Olvasd el az adatvédelmi irányelveinket.",
            "href": "https://tasz.hu/adatvedelmi-tajekoztato-a-tasz-hu-hasznalatahoz"
        }
    })});