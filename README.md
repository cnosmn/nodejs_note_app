# Node.js Todo API

[![Node.js](https://img.shields.io/badge/Node.js-14.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.x-darkgreen.svg)](https://www.mongodb.com/)

## Overview

This project is a RESTful API for managing tasks (todo items) built with Node.js, Express, and MongoDB. It provides endpoints to create, read, update, and delete tasks, serving as a backend for todo applications.

## Table of Contents

- [Node.js Todo API](#nodejs-todo-api)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [API Endpoints](#api-endpoints)
  - [Database](#database)
    - [Task Schema](#task-schema)
  - [Usage Examples](#usage-examples)
    - [Creating a Task](#creating-a-task)
    - [Getting All Tasks](#getting-all-tasks)
    - [Updating a Task](#updating-a-task)
    - [Deleting a Task](#deleting-a-task)
  - [Development](#development)
    - [Running in Development Mode](#running-in-development-mode)
  - [Deployment](#deployment)
    - [Heroku](#heroku)
    - [Docker](#docker)

## Features

- RESTful API architecture
- CRUD operations for tasks
- MongoDB integration for data persistence
- Express middleware for request processing
- Environment-based configuration
- API versioning

## Project Structure

```
todo-app/
│
├── db/
│   └── connect.js         # Database connection module
│
├── models/
│   └── Task.js            # Task data model
│
├── controllers/
│   └── taskController.js  # Logic for handling task operations
│
├── routers/
│   └── taskRouters.js     # API route definitions
│
├── .gitignore             # Git ignore file
├── server.js              # Main application entry point
└── package.json           # Project dependencies and scripts
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/cnosmn/nodejs_note_app.git
cd nodejs_note_app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
```
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/todo-app?retryWrites=true&w=majority
```

4. Start the server:
```bash
npm start
```

## Configuration

The application uses environment variables for configuration:

- `MONGO_URI`: MongoDB connection string
- `PORT`: Server port (defaults to 3000)

These can be set in the `.env` file or as environment variables in your deployment environment.

## API Endpoints

The API is versioned under `/api/v1/tasks`.

| Method | Endpoint              | Description                   |
|--------|------------------------|-------------------------------|
| GET    | /api/v1/tasks         | Get all tasks                 |
| POST   | /api/v1/tasks         | Create a new task             |
| GET    | /api/v1/tasks/:id     | Get a specific task by ID     |
| PATCH  | /api/v1/tasks/:id     | Update a specific task        |
| DELETE | /api/v1/tasks/:id     | Delete a specific task        |

## Database

The application uses MongoDB as its database. The connection is established in `db/connect.js` using the Mongoose library.

### Task Schema

A task typically includes:

- `name`: Task title or description (String, required)
- `completed`: Task completion status (Boolean, default: false)
- `createdAt`: Timestamp of task creation (Date, default: current date)

## Usage Examples

### Creating a Task

```bash
curl -X POST http://localhost:3000/api/v1/ \
  -H 'Content-Type: application/json' \
  -d '{"name": "Complete project", "completed": false}'
```

### Getting All Tasks

```bash
curl -X GET http://localhost:3000/api/v1/
```

### Updating a Task

```bash
curl -X PATCH http://localhost:3000/api/v1/60d21b4667d0d8992e610c85 \
  -H 'Content-Type: application/json' \
  -d '{"completed": true}'
```

### Deleting a Task

```bash
curl -X DELETE http://localhost:3000/api/v1/60d21b4667d0d8992e610c85
```

## Development

### Running in Development Mode

To run the application with automatic restart on file changes:

```bash
npm run dev
```

This requires nodemon, which can be installed globally:

```bash
npm install -g nodemon
```

Or you can add it to your dev dependencies.

## Deployment

This application can be deployed to various platforms:

### Heroku

1. Create a Heroku account and install the Heroku CLI
2. Login to Heroku and create a new app:
```bash
heroku login
heroku create your-app-name
```

3. Add your MongoDB URI to Heroku config:
```bash
heroku config:set MONGO_URI=your-mongodb-uri
```

4. Push to Heroku:
```bash
git push heroku main
```

### Docker

A Dockerfile might look like:

```dockerfile
FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t todo-app .
docker run -p 3000:3000 --env-file .env todo-app
```