import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
  };

  return (
    <section
      id="newsletter"
      className="p-5 bg-secondary text-white text-center"
    >
      <Container>
        <h2 className="text-center">Subscribe to Our Newsletter</h2>
        <p className="text-center">
          Stay updated with the latest news, events, and developments in our
          secure voting system.
        </p>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                {/* <Form.Label>Email Address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="btn-block mt-3">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsletterSection;
