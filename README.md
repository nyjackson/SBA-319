# Skill-Based Assessment for Module 319: MongoDB Database Application

A RESTful API for managing video game character classes, organized by their primary attribute: Magic, Strength, or Endurance. Utilizes MongoDB for data retention.

## Purpose

This assessment measures your understanding of MongoDB and your capability to implement its features in a practical manner.

- Create a server application with Node, Express, and MongoDB.
- Create a CRUD API using Express and MongoDB.
- Create MongoDB indexes.
- Use MongoDB indexing to make efficient queries.
- Create MongoDB validation rules.
- Use MongoDB validation to ensure data consistency.

## Pre-Requisites

- Node.js
- npm

## Installation/Access

1. Clone this repo
2. Install dependencies: `npm install`
3. Type in your terminal, within the repo folder: `nodemon`
4. Open a browser and go to : http://localhost:4400

## Folders & Files

### /data

Contains the corresponding data objects used.

- magic.js
- endurance.js
- strength.js

  ### /routes

  Contains Express router files for each MongoDB collection:

  - classMagic.js
  - classStrength.js
  - classEndurance.js

### API Endpoints & CRUD Operations

#### Magic Collection

- GET /magic - Read all magic classes
- POST /magic/add - Create a new magic class
- PUT /magic/edit/:name - Update a magic class by name
- DELETE /magic/remove/:name - Delete a magic class by name
- POST /magic/reset - Reset to default data

#### Strength Collection

- GET /strength - Read all strength classes
- POST /strength/add - Create a new strength class
- PUT /strength/edit/:name - Update a strength class by name
- DELETE /strength/remove/:name - Delete a strength class by name
- POST /strength/reset - Reset to default data

#### Endurance Collection

- GET /endurance - Read all endurance classes
- POST /endurance/add - Create a new endurance class
- PUT /endurance/edit/:name - Update an endurance class by name
- DELETE /endurance/remove/:name - Delete an endurance class by name
- POST /endurance/reset - Reset to default data

### /controllers

Contains the corresponding controllers that handle data interaction and modification. Also adds document validation and indexes on existing/new collections.

- enduranceController.js
- magicController.js
- strengthController.js

### index.js

Main js file that handles routing and adds middleware.

### db.js

MongoDB js file that connects to the MongoDB database.

## Available Endpoints

- Home - All Classes: http://localhost:4400/

  ## Notes

  - MongoDB validation rules are automatically enforced when adding new documents
  - Indexes are created on the `name` field for faster querying during edit and delete operations
  - Each collection contains 10 default character classes. 
