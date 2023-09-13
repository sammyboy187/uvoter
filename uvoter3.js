// ==UserScript==
// @name     uvoter
// @version  1
// @grant    none
// @include  https://www.mikrocontroller.net/topic/*
// ==/UserScript==

var upvotelist = ["sammyboy387",]; //Hier Benutzernamen eintragen die immer raufgevotet werden sollen
var downvotelist = ["stefanus", "alecxs"]; //Hier Benutzernamen eintragen die immer runtergevotet werden sollen
var upvoteoffset = 735066; //Beitrag minus die aktuelle id der als Ausgleich upgevotet werden soll

function getHTTP(csrf, url) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", url, true ); // false for synchronous request
  xmlHttp.setRequestHeader("X-CSRF-Token", csrf);
  xmlHttp.setRequestHeader("Accept", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01");
	xmlHttp.send( null );
}

window.addEventListener('load', function() { //Auf Seite warten
	var posts = document.getElementsByClassName("post"); //Alle Posts extrahieren
	csrf = document.getElementsByName("csrf-token")[0].getAttribute("content");
  
  Array.prototype.forEach.call(posts, function(post) {
    var name = post.getElementsByClassName("author")[0].getElementsByTagName("a"); //Benutzername extrahieren
    if (name.length == 0) { //Pruefen ob Benutzername gefunden wurde
      return;
    }
    name = name[0].text
    
    var id = post.id; //Postid extrahieren

    if (downvotelist.includes(name) || upvotelist.includes(name)) { //Pruefen ob benutzer auf einer der Listen steht
      var up = post.getElementsByClassName("up")[0];
      var down = post.getElementsByClassName("down")[0];
      
      if (up.classList.contains("active") || down.classList.contains("active")) { //Pruefen ob schon upgestimmt wurde
        //alert("shon upgestimmt");
      } else if (upvotelist.includes(name)) {
				getHTTP(csrf, "https://www.mikrocontroller.net/topic/vote_post?id=" + id + "&rating=1");
        
        up.classList.add("active");
      } else if (downvotelist.includes(name)) {
        upvoteid = id - upvoteoffset;
        getHTTP(csrf, "https://www.mikrocontroller.net/topic/vote_post?id=" + upvoteid + "&rating=1");
				getHTTP(csrf, "https://www.mikrocontroller.net/topic/vote_post?id=" + id + "&rating=-1");
        
        down.classList.add("active");
      }
    }
  });
}, false);
