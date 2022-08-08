# Appointment scheduler REST API microservice

## School project

This school project is an appointment scheduler microservice with REST endpoints, developed using Node.js, Express.

## About the project

Clients can book max 30 minute long appointments. The service will check for colliding appointments and alert the client. Successful bookings will be stored in MongoDB.

## Features of version 1.0.0

- basic CRUD operations
- the client must include only the very minimal amount of data
  - start time, and/or booked appointment ID (from MongoDB)
  - commenting is optional

## Setup requirements

- Node.js
- Mongo DB

## How to start

1. Clone the repository and open with Visual Studio Code

2. Using the terminal:

```
cd backend
npm install
cd ..
```

3. Create an .env file at the backend root

- fill out with your own data

```
PORT={your choice, ie: 8080}
CONNECTION_STRING={your Mongo database}
```

4. Start the localhost

```
cd backend
npm start

```
