# Branching Modell

Im CCAT Repository verwenden wir eine modifizierte Version des [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). Anstatt 5 Branches zu verwenden, benutzen wir nur 3 Branches: `master`, `development` und `feature`.

## Branches

### `master`

Der `master`-Branch ist der Hauptzweig des Projekts. Er enthält die letzte stabile Version des Projekts. Dieser Zweig ist geschützt und kann nur durch das Zusammenführen eines Pull Requests (vorzugsweise vom `development`-Branch) aktualisiert werden. Dies ist der Branch von dem aus wir Releases erstellen.

### `development`

Der `development`-Branch ist der Hauptzweig für die Entwicklung. Er enthält die neuesten Änderungen und Funktionen, an denen gearbeitet wird. 

### `feat/**`

Featurebranches werden verwendet, um neue Funktionen für die kommende oder eine weit entfernte zukünftige Version zu entwickeln. Die Namenskonvention für Featurebranches ist `feat/<short-description>`.

Featurebranches werden aus dem `development`-Branch erstellt und wieder mit dem `development`-Branch zusammengeführt.

Sie sollten gelöscht werden, nachdem das Feature in den `development`-Branch zusammengeführt wurde.

Featurebranches werden erstellt, indem ein neuer Branch für ein Issue im Issue-Tracker erstellt wird. Jedes Issue erhält seinen eigenen Branch. Nachdem das Issue gelöst wurde, wird der Branch wieder mit dem `development`-Branch zusammengeführt und das Issue wird geschlossen.