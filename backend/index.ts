import express, { Request, Response } from "express";
const app = express();
const port = 3001; // default port to listen

const gameRecordRoute = require('./src/routes/gameRecord');


app.use('/game', gameRecordRoute);


// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
