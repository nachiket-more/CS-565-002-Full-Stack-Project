import * as React from "react";
import { Button, Form, Container, Row, Col, Dropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
// import FadeIn from 'react-fade-in';
import { useAuth0 } from "@auth0/auth0-react";


import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
  // const [roomValue, setRoom] = React.useState("Select a Room");
  const [usernameValue, setUsername] = React.useState("");
  const [passwordValue, setPassword] = React.useState("");


  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();



  // const navigate = useNavigate();

  // const handleSelectRoom = (event) => {
  //   console.log("selected room : ", event.target.innerText);
  //   setRoom(event.target.innerText);
  // };
  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const enterGameRoom = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert([usernameValue, passwordValue])
    // navigate('/game',{state:{
    //   name:{nameValue},
    //   room:{roomValue} 
    // }});
  };

  return (
    <div className="bg">
      <div className="form-bg">
         <h2 className="form-heading">Full Stack Web Developement Trivia</h2>
        <Form onSubmit={enterGameRoom}>
          <Container className="mb-2 mt-4">
            <Row>
              <Col sm={12}>
                <Form.Group className="" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="username"
                    value={usernameValue}
                    onChange={handleUsername}
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col sm={12}>
                <Form.Group className="mb-4 mt-4" controlId="formBasicName">
                  <Form.Control
                    type="password"
                    placeholder="password"
                    value={passwordValue}
                    onChange={handlePassword}
                  />
                </Form.Group>
              </Col>
            </Row>

          </Container>
          <Form.Group className="" controlId="formBasicPassword">
            <Button variant="primary" type="submit">
              LOG IN
            </Button>
          </Form.Group>
        </Form>
        
        <Button onClick={() => loginWithRedirect()} variant="primary" type="submit">LOG IN</Button>

        <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} variant="primary" type="submit">LOG OUT</Button>

        {
                user !== undefined && isAuthenticated && (
                    <div>
                        {/* <img src={user.picture} alt={user.name} /> */}
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                )
            }


      </div>
    </div>
  );
}

export default Home;