const mongoose = require('mongoose');
import express, { Request, Response } from "express";
var router = express.Router();

const Question = require("../models/Question");


router.get("/", (req: Request, res: Response) => {
    res.send("Hello game!");
});

// display all questions
router.get("/list", (req: Request, res: Response) => {
    Question.find()
    .exec()
    .then((result: any) => {
      res.status(201).json({
        message: "List all questions",
        questionList: result
      });
    })
    .catch((err: Error) => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// CREATE new question
router.post("/create", (req: Request, res: Response) => {
    const question = new Question({
      _id: new mongoose.Types.ObjectId(),
      question: req.body.question,
      options: req.body.options,
      answer: req.body.answer
    });
    question
      .save()
      .then((result: any) => {
        console.log(result);
        res.status(201).json({
            message: "Doccument created!",
            questionCreated: result
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
  router.get('/:questionId', (req: Request, res: Response) => {
    const id = req.params.questionId;
    Question.findById(id)
      .exec()
      .then((result: any) => {
        if (result) {
          res.status(200).json({
            message: "Doccument fetch!",
            question: result
        });
        }
      })
      .catch((err: Error) => {
        res
        .status(404)
        .json({ message: "No valid entry found for provided ID" });
      });
  });
    

  // UPDATE question
  router.patch("/:questionId", (req: Request, res: Response) => {
    const id = req.params.questionId;
  
    console.log(req.body)
    Question.findOneAndUpdate({ _id: id }, req.body)
      .exec()
      .then((result: any) => {
        res.status(200).json({
            message: "Doccument updated!",
            questionUpdated: result
        });
      })
      .catch((err: Error) => {
        res.status(500).json({
          error: err
        });
      });
  });

  //DELETE question
  router.delete("/:questionId", (req: Request, res: Response) => {
    const id = req.params.questionId;
    Question.findOneAndDelete({ _id: id })
      .exec()
      .then((result: any) => {
        res.status(200).json({
            message: "Doccument deleted!",
            questionDeleted: result
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