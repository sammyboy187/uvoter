# uvoter
Ein tool um Downvotekontingent auf mikrocontroller.net zu bekommen. Das passiert indem (alte) Beiträge hochgevotet werden.

## uvoter.py
Das Tool wird mit python3 uvoter.py gestartet. Vorher bitte im Browser auf mikrocontroller.net anmelden und dann mit F12 die Entwicklerkonsole öffnen. Dort unter Speicher und Cookies den Cookie _forum_session auslesen und ins Skript einfügen. Dann bei Bedarf noch dem Start und Endpost anpassen. Profitipp: Kleinere IDs bringen ältere Beiträge.

## uvoter.js
Das Tool ist ganz ähnlich zu uvoter.py. Es ist aber für Greasemonkey bzw. Tampermonkey gedacht. Das sind Addons für Firefox und Chrome. Damit wird eine Webseite beim Laden verändert. Das Skript liest alle Beiträge auf einer Seite aus die noch nicht upgevotet wurden aus und sendet den upvote Befehl.
