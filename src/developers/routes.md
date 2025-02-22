# Routes

This is an overview of the routes in the CCAT project. Learn more about how routing works in Next.js [here](https://nextjs.org/docs/app/building-your-application/routing).


- `/` - Nur Weiterleitung an die entsprechende Route
- `/auth/login` - Login
- `/auth/register` - Registrierung
- `/admin` - Admin Bereich
	- `/admin` - Auswahl des Events (Liste mit aktiven und archivierten Veranstaltungen)
	- `/admin/new`
		- `/admin/new/event` - Neue Veranstaltung erstellen
		- `/admin/new/sub-event` - Neue Veranstaltung erstellen
		- `/admin/new/company` - Neue Veranstaltung erstellen
	- `/admin/settings`- Allgemeine Einstellungen, die sich auf das Tool selbst beziehen und nicht auf eine bestimmte Veranstaltung
		- `/admin/settings` - Allgemeine Einstellungen
		- `/admin/settings/companies` - Unternehmenseinstellungen (Unternehmen bearbeiten, erstellen, löschen)
		- `/admin/settings/users` - Nutzereinstellungen (Nutzer bearbeiten, erstellen, löschen)
	- `/admin/event/[event-id]` - Übersichtsseite des Events
		- `/admin/event/[event-id]/applications` - Liste mit Bewerbungen
			- `/admin/event/[event-id]/applications/[application-id]` - Ansicht der Bewerbung mit allen Unterbewerbungen und weiteren Informationen
		- `/admin/event/[event-id]/subevents` - Liste mit Unterveranstaltungen
			- `/admin/event/[event-id]/subevents/[sub-event-id]` - Ansicht der Unterveranstaltung mit allen Unterbewerbungen und weiteren Informationen (Optional)
		- `/admin/event/[event-id]/settings`
			- `/admin/event/[event-id]/settings` - Allgemeine Einstellungen (Name, Beschreibung, etc.) + Phasen des Events
			- `/admin/event/[event-id]/slots` - Zeitslots des Events (In welchen Slots die Veranstaltungen stattfinden: Erstellen, Löschen, Bearbeiten)
			- `/admin/event/[event-id]/settings/phases` - Phasen des Events
			- `/admin/event/[event-id]/settings/sub-events` - Archivieren, Löschen und Bearbeiten von Unterveranstaltung
			- `/admin/event/[event-id]/settings/security` - Archivieren, Löschen und Bearbeiten von Veranstaltung
- `/company` - Unternehmensbereich mit Liste aller aktiven Veranstaltungen in denen das Unternehmen eine Unterveranstaltung besitzt
	- `/company/event/[event-id]` - Liste mit den **eigenen** Unterveranstaltungen für das gegebene Event
	- `/company/event/[event-id]/[sub-event-id]` - Liste mit allen Bewerbungen + CSV Export + Filter
		- `/company/event/[event-id]/[sub-event-id]/[application-id]` - Ansicht der Unterbewerbung mit Anschreiben und Lebenslauf + Annehmen, Ablehnen, Priorisieren
- `/user` - Nutzerbereich + Auswahl der aktiven Veranstaltungen
	- `/user/[event-id]` - Einsicht/Bearbeitung der eigenen Bewerbung für dieses Event

