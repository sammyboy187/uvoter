// ==UserScript==
// @name     uvoter
// @version  1
// @grant    none
// ==/UserScript==

function getHTTP(url) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", url, true ); // false for synchronous request
	xmlHttp.send( null );
}

var els = document.getElementsByClassName("up");

Array.prototype.forEach.call(els, function(el) {
	if (!el.classList.contains("active")) {
		el.classList.add("active");
		getHTTP(el.href);
	}
});
