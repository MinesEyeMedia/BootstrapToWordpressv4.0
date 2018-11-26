// /* == Vanilla JavaScript == */
// alert("hello");

/* == jQuery == */
$(document).ready(function(){
   // Cache the Window Object.
   var $window = $(window);

   // Parallax BG Effect
    $('section[data-type="background"]').each(function() {
        var $bgobj = $(this); // assigning this object.
        $(window).scroll(function() {
            // scroll the bg at var speed
            // the yPos is a negative value because we're scrolling it up.
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            // put together our final bg pos.
            var coords = '50% ' + yPos + 'px';

            // move the bg.
            $bgobj.css({backgroundPosition: coords});
        }); // end window scroll.
    });
});