import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <section id="about-us" className="py-5 bg-light">
        <Container>
          <h2 className="text-center text-primary mb-4">About B-VOTE</h2>
          <Row className="mb-4">
            <Col md={6}>
              <Image
                src="../assets/images/about-us.jpeg"
                alt="About Us"
                fluid
                className="about-us-image"
              />
            </Col>
            <Col md={6}>
              <h3>Our Mission</h3>
              <p>
                SecureVote is on a mission to transform the way elections are
                conducted. We are committed to ensuring that every vote is
                secure, transparent, and counts. Our goal is to provide a safe
                and accessible platform for citizens to participate in the
                democratic process.
              </p>
              <h3>Our Team</h3>
              <p>
                Our team consists of dedicated individuals with expertise in
                blockchain technology, cybersecurity, and elections. Together,
                we are working tirelessly to build a better future for
                democracy.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Our Values</h3>
              <ul className="values-list">
                <li>
                  <strong>Integrity:</strong> We uphold the highest standards of
                  integrity in all our operations.
                </li>
                <li>
                  <strong>Transparency:</strong> We believe in complete
                  transparency to build trust among our users and stakeholders.
                </li>
                <li>
                  <strong>Innovation:</strong> We continuously innovate to stay
                  at the forefront of secure voting technology.
                </li>
                <li>
                  <strong>Accessibility:</strong> We strive to make our voting
                  platform accessible to all, ensuring that no one is left
                  behind.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
