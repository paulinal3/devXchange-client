# DevXchange - Client App
Our goal is to create an app that allows developers of all skill ranges to debug, solve, and collaborate on coding problems.

## Deployed App
[DevXchange App](https://devxchange.herokuapp.com/)

## Install
Requirements
* MongoDB
* NPM
* <a href="https://github.com/paulinal3/devXchange-api">DevXchange API </a>

Install procedure:
1. In the directory of your DevXChange API, run the following commands
    * ```npm install``` to install necessary npm packages
    * ```npm start``` to instantiate the server, and leave it running
2. Once the API is up and running, move to the directory where you've saved the DevXchange client and run the following commands
    * ```npm install``` to install necessary npm packages
    *  ```npm start``` to launch the DevXchange react app
3. Jump right in and make a user account and start posting questions!

## Tech Stack
* React
* MongoDB
* Mongoose
* CSS/Bootstrap

## Wireframes
![Wireframes](public/wireframes.png)

## Server Repository
[DevXchange API Repository](https://github.com/paulinal3/devXchange-api)

## Collections
![Collections](devXchange_collections.png)

## REST Routes
![RESTful Routes](devXchange_routes.png)

## MVP
* Create a single page MERN application using ReactJS
* Create a database using MongoDB/Mongoose
* A user is able to post, edit, delete a problem
* A user is able to answer another user’s problem

## Stretch Goals
* Implementing a text editor that could include code snippets and screenshots
    * Using cloudinary as a backup for only screenshots
* Adding a tags collection to use as another way to filter through questions

## Potential Roadblocks
* Implement a rich-text editor
* Use Cloudinary API if needed