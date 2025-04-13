# Datenbank

Eine kurze Einleitung zur Datenbank und wie sie in das Projekt integriert ist.

## Datenbankmodell

Das Datenbankmodell ist in der Datei `schema.prisma` definiert. Es ist ein modernes Datenbank-Toolkit, das die Datenbankverwaltung und den Zugriff auf die Datenbank vereinfacht. Prisma generiert eine Datenbank-API welche anschließend in der Anwendung verwendet werden kann.

## Datenbankzugriff

Der Zugriff auf die Datenbank erfolgt über die ORM-Bibliothek [Prisma](https://www.prisma.io/). Prisma ist ein modernes Datenbank-Toolkit, das die Datenbankverwaltung und den Zugriff auf die Datenbank vereinfacht. Prisma generiert eine Datenbank-API welche anschließend in der Anwendung verwendet werden kann.

Um die Datenbank-API zu generieren, wird der folgende Befehl ausgeführt:

```bash
pnpm prisma generate
```

## Datenbankmigrationen

Prisma unterstützt auch Datenbankmigrationen. Datenbankmigrationen sind Änderungen am Datenbankschema, die in einer Datenbank durchgeführt werden. Prisma generiert Migrationen automatisch, wenn das Datenbankschema geändert wird. Um eine Migration zu erstellen, wird der folgende Befehl ausgeführt:

```bash
pnpm prisma migrate dev --name <name>
```