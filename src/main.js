// $(document).ready(function () {
//   skrollr.init({
//     smoothScrolling: true
//   });
// });
// $(document).ready(function() {
// // build the tween object
// var tween = $('.lauer0').KUTE('fromTo',

//  { top: 200 }, { top: 0 }, 
// { left: 200 }, { left: 0 }, 
//    {repeat: 1,  easing: 'easingCubicOut'} );

// // start animating
// $(tween).KUTE('start');

// });

( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }

    });
    
} )( jQuery );

// function() {
// 	return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
// }