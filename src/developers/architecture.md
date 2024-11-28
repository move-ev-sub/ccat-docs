# Architektur

## Warum kein Monorepo mit Microservices?

Ziel sollte es erst einmal sein, ein MVP zu entwickeln. Da Front- und Backend voraussichtlich linear skaliert werden und die Anwendung auf kleine (bis mittlere) Anwendungsfälle ausgelegt ist (ca. 500 - 1000 Bewerbungen), würde ein Monorepo mit Microservices das Projekt unnötig verkomplizieren. Dazu müssten alle Applikationen separat voneinander gehostet werden, was höheren Kosten entsprechen würde.

Sollten sich die Anwendungsfälle des Tools in Zukunft vergrößern, können Back- und Frontend noch immer voneinander getrennt werden.
