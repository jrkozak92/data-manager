# data-manager

# Installation
1. Clone repo or download files
2. Navigate to directory inside Command Line or GitBash
3. Update PostgreSQL credentials
  3a. If you don't have PostgreSQL installed on your machine, you can download it [here](https://www.postgresql.org/download/)
  3b. Navigate to root/app/config/db.config.js
  3c. Update the USER and PASSWORD parameters with account credentials that have sufficient privileges to create and delete databases
  3d. Save the db.config.js file
4. Run 'node server.js' in Command Line or GitBash
5. Navigate to 'localhost:8080/db' in a web browser

Alternatively, once I get it online, you will be able to see this project in action on the 'Database' section of [my personal portfolio website](http://www.joeykozak.com) (but it's not quite there yet).

## Usage
Once your server is running and providing the welcome message in your web browser, you can start sending requests to the server. For requests that expect an object, you can send JSON objects via tools like [Postman](https://www.postman.com/) to the server in the format of { "title": "", "description":"", "link":"" }, where title is the title of your project, description is self explanatory, and link is an optional attribute meant provide a link to a repo or existing project.

# Purpose
This project serves as the back-end for my site-manager project, which is the front-end application for [my personal portfolio website](http://www.joeykozak.com). It is eventually meant to feed the 'Database' tab of that front-end application with persistent data that I store in an AWS RDS instance of a PostgreSQL database, and will be hosted on an AWS EC2 to avoid downtime from local hosting. The idea here is for me to have an always online, live example of real-world back-end development, and gives me a good excuse to learn some of what Amazon Web Services has to offer (in their free tier, anyway).

# Development
This project's development is ongoing, and involves a varity of technologies that I am admittedly a novice with. It uses Node, Express, Sequelize, and RESTful API practices (all of which are still pretty new to me) alongside PostgreSQL. It will eventually provide the data needed for the 'Database' tab of my portfolio website, which will generate what I'm calling 'project cards' per project stored in the database, which will contain the title of the project, a short description, and a link to the project itself or its GitHub repo. My current focus is getting the local instances playing nicely together, which is taking a bit more front-end development before it is ready to test and troubleshoot.

## Future Features
I'd like to eventually add persistent comment sections per 'project card,' but priority right now is getting the base functionality online. This will likely be something I will come back to once the full stack of my site-manager and data-manager applciation is live and refined to a point I am satisfied with. 
