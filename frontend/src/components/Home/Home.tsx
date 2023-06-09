import * as React from "react";
import { Button, Form, Container, Row, Col, Dropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
// import FadeIn from 'react-fade-in';
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../Navbar/Navbar"


import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
  // const [roomValue, setRoom] = React.useState("Select a Room");
  const [usernameValue, setUsername] = React.useState("");
  const [passwordValue, setPassword] = React.useState("");


  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();



  const navigate = useNavigate();

  // const handleSelectRoom = (event) => {
  //   console.log("selected room : ", event.target.innerText);
  //   setRoom(event.target.innerText);
  // };
  const handlePlayGame = () => {
    if (user !== undefined && isAuthenticated){
      console.log('redirect to game screen')
        navigate('/game');
    }
    else{
      console.log('redirect to login screen')
      loginWithRedirect()
    }
  };



  return (
    <Navbar>
      <div className="bg">
        <div className="home-bg">
          <h2 className="home-heading">Full Stack Web Developement Trivia</h2>
          <Button variant="primary" id="start-game" onClick={handlePlayGame}>LET'S PLAY</Button>


        </div>
      </div>
    </Navbar>
  );
}

export default Home;