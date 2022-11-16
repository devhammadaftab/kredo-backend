# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install the necessory packages

### `Make databse in postgres with the name of 'kredo'`

Make sure to make it in local server.

### `Default Credential For Database Connection`

username: postgres,
password: password,
database: kredo,
host: localhost,
dialect: postgres

### `npx sequelize-cli db:migrate`

It will auto create the tables inside the database

### `npx sequelize-cli db:seed:all`

It will add the data of categories and products inside the table

### `npm run dev`

Will run the project on port 5000
