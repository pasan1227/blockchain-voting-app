import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import Footer from "../components/Footer";

import "../styles/GetStarted.css";

const GetStarted = () => {
  const steps = [
    {
      title: "Step 1: Registration",
      description:
        "Users register on the platform using their verified credentials, ensuring their eligibility to participate in elections.",
    },
    {
      title: "Step 2: Browse Elections",
      description:
        "Browse and view a list of upcoming elections and their details, including candidates and voting dates.",
    },
    {
      title: "Step 3: Cast Your Vote",
      description:
        "Select your preferred candidate, review your choice, and securely cast your vote using blockchain technology.",
    },
    {
      title: "Step 4: Transparency",
      description:
        "The voting process is transparent and tamper-proof, ensuring the integrity of the election results.",
    },
    {
      title: "Step 5: Real-time Updates",
      description:
        "Get real-time updates on the progress of the election and the vote count as it happens.",
    },
    {
      title: "Step 6: Election Results",
      description:
        "Once the election concludes, access the official results and verify the outcome independently.",
    },
  ];

  return (
    <>
      <section id="get-started" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Get Started with B-VOTE</h2>
          <p className="lead text-center">
            To get started with our secure voting platform, follow these simple
            steps. Your voice matters, and we're here to ensure your vote is
            counted securely and transparently.
          </p>
          {steps.map(
            (step, index) =>
              // Display two cards in each row
              index % 2 === 0 && (
                <Row key={index} className="mb-3">
                  <Col md={6} className="mb-3">
                    <Card className="get-started-card">
                      <Card.Body>
                        <Card.Title>{step.title}</Card.Title>
                        <Card.Text>{step.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  {index + 1 < steps.length && (
                    <Col md={6}>
                      <Card className="get-started-card">
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
          <Row className="mt-4 justify-content-center">
            <Col md={5}>
              <Button
                variant="primary"
                className="btn-block"
                style={{ width: "100%" }}
              >
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
