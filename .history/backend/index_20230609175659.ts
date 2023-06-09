import express, { Request, Response } from "express";
var bodyParser = require('body-parser')
var 
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
  .connect("mongodb://database:27017/triviagame_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the Database.');
  })
  .catch((err: any) => console.error(err));


const seedQuestions = [
  {
      "question": "Which tool is commonly used for version control in software development?",
      "options": {
          "1": "GitHub",
          "2": "Docker",
          "3": "Jenkins"
      },
      "answer": 1
  },
  {
      "question": "Which programming language is often used for building server-side applications with Node.js?",
      "options": {
          "1": "JavaScript",
          "2": "Python",
          "3": "Ruby"
      },
      "answer": 1
  },
  {
      "question": "What is the purpose of unit testing in software development?",
      "options": {
          "1": "To test the entire application as a whole",
          "2": "To ensure individual components or functions work correctly",
          "3": "To perform performance testing"
      },
      "answer": 2
  },
  {
      "question": "Which technology is commonly used for containerization and deploying applications?",
      "options": {
          "1": "Docker",
          "2": "Express",
          "3": "React"
      },
      "answer": 1
  },
  {
      "question": "What is the purpose of continuous integration in software development?",
      "options": {
          "1": "To automatically deploy applications to production servers",
          "2": "To ensure code changes are merged and tested frequently",
          "3": "To monitor application performance in real-time"
      },
      "answer": 2
  }
]

app.use(bodyParser.json())

app.use('/question', gameRecordRoute);


// start the Express server
app.listen(process.env.PORT, () => {
    console.log(`server started at http://localhost:`+process.env.PORT);
});
