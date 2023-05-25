const mongoose = require('mongoose');
import express, { Request, Response } from "express";
var router = express.Router();

const GameRecords = require("../models/GameRecords");


router.get("/", (req: Request, res: Response) => {
    res.send("Hello game!");
});

// display all game records
router.get("/list", (req: Request, res: Response) => {
    GameRecords.find()
    .exec()
    .then((result: any) => {
      res.status(201).json({
        message: "List all game records",
        gameList: result
      });
    })
    .catch((err: Error) => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// CREATE new game record
router.post("/create", (req: Request, res: Response) => {
    const game = new GameRecords({
      _id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      correct_answers: req.body.correct_answers
    });
    game
      .save()
      .then((result: any) => {
        console.log(result);
        res.status(201).json({
            message: "Doccument created!",
            gameCreated: result
        });
      })
      .catch((err: Error) => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });


  // READ game record with _id
  router.get('/:gameId', (req: Request, res: Response) => {
    const id = req.params.gameId;
    GameRecords.findById(id)
      .exec()
      .then((result: any) => {
        if (result) {
          res.status(200).json({
            message: "Doccument fetch!",
            game: result
        });
        }
      })
      .catch((err: Error) => {
        res
        .status(404)
        .json({ message: "No valid entry found for provided ID" });
      });
  });
    

  // UPDATE game record
  router.patch("/:gameId", (req: Request, res: Response) => {
    const id = req.params.gameId;
  
    console.log(req.body)
    GameRecords.findOneAndUpdate({ _id: id }, req.body)
      .exec()
      .then((result: any) => {
        res.status(200).json({
            message: "Doccument updated!",
            gameUpdated: result
        });
      })
      .catch((err: Error) => {
        res.status(500).json({
          error: err
        });
      });
  });

  //DELETE game record
  router.delete("/:gameId", (req: Request, res: Response) => {
    const id = req.params.gameId;
    GameRecords.findOneAndDelete({ _id: id })
      .exec()
      .then((result: any) => {
        res.status(200).json({
            message: "Doccument deleted!",
            gameDeleted: result
        });
      })
      .catch((err: Error) => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  
  
  
  
  
  


module.exports = router;