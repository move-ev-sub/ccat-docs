# Branching Model

In the CCAT Repository we use a modified version of the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). Instead of using 5 branches, we only use 3 branches: `master`, `development` and `feature` branches.

## Branches

### `master`

The `master` branch is the main branch of the project. It contains the latest stable version of the project. This branch is protected and can only be updated by merging a pull request (preferably from the `development` branch). This is the branch where we create releases from.

### `development`

The `development` branch is the main branch for development. It contains the latest changes and features that are being worked on. 

### `feat/**`

Feature branches are used to develop new features for the upcoming or a distant future release. The naming convention for feature branches is `feat/short-description`.

Feature branches are created from the `development` branch and are merged back into the `development` branch.

They should be deleted after the feature has been merged into the `development` branch.

Features branches are created by creating a new branch for an issue in the issue tracker. Each issue gets its own branch. After the issue is resolved, the branch is merged back into the `development` branch and the issue is closed.