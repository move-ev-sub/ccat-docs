# Erste Schritte

Dieser Leitfaden zeigt dir, wie du mit der Entwicklung des CCAT-Projekts beginnen kannst. Er enthält Anweisungen zur Einrichtung deiner Entwicklungsumgebung, zum Starten des Projekts und zum Einrichten der Datenbank.

## Voraussetzungen

Bevor du mit der Arbeit an dem Projekt beginnen kannst, müsst du die folgenden Tools auf deinem Rechner installieren:

- [Node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) (oder [Docker Desktop](https://www.docker.com/products/docker-desktop))

### Optionale Tools

Diese Tools sind für die Arbeit an dem Projekt nicht erforderlich, werden aber empfohlen, da sie die Entwicklung erleichtern:

- [Visual Studio Code](https://code.visualstudio.com/) - Bevorzugte IDE für das Projekt
- [Orbstack](https://orbstack.com/) - Eine Alternative zu Docker Desktop, die leichter und schneller ist *(macOS)*
- [Github Desktop](https://desktop.github.com/) - Wenn du mit der Kommandozeile nicht vertraut bist, könnte dies eine gute Alternative sein, um mit Git zu beginnen. Es wird jedoch empfohlen, die Kommandozeilenschnittstelle zu erlernen, da wir im Projekt Git-Hooks verwenden, die manchmal die Kommandozeile erfordern.
- [nvm](https://github.com/nvm-sh/nvm) - Node Version Manager, um mehrere Node.js-Versionen auf deinem Rechner zu verwalten

## Einrichtung

Um mit dem Projekt zu beginnen, müsst du das Repository auf deinen Rechner klonen. Führe dazu den folgenden Befehl in deinem Terminal aus:

```bash
git clone https://github.com/move-ev-sub/ccat.git
```

Um das Repository zu klonen, müsst du ein Mitglied der Organisation auf Github sein. Wenn du kein Mitglied bist, kannst du bei den Projektbetreuern Zugang beantragen.

Nachdem du das Repository geklont hast, navigieren Sie in das Projektverzeichnis:

```bash
cd ccat
```

## Entwicklungsumgebung vorbereiten

Für eine effiziente Entwicklungserfahrung empfehlen wir die Verwendung von Visual Studio Code. Wenn du Visual Studio Code verwendest, wird empfohlen die folgenden Erweiterungen zu installieren:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Code Formatter
- [Tailwind IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - IntelliSense für Tailwind CSS

### Optional: `.vscode` Einstellungen

Um deinen Entwicklungsworkflow zu optimieren, empfehlen wir folgende VS Code Einstellungen zu verwenden. Erstelle dazu eine Datei `.vscode/settings.json`:

::: code-group

```json [.vscode/settings.json]
{
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.organizeImports": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "tailwindCSS.experimental.classRegex": [
    [
      "cva\\(([^)]*)\\)",
      "[\"'`]([^\"'`]*).*?[\"'`]"
    ],
    [
      "cx\\(([^)]*)\\)",
      "(?:'|\"|`)([^']*)(?:'|\"|`)"
    ]
  ]
}
```

:::

## pnpm installieren

Für dieses Projekt nutzen wir den Package Manager `pnpm`. Um `pnpm` zu installieren, folge den aktuellen Installationsanweisungen auf der [pnpm-Website](https://pnpm.io/installation).

> [!warning] Achtung
> Führe **keine** Befehele mit `npm` oder `yarn` aus, da das Projekt `pnpm` verwendet. Dies könnte zu Problemen führen.

## Einrichten von Node

Dieses Projekt definiert die zu verwendende Node.js-Version in der Datei `.nvmrc`. Um die richtige Version von Node.js zu verwenden, wird der folgende Befehl ausgeführt:

```bash
nvm use
```

Die Verwendung von `nvm` ist optional, aber empfohlen. Solltest du `nvm` nicht nutzen, kannst du die richtige Version von Node.js manuell installieren. Die erforderliche Version von Node.js ist in der Datei `.nvmrc` definiert, sowie im Feld `engines` in der Datei `package.json`.

## Installation

Um die Abhängigkeiten des Projekts zu installieren, wird der folgende Befehl ausgeführt:

```bash
pnpm install
```

Dadurch werden alle Abhängigkeiten des Projekts installiert.

## Vorbereiten der Umgebung

Um Umgebungsvariablen zu speichern, die nicht für die Öffentlichkeit zugänglich sein dürfen, verwendet das Projekt eine `.env`-Datei. `.env`-Dateien werden verwendet, um sensible Informationen wie API-Schlüssel, Datenbank-URLs usw. zu speichern. Sie werden nicht in das GitHub Repository übertragen und sind nur für den Server zugänglich, auf dem das Projekt läuft.

Bevor du mit der Arbeit an dem Projekt beginnen kannst, muss eine solche Datei eingerichtet werden. Dazu muss eine `.env`-Datei im Stammverzeichnis des Projekts erstellt werden. Kopiere den Inhalt der Datei `.env.example` in eine neue Datei namens `.env`. 

::: code-group

```bash [.env.example]
# This is an example .env file. You must replace the values with your own values

# Supabase
NEXT_PUBLIC_SUPABASE_URL="http://127.0.0.1:54321"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"
DATABASE_URL="postgresql://postgres:password@localhost:5432"
SERVICE_ROLE_KEY="YOUR_SERVICE_ROLE_KEY"

# Prisma
DIRECT_URL="YOUR_DATABASE_URL"

# Sentry
SENTRY_AUTH_TOKEN="YOUR_SENTRY_AUTH_TOKEN"
```

:::

## Starten der Datenbank

Bevor der Entwicklungsserver gestartet werden kann, muss die Datenbank gestartet werden. Das Projekt verwendet eine Postgres-Datenbank (zusammen mit Supabase), die mit Docker gestartet wird. Um die Datenbank zu starten, führe den folgenden Befehl aus:

```bash
pnpm db:start
```

Dazu muss Docker Rechner installiert sein. Wenn du Docker Desktop verwendest, stelle sicher, dass die App läuft, bevor du die Datenbank startest. Nachdem die Datenbank gestartet wurde, ersetzen die Werte in der `.env`-Datei durch die korrekten Werte aus der Terminalausgabe.

### `.env`-Datei aktualisieren

Nach dem Starten der Datenbank solltest eine Ausgabe ähnlich der folgenden erhalten:

::: code-group

```bash [Terminal]{3,6,10,11}
Started supabase local development setup.

         "API URL": http://127.0.0.1:54321
     "GraphQL URL": http://127.0.0.1:54321/graphql/v1
  "S3 Storage URL": http://127.0.0.1:54321/storage/v1/s3
          "DB URL": postgresql://postgres:postgres@127.0.0.1:54322/postgres
      "Studio URL": http://127.0.0.1:54323
    "Inbucket URL": http://127.0.0.1:54324
      "JWT secret": super-secret-jwt-token-with-at-least-32-characters-long
        "anon key": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
"service_role key": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU
   "S3 Access Key": 625729a08b95bf1b7ff351a663f3a23c
   "S3 Secret Key": 850181e4652dd023b7a98c58ae0d2d34bd487ee0cc3254aed6eda37307425907
       "S3 Region": local
```

:::

Kopiere nun die Werte aus den makrierten Zeilen in die `.env`-Datei.

> [!warning] Achtung
> Um von Prismas Pooling-Funktion gebrauch machen zu können, benötigt Prisma sowohl eine `DATABASE_URL` als auch eine `DIRECT_URL`. Die `DATABASE_URL` wird für Nutzer-Interaktionen verwendet, während die `DIRECT_URL` für direkte Zugriffe auf die Datenbank (Migrations, Seeds, etc.) verwendet wird.
>
> Im local development sind die Werte für `DATABASE_URL` und `DIRECT_URL` identisch, da die lokale supabase-Instanz keine Pooling-Funktion hat.

### Migration der Datenbank

Nachdem die Datenbank gestartet wurde, muss die Datenbank migriert werden. Dadurch werden die erforderlichen Tabellen und Spalten in der Datenbank erstellt. Um die Datenbank zu migrieren, wird der folgende Befehl ausgeführt:

::: code-group

```bash
pnpm db:migrate
```

:::

Dies wird die Migrationen ausführen und die notwendigen Tabellen in der Datenbank erstellen.

### Datenbankseed

Um die Datenbank mit Daten zu füllen, wird der folgende Befehl ausgeführt:

```bash
pnpm db:seed
```

## Ausführen des Projekts

Um den Entwicklungsserver zu starten, wird der folgende Befehl ausgeführt:

```bash
pnpm dev
```
