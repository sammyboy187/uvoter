// ==UserScript==
// @name     uvoter
// @version  1
// @grant    none
// @include  https://www.mikrocontroller.net/topic/*
// ==/UserScript==

function getHTTP(url) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", url, true ); // false for synchronous request
	xmlHttp.send( null );
}

window.addEventListener('load', function() {
	var els = document.getElementsByClassName("up");

  Array.prototype.forEach.call(els, function(el) {
    
    var parent = el.parentElement;
    down = parent.getElementsByClassName("down")[0];
    
    if (down.classList.contains("active")) {
    } else if (!el.classList.contains("active")) {
      el.classList.add("active");
      getHTTP(el.href);
    }
  });
}, false);
