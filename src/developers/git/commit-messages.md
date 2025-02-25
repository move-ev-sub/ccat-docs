# Commit Messages

Commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

## Commit Message Format

The commit message should be structured as follows:

```text
<type>[optional scope]: <description>
```

### Type
- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `chore`: Other changes that don't modify src or test files
- `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `docs`: Documentation only changes
- `feat`: A new feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `revert`: Reverts a previous commit
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `test`: Adding missing tests or correcting existing tests
- `translation`: Translation updates
- `security`: Security updates

### Scope

The scope should be the name of the module or component that the commit message affects. The scope is optional.

### Description

The description should be a short description of the change. Use the imperative, present tense: "change" not "changed" nor "changes". The first letter should be capitalized. No dot (.) at the end.

### Examples

- `"feat: Add the ability to delete a user"`
- `"fix: Correct the user's name not being displayed"`
- `"docs: Update the README with the new features"`
- `"docs(readme): Update the README with the new features"`
- `"style(css): Format the CSS file"`

## Adding a message to a commit

To add a message to a commit, use the `-m` flag with the `git commit` command:

```bash
git commit -m "feat: Add the ability to delete a user"
```
