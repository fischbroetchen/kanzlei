//======================================================================
//	OnLoad-Event: wenn die Seite geladen ist
//======================================================================
$(document).ready(function() {
    var id = getUrlParam('slide');
    if(id != null){
        var target = $('#'+id);
        setTimeout(function() {
            slideToTarget(target);
        }, 500);
    }

    //======================================================================
    //	JQUERY Event Listeners
    //======================================================================
    $(function() {
        $('a[href*=#]:not([href=#])').click(function(e) {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                slideToTarget(target);
            }
            e.preventDefault();
			return false;
        });
    });


    $(function(){
        $(window).scroll(function(){
            if ($('.fixed-full-sizer')[0]){
                var fixedFullSizerButtonTop = $('.fixed-full-sizer-button').offset().top;
                var nextPagePartsTop = $('.fixed-full-sizer').next('.page-part').offset().top;
                if(!isMobileWidth()){
                    if(nextPagePartsTop <= fixedFullSizerButtonTop){
                        if(!$('.fixed-full-sizer-button').hasClass('isHidden')){
                            $('.fixed-full-sizer-button').addClass('isHidden');
                        }
                    }
                    else{                                
                        if($('.fixed-full-sizer-button').hasClass('isHidden')){
                            $('.fixed-full-sizer-button').removeClass('isHidden');
                        }
                    }
                }
            }
        });
    });


    //mobile Navigation ein-/ausblenden
    $('.navigation-mobile-button').click(function() {
        $('.navigation').slideToggle();
    });

    //Navigation je nach Bildschirmbreite ein-/ausblenden
    $(window).resize(function() {
        if(isMobileWidth()){
            $('.navigation').hide();
        } else {
            $('.navigation').show();
        }
    });
});

//URL Parameter auslesen
function getUrlParam(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
        return null;
    } else {
        return results[1] || 0;
    }
}

//Slide to ID Funktion
function slideToTarget(target){
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    var margin = 0;
    var navigation = getElementByClass('navigation-fixed');
    if(navigation != 'undefined' && navigation != null){
        var navigationStyle = navigation.currentStyle || window.getComputedStyle(navigation);
        var margin = parseInt(navigationStyle.height.replace('px', ''));
    }
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top - margin
        }, 1000);
    }
}