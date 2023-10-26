require('dotenv').config();
const express = require ('express');
const app = express();


const mongoose = require('mongoose')

const rooms = require('./Controllers/roomController');

// const userModel = require ('./Models/userModel')
const users = require('./Contollers/userController')

const {PORT, MONGO } = process.env;

mongoose.connect(`${process.env.MONGO}/ChatServerII`)

const db = mongoose.connection;

db.once('open', () => console.log(`Connected to: ${MONGO}`));
app.use(express.json());
app.use(require('cors')())

app.use('/rooms', rooms)
app.use('/user', users)

app.get('/test', (req, res) => {
    res.status(200).json({ message: "Server is accessible", port: process.env.PORT })
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));