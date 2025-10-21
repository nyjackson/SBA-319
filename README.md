# Skill-Based Assessment for Module 319: MongoDB Database Application #

## Purpose ##
This assessment measures your understanding of MongoDB and your capability to implement its features in a practical manner.

- Create a server application with Node, Express, and MongoDB.
- Create a CRUD API using Express and MongoDB.
- Create MongoDB indexes.
- Use MongoDB indexing to make efficient queries.
- Create MongoDB validation rules.
- Use MongoDB validation to ensure data consistency.

## Pre-Requisites ##

- Node.js
- npm

## Installation/Access ##

1. Clone this repo
2. Install dependencies: `npm install`
3. Type in your terminal, within the repo folder: `nodemon`
4. Open a browser and go to : http://localhost:4400


## Folders & Files ##

### /data ###

Contains the corresponding data objects used.

- magic.js
- endurance.js
- strength.js

### /routes ###

Contains the corresponding routes to interact with the data.

- GET /magic, /strength, /endurance
- POST /magic/add, /strength/add, /endurance/add
- PUT /magic/edit/:name, /strength/edit/:name, /endurance/edit/:name
- DELETE /magic/remove/:name, /strength/remove/:name, /endurance/remove/:name
- POST /magic/reset, /strength/reset, /endurance/reset

### /controllers ###

Contains the corresponding controllers that handle data interaction and modification.\

- enduranceController.js
- magicController.js
- strengthController.js


### index.js

Main js file that handles routing and adds middleware.

### db.js

MongoDB js file that connects to the MongoDB database.

## Available Endpoints

- Home - All Classes: http://localhost:4400/
