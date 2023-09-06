// ==UserScript==
// @name     uvoter
// @version  1
// @grant    none
// @include  https://www.mikrocontroller.net/topic/*
// ==/UserScript==

function getHTTP(url) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", url, false ); // false for synchronous request
	xmlHttp.send( null );
}

window.addEventListener('load', function() {
	var els = document.getElementsByClassName("up");

  Array.prototype.forEach.call(els, function(el) {
    
    url = new URLSearchParams(el.href ? el.href.split('?')[1] : window.location.search.slice(1));
    id = parseInt(url.get("id"));
    mirror_id = id - 700000;
    
  
    var parent = el.parentElement;
    down = parent.getElementsByClassName("down")[0];
    
    if (down.classList.contains("active")) {
    } else if (!el.classList.contains("active")) {
      down.classList.add("active");
      getHTTP("https://www.mikrocontroller.net/topic/vote_post?id=" + mirror_id + "&rating=1");
    	getHTTP("https://www.mikrocontroller.net/topic/vote_post?id=" + id + "&rating=-1");
    }
  });
}, false);
