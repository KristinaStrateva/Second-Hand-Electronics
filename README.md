# Second Hand Electronics

Welcome to Second Hand Electronics, a server-side rendering platform built with Express.js, Handlebars and MongoDB. It is designed for electronics components — both new and second-hand.

## Technologies Used

[![Static Badge](https://img.shields.io/badge/JavaScript-FAFA1A)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)   [![Static Badge](https://img.shields.io/badge/Express.js-v4.18.2-1CAC42)](https://expressjs.com/)   [![Static Badge](https://img.shields.io/badge/Express_Handlebars-v7.1.2-FF8B38)](https://www.npmjs.com/package/express-handlebars)   [![Static Badge](https://img.shields.io/badge/MongoDB-Mongoose_v7.6.3-338649)](https://www.mongodb.com/)   [![Static Badge](https://img.shields.io/badge/License-MIT-2EA74C)](https://opensource.org/license/mit/)

## Table of Contents

- [General Information](#general-information)
- [Project Deployment](#live-demo)
- [Features](#features)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Room for Improvements](#room-for-improvements)
- [Contacts](#contacts)

## General Information

- The platform facilitates the trading of electronics components, catering to both sellers and buyers.

- It utilizes Express.js for server-side logic, Handlebars for templating, and MongoDB for database management. 

- Authentication tracking is implemented using middleware to differentiate between registered users and guests.

- Key functionalities include uploading, editing, and deleting items, as well as browsing and purchasing capabilities for users (purchasing functionality is only simulated).

## Live Demo

Check out the live demo of Second Hand Electronics [here](https://second-hand-electronics.onrender.com/).

**Note:** The website is optimized for the latest versions of Chrome and Mozilla Firefox, with a desktop resolution of 1920x1080.

## Features

- **Electronic and User Models:** The platform employs two main models—Electronic and User. Each Electronic item includes attributes such as name, type, damages, image, description, production, exploitation and price. User authentication and tracking are managed through the User model.

- **User Creations:** For logged-in users, Second Hand Electronics gives additional privileges such as uploading, editing or deleting their own items.

- **Dynamic Catalog Page:** The catalog page dynamically showcases all added electronics.

- **Authentication Tracking:** Middleware is utilized for tracking user authentication status, enabling different functionalities based on whether a user is logged in or is a guest.

- **Search Functionality:** The platform incorporates a robust search feature allowing users to search for items based on specific criteria, enhancing the browsing experience and facilitating item discovery.

## Project Structure

The project follows a modular architecture with a main src directory comprising various components:

- `/src`
    - `/config`: Contains configuration files for Express.js and MongoDB configuration, setting up environment variables and other project configurations
    - `/controllers`: Houses controller functions responsible for handling user requests, interacting with the models, and sending responses
    - `/lib`: Holds custom jwt library
    - `/managers`: Includes manager modules responsible for business logic and coordination between different parts of the application
    - `/middlewares`: Contains middleware functions for implementing authentication, error handling, and other cross-cutting concerns
    - `/models`: Stores database models representing different entities in the application, such as users and electronic items
    - `/public`: Contains static assets such as images, stylesheets, and client-side JavaScript files
    - `/utils`: Houses utility functions used throughout the application for various purposes such as data manipulation and formatting
    - `/views`: Stores Handlebars templates for rendering HTML views served to clients
    - `index.js`: Entry point of the application, initializing the server and middleware
    - `router.js`: Handles routing logic for different endpoints and their associated functionalities

Feel free to explore each directory to understand how different components and functionalities are structured within the project.

## Usage

**1. Clone the Repository**

`git clone https://github.com/KristinaStrateva/Second-Hand-Electronics`

**2. Start the Server**

Install server dependencies:

`npm install`

Start the server in development mode:

`npm run dev`

Now when the server setup is complete you can open the following link in your web browser: [http://localhost:4000](http://localhost:4000)

**Note:** These instructions are intended for users operating on the Windows OS.

## API Endpoints

### Authentication

- **POST /users/login**
    - _Request:_
    ```
    {
        "email": "string",
        "password": "string"
    }
    ```
    - _Response:_
    ```
    {
        "token": "token"
    }
    ```
    - _Description:_ Authenticate and log in a user

- **POST /users/register**
    - _Request:_
    ```
    {
        "username": "string",
        "email": "string",
        "password": "string",
        "rePassword": "string"
    }
    ```
    - _Response:_
    ```
    {
        "token": "token"
    }
    ```
    - _Description:_ Create a new user

### Electronics Management

- **POST /electronics/create**
    - _Request:_
    ```
    {
        "electronicData": "electronicData"
    }
    ```
    - _Response:_
    ```
    {
        "New Item": "newItem"
    }
    ```
    - _Description:_ Create a new electronics part

- **GET /electronics/:partId/details**
    - _Response:_
    ```
    {
        "partId": "unique_part_id"
    }
    ```
    - _Description:_ Get details data of a specific electronics part

- **POST /electronics/:partId/edit**
    - _Request:_
    ```
    {
        "partId": "unique_part_id",
        "electronicData": "electronicData"
    }
    ```
    - _Response:_
    ```
    {
        "electronicData": "electronicData"
    }
    ```
    - _Description:_ Update a specific electronics part

- **GET /electronis/:partId/delete**
    - _Request:_
    ```
    {
        "partId": "unique_part_id"
    }
    ```
    - _Description:_ Remove an electronics part from collection

### Purchase Management

- **GET /electronics//:partId/purchase**
    - _Request:_
    ```
    {
        "partId": "unique_part_id"
    }
    ```
    - _Response:_
    ```
    [
        {
            "user": "unique_user_id"
        },
        ...
    ]
    ```
    - _Description:_ Create a purchase to a specific electronics part

## Room for Improvements

- ### Improvements

    - **Improvement 1:** Enhance user experience with additional effects.

- ### Features that can be Added

    - **Feature to be added 1:** Good testing system.

    - **Feature to be added 2:** Implement working purchase functionality.

    - **Feature to be added 3:** Enable corresponding by email.

## Contacts

<p><span style="margin-right: 30px;"></span><a href="https://www.linkedin.com/in/kristina-strateva-a820ba254/"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" style="width: 5%;"></a>         <span style="margin-right: 30px;"></span><a href="https://github.com/KristinaStrateva"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style="width: 5%;"></a>         <span style="margin-right: 30px;"></span><a href="https://www.facebook.com/profile.php?id=100000144024793"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" style="width: 5%;"></a></p>