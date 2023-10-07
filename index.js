require('dotenv').config();
const express = require ('express');
const app = express();

SS
const mongoose = require('mongoose')


const {PORT, MONGO } = process.env;

const mongoose = require('mongoose');

const { PORT, MONGO } = process.env;
develop

mongoose.connect(`${process.env.MONGO}/ChatServerII`)

const db = mongoose.connection;

db.once('open', () => console.log(`Connected to: ${MONGO}`));
SS
app.use(express.json());


app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

app.use(express.json());

app.listen(PORT, () => console.log(`App`))
 develop
