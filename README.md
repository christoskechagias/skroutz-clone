# Skroutz Clone

This project is a clone of Skroutz, a popular e-commerce site in Greece. The purpose of this project is to showcase my skills in building a full-stack web application using modern web development technologies.

The project is built using React.js in the frontend with Redux and Saga for state management, and Node.js in the backend for server-side logic. The application is designed to have a similar user interface and functionality as the original Skroutz site, including product listing, search functionality, and user authentication.

By developing this project, I aimed to gain experience in building complex web applications using cutting-edge technologies, and to showcase my skills to potential employers or clients.

![skroutz-clone](https://user-images.githubusercontent.com/70820055/169584199-49169c24-08d3-4249-8e00-49a18807d9f7.gif)

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation - Running the Application](#installation/running-the-application)
- [Built With](#built-with)
- [Authors](#authors)
- [License](#license)


## Getting Started

To get started with this project, simply clone this repository to your local machine and follow the instructions in the [Installing](#installing) section.

### Prerequisites

Before you can run the application, you must have the following installed on your local machine:

- **Node.js**
- **npm**

### Installation - Running the Application

1. Clone the repository to your local machine by running the following command:

    ```
$ git clone https://github.com/kechayias/skroutz-clone.git
 
    ```

2. Navigate to the cloned repository by running:

    ```
 $ cd skroutz-clone
    ```
3. To start the backend server, navigate to the `server` directory by running:

```
$ cd server
```
4. Install the required dependencies by running:
```
$ npm install

```
5. Set up a local MongoDB database. You can download and install it from [here](https://www.mongodb.com/try/download/community).
   In the server folder, create a `.env` file and add the following line to set the database connection string:

    ```
    MONGODB_URL=mongodb://localhost/skroutz-clone
    ```
6. Start the server by running:
```
$ npm run dev
```
7. To start the frontend server, navigate to the `client` directory by running:

```$ cd client```

8. Install the required dependencies by running:

 ```$ npm install```
 
 9. Start the frontend server by running:
 ```$ npm start```


Once both the frontend and backend servers are running, you can access the application by visiting http://localhost:3000 in your web browser.

## Built With

This project was built using the following technologies:

- **React.js**
- **Redux**
- **Saga**
- **Node.js**

