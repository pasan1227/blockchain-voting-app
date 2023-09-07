import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-white">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>
              B-VOTE is on a mission to transform the way elections are
              conducted. We are committed to ensuring that every vote is secure,
              transparent, and counts. Our goal is to provide a safe and
              accessible platform for citizens to participate in the democratic
              process.
            </p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white link">
                  Home
                </a>
              </li>
              <li>
                <a href="/get-started" className="text-white link">
                  Get Started
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-white link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-white link">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <address>
              <p>123 Main Street</p>
              <p>Kandy, Sri Lanka</p>
              <p>Email: info@bvote.com</p>
              <p>Phone: +1 123-456-7890</p>
            </address>
          </Col>
        </Row>
        <hr className="bg-secondary" />
        <div className="text-center">
          <span className="text-center">
            © 2023{" "}
            <a href="/" className="text-white link">
              B-Vote
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
