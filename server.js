require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
mongoose.connect(`mongodb+srv://car_rental_admin:${process.env.DB_PASSWORD}@cluster0.xiklfgh.mongodb.net/CR_Collections?retryWrites=true&w=majority`)
    .then(app.listen(process.env.PORT))
    .then(() => { console.log(`DB Connect & App Started at ${process.env.PORT}`) });

app.use(cors());
app.use(express.json());


