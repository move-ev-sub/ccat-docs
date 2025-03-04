# Versionierung

Für die Versionierung des CCAT-Projekts verwenden wir eine angepasste Variante von [CalVer](https://calver.org/) (Calendar Versioning). Das bedeutet, dass die Versionsnummer ein Datum mit einem Modifikator ist. Die Versionsnummer wird bei jeder Veröffentlichung aktualisiert.

Wir verwenden das folgende Versionierungsmuster:

```text
v<YY>.<MM>.<PATCH>[-<STATUS>]
```

- `v` - Alle Versionen starten mit einem führendem `v`, um anzugeben, dass dies der Versionsname ist.
- `<YY>` - Jahr der Veröffentlichung (z.B. `25` = 2025)
- `<MM>` - Monat der Veröffentlichung (z.B. `07` = Juli)
- `<PATCH>` - Aufsteigender Versionspatch (z.B. `1`, `2`, ... `741`)
- `[-<STATUS>]` - Optionaler Versionsstatus. Wir verwenden die folgenden Status:
    - `dev` - Entwicklungsversion, nicht für die Produktion bestimmt
    - `beta` - Frühes Stadium der Veröffentlichung, nicht für die Produktion vorgesehen
    - `prod` - Produktionsreife Freigabe. Releases ohne Status sind automatisch ein Produktionsrelease

**Beispiele:**
- `v25.02.26-dev`: 26. Release für Februar 2025 (Entwicklungsrelease)
- `v24.07.2-beta`: 2. Release für Juli 2024 (Beta-Version)
- `v26.01.17`: 17. Release für Januar 2026 (Produktionsfreigabe)