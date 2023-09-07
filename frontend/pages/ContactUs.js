import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Footer from "../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <section id="contact-us" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">
            Have questions, feedback, or need assistance? We're here to help!
            Feel free to reach out to our dedicated support team using the
            contact information below. Your inquiries are important to us, and
            we'll do our best to provide you with a prompt and helpful response.
          </p>

          <div className="text-center mb-4">
            <strong>Contact Information:</strong>
            <br />
            <span>Email: support@bvote.com</span>
            <br />
            <span>Phone: +1 (123) 456-7890</span>
          </div>

          <p className="text-center">
            Alternatively, you can fill out the contact form provided on this
            page, and we'll get back to you as soon as possible.
          </p>
          <Row className="justify-content-center">
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="message">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button
                  className="mt-3"
                  variant="primary"
                  type="submit"
                  style={{ width: "860px" }}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <p className="text-center mt-4">
            Thank you for choosing B-VOTE. We value your input and are committed
            to delivering the best possible voting experience.
          </p>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
