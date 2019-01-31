"use strict";

function main() {

	var imgs = ['me', 'me2', 'icon'];
	var img =  document.getElementById('my-pic');

	img.onclick = function() {
		var imgsrc = img.getAttribute('src');
		var e = imgsrc.split('/')[2].split('.')[0];
		var index = imgs.indexOf(e);
		var newIndex = (index + 1) % imgs.length;
		var newSrc = './pictures/' + imgs[newIndex] + '.jpg';
		img.setAttribute('src', newSrc);
	};
}

$(document).ready(main);
