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

import Home from "./pages/Home";
import Polls from "./pages/Polls";
import NewPoll from "./pages/NewPoll";
import PollingStation from "./pages/PollingStation";


export default function App({ isSignedIn, contractId, wallet }) {
  const signInFunction = () => {
    wallet.signIn();
  };
  const signOutFunction = () => {
    wallet.signOut();
  };

  const callMethod = async (methodName, args = {}) => {
    await wallet.callMethod({
      contractId: contractId,
      method: methodName,
      args: args,
    });
  };

  const viewMethod = async (methodName, args = {}) => {
    return await wallet.viewMethod({
      contractId: contractId,
      method: methodName,
      args: args,
    });
  };

  const getPrompts = async () => {
    let output = await viewMethod("getAllPrompts");
    console.log(output);
    return output;
  };

  const changeCandidatesFunction = async (prompt) => {
    let namePair = await viewMethod("getCandidatePair", { prompt: prompt });
    await localStorage.setItem("Candidate1", namePair[0]);
    await localStorage.setItem("Candidate2", namePair[1]);
    await localStorage.setItem("prompt", prompt);
    window.location.replace(window.location.href + "polling-station");
  };

  const displayHome = () => {
    if (isSignedIn) {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/polls"
            element={
              <Polls
                callMethod={callMethod}
                viewMethod={viewMethod}
                getPrompts={getPrompts}
                changeCandidates={changeCandidatesFunction}
              />
            }
          ></Route>
          <Route
            path="/new-poll"
            element={
              <NewPoll
                callMethod={callMethod}
                viewMethod={viewMethod}
                getPrompts={getPrompts}
              />
            }
          ></Route>
          <Route
            path="/polling-station"
            element={
              <PollingStation
                callMethod={callMethod}
                viewMethod={viewMethod}
                wallet={wallet}
              />
            }
          ></Route>
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
      <Navbar
        className="navbar navbar-dark"
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "black" }}
      >
        <Container>
          <Navbar.Brand href="/">B-VOTE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav>
                <Nav.Link href="/get-started">Get Started</Nav.Link>
                <Nav.Link href="about-us">About Us</Nav.Link>
                <Nav.Link href="contact-us">Contact Us</Nav.Link>
              </Nav> */}
            </Nav>
            <Nav>
              <Nav.Link href="/get-started">Get Started</Nav.Link>
              <Nav.Link href="about-us">About Us</Nav.Link>
              <Nav.Link href="contact-us">Contact Us</Nav.Link>
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
