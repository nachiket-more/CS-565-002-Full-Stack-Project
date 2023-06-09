import express, { Request, Response } from "express";
var bodyParser = require('body-parser')
var cors = require('cors')

const app = express();
const mongoose = require('mongoose');
const gameRecordRoute = require('./src/routes/gameRecord');
require('dotenv').config({ path: './.env' })

app.use(cors())
app.options('*', cors()) 

// const client = mongoose
//   .connect("mongodb+srv://user-nachiket:" +
//   process.env.MONGODB_PASS +
//   "@cluster0.gclgp9o.mongodb.net/?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: 'triviagame_app',
//   })
//   .then(() => {
//     console.log('Connected to the Database.');
//   })
//   .catch((err: any) => console.error(err));
  
const client = mongoose
  .connect("mongodb+srv://mongodb-database/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'triviagame_app',
  })
  .then(() => {
    console.log('Connected to the Database.');
  })
  .catch((err: any) => console.error(err));


app.use(bodyParser.json())

app.use('/question', gameRecordRoute);


// start the Express server
app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:`+process.env.PORT);
});
