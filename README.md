# Codegus Tasks

Code created for the Prisma ORM video. This is a simple (hardcoded) task management system using Prisma ORM.

Videos: https://www.youtube.com/watch?v=lHdPA-CrGYk&list=PLFRnIPKyoBHh0V6iWjKd3UwDpk5eyndAW

## Installation

```bash
# Clone the repository
git clone https://github.com/guscsales/codegus-prisma-js.git

# Enter the directory
cd codegus-prisma-js

# Install dependencies with pnpm
pnpm install # (or your preferred package manager)
```

## Configuration

Create a `.env` file with the following variable:

```env
DATABASE_URL="postgresql://your_user:your_password@localhost:5432/database_name"
```

Run the command to create the database tables:

```bash
npx prisma migrate deploy
```

## Available Commands

### Create a New Task

```bash
node create-task.js
```

This command creates a new task in the database with:

- Title
- Description
- Due date

### Create a Task Milestone

```bash
node create-task-milestone.js
```

This command creates a milestone for a specific task.

> ⚠️ Important: You need to change the task ID in the file before running

### List All Tasks

```bash
node list-tasks.js
```

This command displays all registered tasks:

- Ordered by due date
- Shows title and ID of each task
- Includes milestones associated with each task

## File Structure

- `create-task.js`: Script to create new tasks
- `create-task-milestone.js`: Script to add milestones to tasks
- `list-tasks.js`: Script to view all registered tasks
- `prisma/schema.prisma`: Defines the database structure
- `package.json`: Project settings and dependencies

## Database

The project uses two main tables:

- `Task`: Stores basic task information
- `TaskMilestone`: Stores the milestones for each task
