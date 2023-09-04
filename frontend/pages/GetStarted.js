import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const GetStarted = () => {
  return (
    <section id="get-started" className="py-5">
      <Container>
        <Row className="">
          <Col md={6}>
            <h2>Get Started with Secure Voting</h2>
            <p>
              Follow the steps below to get started with our secure voting
              system and participate in elections securely and transparently.
            </p>
            <ol>
              <li>
                Create an Account: Sign up for an account to access the voting
                platform.
              </li>
              <li>
                Verify Your Identity: Complete the identity verification
                process.
              </li>
              <li>
                Explore Features: Familiarize yourself with the features of our
                secure voting system.
              </li>
              <li>
                Vote Securely: Cast your vote in upcoming elections with
                confidence.
              </li>
            </ol>
            <Button variant="primary">Sign Up Now</Button>
          </Col>
          <Col md={6}>{/* You can add an image or illustration here */}</Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetStarted;
