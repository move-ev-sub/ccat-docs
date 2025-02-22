# Suggested Workflow

This document describes the suggested workflow for working with the CCAT repository. Each developer has their own preferences and workflow, but this document outlines the suggested workflow for working with the CCAT repository.

## Finding something to work on

Before starting work on a new feature or bug, it is important to check the issue tracker to see if there are any issues that need to be worked on. If there are no issues that need to be worked on, you can create a new issue for the feature or bug you want to work on.

## Creating a new branch

Once you have found an issue to work on, you should create a new branch for the issue. The naming convention for branches is `feat/short-description`. For example, if you are working on a feature to add a new button to the UI, you could name the branch `feat/add-button`.

New feature branches can be automatically created by clicking on the "Create Branch" button in the issue tracker. This will create a new branch with the correct naming convention and link it to the issue.

### Switch to the new branch

After creating the new branch, you should switch to the new branch by running the following command:

```bash
git checkout feat/add-button
```

## Working on the feature

After switching to the new branch, you can start working on the feature. Make sure to commit your changes regularly and push them to the remote repository.

## Opening a pull request

Once you have finished working on the feature, you should open a pull request to merge the changes into the `development` branch. You can do this by clicking on the "Create Pull Request" button in the issue tracker. This will open a new pull request with the correct base and head branches.

## Merging the pull request

After opening the pull request, the changes will be reviewed by other developers. Once the changes have been reviewed and approved, you can merge the pull request into the `development` branch.