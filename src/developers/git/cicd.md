# CI/CD

An overview of the CI/CD setup for the project.

## GitHub Actions

### Validate PR

The `validate-pr.yml` workflow is triggered on every pull request targeting the `development` branch. It runs the following steps:

1. Install pnpm and setup the node environment
2. Install dependencies
3. Run the formattingm, linting and testing scripts

This workflow is used to ensure that the code in the pull request is formatted correctly, passes linting and testing before it is merged into the `development` branch. The workflow does not block the merge, but it is recommended to fix any issues before merging.

## Vercel Deployments

The project is deployed using Vercel. The deployment is triggered on every push to the `development` and `master` branches. The deployment is done automatically by Vercel and the URL of the deployment is updated in the GitHub deployment status.

Pushes on the `development` branch are deployed to the staging environment, while pushes on the `master` branch are deployed to the production environment.

More about the branches can be found [here](./branching.md).
