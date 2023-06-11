import express, { Request, Response } from "express";
var bodyParser = require('body-parser')
var Questions = require('./src/models/Question')
var cors = require('cors')
import {seedQuestions} from './src/seeder'

const app = express();
const mongoose = require('mongoose');
const gameRecordRoute = require('./src/routes/gameRecord');
require('dotenv').config({ path: './.env' })

app.use(cors())
app.options('*', cors()) 

const client = mongoose
  .connect("mongodb://database:27017/triviagame_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('\nConnected to the Database.\n');
  })
  .catch((err: any) => console.error(err));


const seedDB = async () => {
  await Questions.deleteMany({});
  await Questions.insertMany(seedQuestions);
}

seedDB().then( ()=>{
  console.log('q\nuestion seeded into triviagame_app\n')
} )

app.use(bodyParser.json())

app.use('/question', gameRecordRoute);


app.listen(process.env.PORT, () => {
    console.log(`\nserver started at http://backend:`+process.env.PORT+'\n');
});
