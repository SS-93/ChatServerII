require('dotenv').config();
const express = require ('express');
const app = express();

const mongoose = require('mongoose')


const {PORT, MONGO } = process.env;

mongoose.connect(`${process.env.MONGO}/ChatServerII`)

const db = mongoose.connection;

db.once('open', () => console.log(`Connected to: ${MONGO}`));
app.use(express.json());



app.get('/test', (req, res) => {
    res.status(200).json({ message: "Server is accessible", port: process.env.PORT })
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));