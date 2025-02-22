# Versioning

For the CCAT project, we use a custom variant of [CalVer](https://calver.org/) (Calendar Versioning) for versioning. This means that the version number is a date with a modifier. The version number is updated with every release.

We use the following versioning pattern:

```text
v<YY>.<MM>.<PATCH>[-<STATUS>]
```

- `v` - All have a leading `v`to specify that this is the version name
- `<YY>` - Release year (e.g `25` = 2025)
- `<MM>` - Release month (e.g `07` = July)
- `<PATCH>` - Increasing release patch (e.g `1`, `2`, ... `741`)
- `[-<STATUS>]` - Optional release status. We use the following status
    - `dev` - Development release, not intended for production
    - `beta` - Early stage release, not intended for production
    - `prod` - Production ready release. Releases without a status are automatically a production release

**Examples:**
- `v25.02.26-dev`: 26. release for February 2025 (Development release)
- `v24.07.2-beta`: 2. release for July 2024 (Beta release)
- `v26.01.17`: 17. release for January 2026 (Production release)