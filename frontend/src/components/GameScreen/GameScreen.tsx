import * as React from "react";
import { Button, Form, Card, Spinner, Col, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./GameScreen.css";

import Navbar from "../Navbar/Navbar";

import { useState } from "react";

function QuizComponent() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const quizQuestionsList = [
    {
      question:
        "What programming languages are commonly used in full-stack development??",
      options: {
        1: "Javascript",
        2: "Python",
        3: "Ruby",
      },
      answer: 1,
    },
    {
      question:
        "2What programming languages are commonly used in full-stack development??",
      options: {
        1: "2Javascript",
        2: "2Python",
        3: "2Ruby",
      },
      answer: 1,
    },
    {
      question:
        "3What programming languages are commonly used in full-stack development??",
      options: {
        1: "3Javascript",
        2: "3Python",
        3: "3Ruby",
      },
      answer: 1,
    },
  ];

  const calculateScore = () => {
    setShowLoading(false)
    console.log("Your score is: ",)
  }

  const handleNextQuestion = (event:any) => {
    console.log("selected option: ",event.target.value )
    if (currentQuestionIndex == quizQuestionsList.length-1){
        setShowLoading(true)
        setShowGameScreen(false)
        setTimeout(() => {
            calculateScore()
        }, 3000);
    }
    else{
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const currentQuestion = quizQuestionsList[currentQuestionIndex];

  const [showLoading, setShowLoading] = React.useState(false);
  const [showGameScreen, setShowGameScreen] = React.useState(false); //true
  const [showEndScreen, setShowEndScreen] = React.useState(true);

  const handleOpenLeaderboard = () => {
    navigate('/game');
  }

  return (
    <Navbar>
      <div className="bg">
        {
            showLoading && (
                <div className='spinner-container'>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>  
            )
        }
        {
            !showLoading && showGameScreen && (
                
        <div className="game-bg">

          <Card className="game-card">
            <Card.Body>
              <div className="trivia-card">
                <Card>
                  <Card.Header>{currentQuestion.question}</Card.Header>
                  <Card.Body>
                    <Card.Text>
                          {Object.entries(currentQuestion.options).map(
                            ([optionKey, optionValue]) => (
                              <Button
                                className="mt-4"
                                id="option-btn"
                                variant="primary"
                                onClick={handleNextQuestion}
                                value={optionKey}
                              >
                                {optionValue}
                              </Button>
                            )
                          )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Card.Body>
          </Card>
        </div>
            )
        }
        {
            showEndScreen && (
                
            <div className="game-finish-container">
                    <h2 className='heading'>Good Job!</h2>
                    <h4 className='sub-heading'>you got 5 out of 5 correct</h4>
                    <div>
                        <Button variant="primary" className="mt-4" id="open-leaderboard" onClick={handleOpenLeaderboard}>LEADERBOARD</Button>
                    </div>
            </div>
            )
        }
      </div>
    </Navbar>
  );
}

export default QuizComponent;
