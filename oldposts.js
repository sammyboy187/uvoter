// ==UserScript==
// @name     uc.net oldposts
// @version  1
// @grant    none
// @include  https://www.mikrocontroller.net/forum/*
// ==/UserScript==

max_age = 365; //Maximale Zeitspanne zwischen ersten und letzten post in Tagen

max_age = 60*60*24*1000*max_age; //Umrechnen in Sekunden

window.onload = function() {
  var style = document.createElement('style'); //Stylesheet injecten
  document.head.appendChild(style);
  style.sheet.insertRule('.old-topic a:link{ color:red;}'); //hier ggf. eigene Styles setzen
  style.sheet.insertRule('.old-topic a:active{ color:red;}');
  style.sheet.insertRule('.old-topic a:visited{ color:red;}');


  topics = document.getElementsByClassName("topic"); //Alle topics auslesen

  Array.prototype.forEach.call(topics, function(topic) { //Jedes topic durch laufen
    created_at = topic.getAttribute("data-created-at"); //created und last post timestampts ruassuchen
    last_post_created_at = topic.getAttribute("data-last-post-created-at");
    if (last_post_created_at - created_at > max_age) { //gucken ob es passt
      subject = topic.getElementsByClassName("subject")[0];
      subject.classList.add("old-topic"); //css class hinzufügen bei bedarf
    }
  });
}
