import * as React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

type ContainerProps = {
  children: React.ReactNode;
};

const Navbar = (props: ContainerProps) => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  return (
    <div className="navbar-container">
      <div id="user-details-container">
        {user == undefined && !isAuthenticated && (
          <div>
            <Button
              id="login-button"
              variant="secondary"
              onClick={() => loginWithRedirect()}
            >
              LOG IN
            </Button>
            <Button id="signin-button">SIGN UP</Button>
          </div>
        )}
        {user !== undefined && isAuthenticated && (
          <Dropdown id="user-details">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <img src={user.picture} alt={user.name} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>{user.name}</Dropdown.Item>
              <Dropdown.Item href="/leaderboard">Leaderboard</Dropdown.Item>
              <Dropdown.Item
                id="dropdown-logout"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Loug Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>

      {props.children}
    </div>
  );
};

export default Navbar;
