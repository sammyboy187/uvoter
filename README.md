# µvoter
Eine Skriptsammlung rund um mikrocontroller.net

## oldposts.js
Ein greasemonkey skript das alte Threads rot hervorhebt. Dabei ist einstellbar ab wie vielen Tagen zwischen dem ersten und letzten Post der Thread als alt angesehen werden soll.

## uvoter[0-9]*.[py|js]
Ein tool um Downvotekontingent auf mikrocontroller.net zu bekommen. Das passiert indem (alte) Beiträge hochgevotet werden.

### uvoter.py
Das Tool wird mit python3 uvoter.py gestartet. Vorher bitte im Browser auf mikrocontroller.net anmelden und dann mit F12 die Entwicklerkonsole öffnen. Dort unter Speicher und Cookies den Cookie _forum_session auslesen und ins Skript einfügen. Dann bei Bedarf noch dem Start und Endpost anpassen. Profitipp: Kleinere IDs bringen ältere Beiträge.

### uvoter.js
Das Tool ist ganz ähnlich zu uvoter.py. Es ist aber für Greasemonkey bzw. Tampermonkey gedacht. Das sind Addons für Firefox und Chrome. Damit wird eine Webseite beim Laden verändert. Das Skript liest alle Beiträge auf einer Seite aus die noch nicht upgevotet wurden aus und sendet den upvote Befehl.

Der upvote Befehl wird nur gesendet wenn man noch nicht abgestimmt hat. Das heist wenn man schon ein Upvote gegeben hat wird nicht noch eins gesendet und wenn man schon ein Downvote gegeben hat wird das auch nicht überschrieben.

### uvoter2.js
Ganz ähnlich zu uvoter.js. Aber es votet alle Posts auf einer Seite down wenn man noch nicht selbst abgestimmt hat. Dafür gibt es einem alten Beitrag mit einer einstellbaren Differenz einen upvote um das Kontingent nicht zu erschöpfen.

### uvoter3.js
Auch ein Greasemonkey skript. Es hat am Anfang die Variablen upvotelist und downvotelist. Da kann man benutzernamen von benutzern eintragen die mann immer automatisch rauf bzw. runtervoten möchte. Das Skript macht das dann von alleine. Alle anderen Benutzer bleuben unangetastet. Wenn man runtervotet wird automatisch ein alter Post raufgevotet um das downvotekonto nicht zu überziehen.
