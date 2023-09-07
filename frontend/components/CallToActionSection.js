import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CallToActionSection = () => {
  return (
    <section id="cta" className="py-5 text-">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h2 className="mb-4">Ready to Get Started?</h2>
            <p>
              Join thousands of users who have already experienced secure and
              transparent voting with B-Vote.
            </p>
          </Col>
          <Col lg={6} className="text-lg-end">
            <Button
              variant="light"
              size="lg"
              href="/get-started"
              className="btn-outline-dark"
            >
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToActionSection;
