// When the user clicks on the button, scroll to the top of the document

"use strict";

function main() {

	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
	    document.getElementById("btn").style.display = "block";
	  } else {
	    document.getElementById("btn").style.display = "none";
	  }
	}


	document.getElementById("btn").onclick = function() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	};

}

$(document).ready(main);
