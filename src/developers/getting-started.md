# Getting Started

This Guide will show you how to get started with the CCAT project. It will guide you through the setup of the project, the installation of the dependencies and the running of the project.

## Prerequisites

Before you can start working on the project, you need to have the following tools installed on your machine:

- [Node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)

### Optional Tools

These tools are not required to work on the project, but they are recommended since they make development easier:

- [Visual Studio Code](https://code.visualstudio.com/) - Preferred IDE for the project
- [Orbstack](https://orbstack.com/) - An alternative to Docker Desktop, which is more lightweight and faster
- [Github Desktop](https://desktop.github.com/) - If you're not comfortable with the command line, this might be a good alternative to get started with Git. However, it is recommended to learn the command line interface since we use git hooks in the project, which sometimes require the command line.
- [nvm](https://github.com/nvm-sh/nvm) - Node Version Manager, to manage multiple Node.js versions on your machine

## Setup

To get started with the project, you need to clone the repository to your machine. You can do this by running the following command in your terminal:

```bash
git clone https://github.com/move-ev-sub/ccat.git
```

To clone the repository, you need to be a member of the organization on Github. If you are not a member, access can be requested from the project maintainers.

After cloning the repository, navigate into the project directory:

```bash
cd ccat
```

## Setting up node

This project defines the Node.js version to use in the `.nvmrc` file. To use the correct version of Node.js, you can run the following command:

```bash
nvm use
```

This will switch to the correct version of Node.js defined in the `.nvmrc` file. If you're not using `nvm`, you can install the correct version of Node.js manually. The required version of Node.js is defined in the `.nvmrc` file, as well as in the `engines` field in the `package.json` file.

## Installation

To install the dependencies of the project, run the following command:

```bash
pnpm install
```

This will install all the dependencies of the project.

## Preparing the Environment

Before you can start working on the project, you need to set up the environment. To do this, you need to create a `.env` file in the root of the project. You can use the `.env.example` file as a template. Copy the contents of the `.env.example` file into a new file called `.env` (or `.env.local` for better deferentiation) and fill in the required values.

::: code-group

```bash [.env.example]
# Copy this file to .env.local and replace the values with your own

NEXT_PUBLIC_SUPABASE_URL="http://127.0.0.1:54321"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0"
DATABASE_URL="postgresql://postgres:password@localhost:5432"
```

:::

## Running the Project

```bash
pnpm dev
```

This will start the development server and open the project in your browser. You can now start working on the project.
