import "regenerator-runtime/runtime";
import React from "react";

import { EducationalText, SignInPrompt, SignOutButton } from "./ui-components";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Card, Button, Row } from "react-bootstrap";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "./Components/Home";
import NewPoll from "./Components/NewPoll";
import PollingStation from "./Components/PollingStation";
import { format } from "path";

export default function App({ isSignedIn, contractId, wallet }) {
  const signInFunction = () => {
    wallet.signIn();
  };
  const signOutFunction = () => {
    wallet.signOut();
  };

  const displayHome = () => {
    if (isSignedIn) {
      return (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/new-poll" element={<NewPoll />}></Route>
          <Route path="/polling-station" element={<PollingStation />}></Route>
        </Routes>
      );
    } else {
      return (
        <Container>
          <Row className="justify-content-center d-flex">
            <Card style={{ padding: "10px", marginTop: "10vh", width: "30vh" }}>
              <Container>
                <Row className="justify-content-center">
                  Hey there! Please Sign In
                </Row>
                <Row className="justify-content-center d-flex">
                  <Button onClick={signInFunction}>Login</Button>
                </Row>
              </Container>
            </Card>
          </Row>
        </Container>
      );
    }
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
              <Nav.Link disabled={!isSignedIn} href="/new-poll">
                New Poll
              </Nav.Link>
              <Nav.Link onClick={isSignedIn ? signOutFunction : signInFunction}>
                {isSignedIn ? wallet.accountId : "Login"}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {displayHome()}
    </Router>
  );
}
