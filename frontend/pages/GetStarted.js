import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import Footer from "../components/Footer";

const GetStarted = () => {
  const steps = [
    {
      title: "Step 1: Create an Account",
      description:
        "Sign up for an account to access the voting platform. Provide your basic information and create a secure password to get started.",
    },
    {
      title: "Step 2: Verify Your Identity",
      description:
        "Complete the identity verification process. We take privacy and security seriously, and this step ensures the integrity of the voting process.",
    },
    {
      title: "Step 3: Explore Features",
      description:
        "Familiarize yourself with the features of our secure voting system. You can review upcoming elections, candidates, and more.",
    },
    {
      title: "Step 4: Vote Securely",
      description:
        "Cast your vote in upcoming elections with confidence. Our blockchain-based technology ensures that your vote is secure and anonymous.",
    },
  ];

  return (
    <>
      <section id="get-started" className="py-5 bg-light">
        <Container>
          <h2 className="text-center text-primary mb-4">
            Get Started with Secure Voting
          </h2>
          <p className="lead text-center">
            To get started with our secure voting platform, follow these simple
            steps. Your voice matters, and we're here to ensure your vote is
            counted securely and transparently.
          </p>
          {steps.map(
            (step, index) =>
              // Display two cards in each row
              index % 2 === 0 && (
                <Row key={index} className="mb-4">
                  <Col md={6} className="mb-4">
                    <Card>
                      <Card.Body>
                        <Card.Title>{step.title}</Card.Title>
                        <Card.Text>{step.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  {index + 1 < steps.length && (
                    <Col md={6}>
                      <Card>
                        <Card.Body>
                          <Card.Title>{steps[index + 1].title}</Card.Title>
                          <Card.Text>{steps[index + 1].description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  )}
                </Row>
              )
          )}
          {/* Center the button */}
          <Row className="mt-4 justify-content-center">
            <Col md={6}>
              <Button variant="primary" className="btn-block">
                Sign Up Now
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default GetStarted;
