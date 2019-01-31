"use strict";

function main(){
  var lastScrollTop = 0;
  var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';
  $(document).scroll( _.throttle(function() {
    var st = $(this).scrollTop();
    if ( st > lastScrollTop )
    {
      runAnimation("#float-header", "slideOutUp faster");
    }
    else
    {
      runAnimation("#float-header", "slideInDown faster");
    }
    lastScrollTop = st;
  }, 500
));

  function runAnimation(element, animationName) {
      $(element).removeClass("animated slideInDown slideOutUp");
      $(element).addClass("animated " +animationName).one(animationEnd, function() {
        animationRunning = false;
      });
  }

}

$(document).ready(main);
