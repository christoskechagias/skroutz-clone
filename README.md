# Skroutz Clone

This project is a clone of Skroutz, a popular e-commerce site in Greece. The purpose of this project is to showcase my skills in building a full-stack web application using modern web development technologies.

The project is built using React.js in the frontend with Redux and Saga for state management, and Node.js in the backend for server-side logic. The application is designed to have a similar user interface and functionality as the original Skroutz site, including product listing, search functionality, and user authentication.

By developing this project, I aimed to gain experience in building complex web applications using cutting-edge technologies, and to showcase my skills to potential employers or clients.

<img src="https://user-images.githubusercontent.com/70820055/169584199-49169c24-08d3-4249-8e00-49a18807d9f7.gif" width="100%">

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation and Running the Application](#installation-and-running-the-application)
- [Built With](#built-with)
- [Legal Disclaimer](#legal-disclaimer)
- [License](#license)


## Getting Started

To get started with this project, simply clone this repository to your local machine and follow the instructions in the [Installation and Running the Application](#installation-and-running-the-application) section.

### Prerequisites

Before you can run the application, you must have the following installed on your local machine:

- **Node.js**
- **npm**

### Installation and Running the Application

1. Clone the repository to your local machine by running the following command:
```
git clone https://github.com/kechayias/skroutz-clone.git
```

2. Navigate to the cloned repository by running:
```
cd skroutz-clone
```

3. To start the backend server, navigate to the `server` directory by running:
```
cd server
```

4. Install the required dependencies by running:
```
npm install
```

5. Set up a local MongoDB database. You can download and install it from [here](https://www.mongodb.com/try/download/community).
   In the server folder, create a `.env` file and add the following line to set the database connection string:
```
MONGODB_URL=mongodb://localhost/skroutz-clone
```
6. Start the server by running:
```
npm run dev
```

7. To start the frontend server, navigate to the `client` directory by running:
```
cd client
```

8. Install the required dependencies by running:
```
npm install
```
 
9. Start the frontend server by running:
```
npm start
```

Once both the frontend and backend servers are running, you can access the application by visiting http://localhost:3000 in your web browser.

## Built With

This project was built using the following technologies:

- **React.js**
- **Redux**
- **Saga**
- **Node.js**

## Legal Disclaimer

This Skroutz clone is a non-commercial project developed for educational and learning purposes only. It is not intended for commercial use, and the developers are not responsible for any actions taken by users of the application. The use of this application for any purpose other than learning or testing is strictly prohibited.

Please note that the product data used in this application is not real and is used for demonstration purposes only. The product images and descriptions are sourced from publicly available websites and may not reflect the actual details of the products they represent.

This Skroutz clone is not affiliated with, endorsed by, or in any way connected to the official Skroutz website located at https://www.skroutz.gr/. The official Skroutz website is owned and operated by Skroutz S.A. and is intended for commercial use by its users.

From a legal standpoint, this Skroutz clone is intended for educational and learning purposes only. It is not intended to be used for commercial purposes, and any use of this application for commercial gain is strictly prohibited. The developers of this application are not responsible for any legal or regulatory issues that may arise from the use of this application.

If you decide to deploy this application to a live server, please ensure that you comply with any relevant laws and regulations, including data privacy laws and consumer protection laws. The developers of this application are not responsible for any legal or regulatory issues that may arise from the use of this application.

