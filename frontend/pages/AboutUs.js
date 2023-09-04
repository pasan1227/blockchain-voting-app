import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-5">
      <Container>
        <Row>
          <Col>
            <h2>About SecureVote</h2>
            <p>
              SecureVote is a pioneering organization dedicated to
              revolutionizing the way elections are conducted. We are passionate
              about ensuring that every citizen's voice is heard and every vote
              is counted accurately and securely.
            </p>
            <p>
              Our mission is to provide a secure and transparent voting platform
              that empowers citizens to participate in elections with
              confidence. We leverage blockchain technology to ensure the
              integrity of the voting process.
            </p>
            <h3>Our Values</h3>
            <ul>
              <li>
                <strong>Integrity:</strong> We are committed to upholding the
                highest standards of integrity in all our operations.
              </li>
              <li>
                <strong>Transparency:</strong> We believe in complete
                transparency to build trust among our users and stakeholders.
              </li>
              <li>
                <strong>Innovation:</strong> We continuously innovate to stay at
                the forefront of secure voting technology.
              </li>
              <li>
                <strong>Accessibility:</strong> We strive to make our voting
                platform accessible to all, ensuring that no one is left behind.
              </li>
            </ul>
            <h3>Our Team</h3>
            <p>
              SecureVote was founded by a group of dedicated individuals with
              expertise in blockchain technology, cybersecurity, and elections.
              Our team is passionate about creating a more secure and inclusive
              democracy.
            </p>
            <p>
              Meet our leadership team and the experts behind our voting system:
            </p>
            <ul>
              <li>
                <strong>John Doe</strong> - CEO and Co-Founder
              </li>
              <li>
                <strong>Jane Smith</strong> - CTO and Co-Founder
              </li>
              <li>
                <strong>Dr. Mark Johnson</strong> - Chief Security Officer
              </li>
              <li>
                <strong>Susan Brown</strong> - Chief Operations Officer
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
