import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import Footer from "../components/Footer";
import aboutUsImage from "../assets/images/about-us.jpeg";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <section id="about-us" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">About B-VOTE</h2>
          <Row className="mb-4">
            <Col md={6}>
              <Image src={aboutUsImage} alt="About Us" fluid rounded />
            </Col>
            <Col md={6}>
              <h3>Our Mission</h3>
              <p>
                We are dedicated to providing a secure and transparent voting
                platform powered by blockchain technology. Our mission is to
                ensure that every vote counts and is safeguarded against fraud.
                With a commitment to integrity and innovation, we aim to
                revolutionize the way elections are conducted, making the
                process more accessible and trustworthy for all.
              </p>
              <h3 className="mt-5">Our Team</h3>
              <p>
                Our team consists of dedicated individuals with expertise in
                blockchain technology and elections. Together, we are working
                tirelessly to build a better future for democracy.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Our Values</h3>
              <Row>
                <Col md={6} className="mb-3">
                  <Card className="h-100 about-us-card">
                    <Card.Body>
                      <Card.Title>Integrity</Card.Title>
                      <Card.Text>
                        We uphold the highest standards of integrity in all our
                        operations.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-3">
                  <Card className="h-100 about-us-card">
                    <Card.Body>
                      <Card.Title>Transparency</Card.Title>
                      <Card.Text>
                        We believe in complete transparency to build trust among
                        our users and stakeholders.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-3">
                  <Card className="h-100 about-us-card">
                    <Card.Body>
                      <Card.Title>Innovation</Card.Title>
                      <Card.Text>
                        We continuously innovate to stay at the forefront of
                        secure voting technology.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-3">
                  <Card className="h-100 about-us-card">
                    <Card.Body>
                      <Card.Title>Accessibility</Card.Title>
                      <Card.Text>
                        We strive to make our voting platform accessible to all,
                        ensuring that no one is left behind.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
