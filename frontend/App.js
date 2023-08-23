import "regenerator-runtime/runtime";
import React from "react";

import { EducationalText, SignInPrompt, SignOutButton } from "./ui-components";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App({ isSignedIn, contractId, wallet }) {
  const signInFunction = () => {
    wallet.signIn();
  };
  const signOutFunction = () => {
    wallet.signOut();
  };

  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">B-VOTE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/new-poll">New Poll</Nav.Link>
              <Nav.Link onClick={isSignedIn ? signOutFunction : signInFunction}>
                {isSignedIn ? wallet.accountId : "Login"}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}
