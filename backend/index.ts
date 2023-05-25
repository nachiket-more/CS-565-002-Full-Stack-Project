import express, { Request, Response } from "express";
var bodyParser = require('body-parser')

const app = express();
const mongoose = require('mongoose');
const gameRecordRoute = require('./src/routes/gameRecord');
require('dotenv').config({ path: './.env' })


const client = mongoose.connect(
    "mongodb+srv://user-nachiket:" +
       process.env.MONGODB_PASS +
       "@cluster0.gclgp9o.mongodb.net/?retryWrites=true&w=majority"
);



app.use(bodyParser.json())

app.use('/game', gameRecordRoute);


// start the Express server
app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:`+process.env.PORT);
});
