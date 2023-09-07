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
    <section id="newsletter" className="p-5 bg-black text-white text-center">
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
              <Button
                type="submit"
                variant="dark"
                className="btn btn-outline-light btn-lg mt-3"
                style={{ width: "180px" }}
              >
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
