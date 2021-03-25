function addEvent(elem, type, eventHandle) {
    if (elem == null || typeof(elem) == 'undefined') return;
    if ( elem.addEventListener ) {
        elem.addEventListener( type, eventHandle, false );
    } else if ( elem.attachEvent ) {
        elem.attachEvent( "on" + type, eventHandle );
    } else {
        elem["on"+type]=eventHandle;
    }
}

function getViewPortHeight(){
    var viewportheight;            
     if (typeof window.innerHeight != 'undefined')
     {
          viewportheight = window.innerHeight
     }
    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
     else if (typeof document.documentElement != 'undefined'
         && typeof document.documentElement.clientHeight !=
         'undefined' && document.documentElement.clientHeight != 0)
     {
           viewportheight = document.documentElement.clientHeight
     }
     // older versions of IE
     else
     {
           viewportheight = document.getElementsByTagName('body')[0].clientHeight
     }
    return viewportheight;
}

function getViewPortWidth(){
    var viewportwidth;            
     if (typeof window.innerWidth != 'undefined')
     {
          viewportwidth = window.innerWidth
     }
    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
     else if (typeof document.documentElement != 'undefined'
         && typeof document.documentElement.clientWidth !=
         'undefined' && document.documentElement.clientWidth != 0)
     {
           viewportwidth = document.documentElement.clientWidth
     }
     // older versions of IE
     else
     {
           viewportwidth = document.getElementsByTagName('body')[0].clientWidth
     }
    return viewportwidth;
}

function setFixedFullSizersHeight() {
    var elems = getElementsByClass('fixed-full-sizer');
    for(i in elems)
    {
        if(isMobileWidth()){
            elems[i].style.height = "300px";
        }
        else{
            elems[i].style.height = getViewPortHeight() + "px";
        }
        
    }
}

function getElementsByClass(className){
    var allElements = document.getElementsByTagName('*'), i;
    var classElements = [];
    for(i in allElements)
    {
        if((" " + allElements[i].className + " ").indexOf(" " + className + " ") > -1)
        {
            classElements.push(allElements[i]);
        }
    }
    return classElements;
}

function getElementByClass(className){
    return getElementsByClass(className)[0];
}

function isMobileWidth(){
    return getViewPortWidth() <= 768;
}



// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// } 